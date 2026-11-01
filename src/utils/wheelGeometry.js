import { CORES } from '../data/emotionsData.js';
import { dispWord, fillColor } from './emotionHelpers.js';

export const CX = 400;
export const CY = 400;
export const R0 = 70;
export const R1 = 168;
export const R2 = 270;
export const R3 = 388;
export const RH = 70;
export const RMID = [(R0 + R1) / 2, (R1 + R2) / 2, (R2 + R3) / 2];

export function pt(ang, r) {
  const a = (ang * Math.PI) / 180;
  return [CX + r * Math.sin(a), CY - r * Math.cos(a)];
}

export function arcPath(a0, a1, ri, ro) {
  const [x1, y1] = pt(a0, ro);
  const [x2, y2] = pt(a1, ro);
  const [x3, y3] = pt(a1, ri);
  const [x4, y4] = pt(a0, ri);
  const lg = a1 - a0 > 180 ? 1 : 0;
  return (
    `M${x1.toFixed(2)},${y1.toFixed(2)} A${ro},${ro} 0 ${lg} 1 ${x2.toFixed(2)},${y2.toFixed(2)} ` +
    `L${x3.toFixed(2)},${y3.toFixed(2)} A${ri},${ri} 0 ${lg} 0 ${x4.toFixed(2)},${y4.toFixed(2)} Z`
  );
}

export function calcFs(level, a0, a1, rIn, rOut, word, simple) {
  const rMid = (rIn + rOut) / 2;
  const arcLen = (Math.PI * rMid * (a1 - a0)) / 180;
  const baseFs = level === 0 ? 19 : level === 1 ? 13 : 10;
  const textW = dispWord(word, simple).length * baseFs * 0.55;
  return textW > arcLen * 0.85 ? Math.max(7, (baseFs * arcLen * 0.85) / textW) : baseFs;
}

export function computeLabelTransform(label, curRot) {
  const on = (((label.baseMid + curRot) % 360) + 360) % 360;
  const rot = label.baseMid - 90 + (on > 180 ? 180 : 0);
  return {
    transform: `rotate(${rot.toFixed(1)} ${label.x} ${label.y})`,
    textAnchor: 'middle',
  };
}

export function buildRingSegments(_modelKey, simple, isDark) {
  const data = CORES;
  let tt = 0;
  data.forEach((c) => {
    tt += c.secs.length * 2;
  });
  const unit = 360 / tt;
  let cur = 0;
  const segs = [];

  function pushSeg(level, ci, si, ti, a0, a1, rIn, rOut, hue, bright, word, overrideFs) {
    const mid = (a0 + a1) / 2;
    const rMid = (rIn + rOut) / 2;
    const [x, y] = pt(mid, rMid);
    const fs =
      overrideFs !== undefined
        ? overrideFs
        : calcFs(level, a0, a1, rIn, rOut, word, simple);
    segs.push({
      id: `junto-${level}-${ci}-${si}-${ti}`,
      type: 'arc',
      levelClass: ['core', 'sec', 'ter'][level],
      info: { level, ci, si, ti },
      mid,
      hue,
      bright: !!bright,
      word,
      d: arcPath(a0, a1, rIn, rOut),
      fill: fillColor(hue, level, bright, isDark),
      label: {
        word,
        baseMid: mid,
        x: +x.toFixed(2),
        y: +y.toFixed(2),
        fontSize: +fs.toFixed(1),
        spoke: false,
      },
    });
  }

  data.forEach((core, ci) => {
    const span = core.secs.length * 2 * unit;
    const cs = cur;
    let minFs1 = Infinity;
    let minFs2 = Infinity;
    let sc2 = cs;
    core.secs.forEach((sec) => {
      const sSpan = 2 * unit;
      minFs1 = Math.min(minFs1, calcFs(1, sc2, sc2 + sSpan, R1, R2, sec[0], simple));
      sec[1].forEach((ter, ti) => {
        const ts = sc2 + ti * unit;
        minFs2 = Math.min(minFs2, calcFs(2, ts, ts + unit, R2, R3, ter, simple));
      });
      sc2 += sSpan;
    });

    pushSeg(0, ci, -1, -1, cs, cs + span, R0, R1, core.hue, core.bright, core.name);
    let sc = cs;
    core.secs.forEach((sec, si) => {
      const sSpan = 2 * unit;
      pushSeg(1, ci, si, -1, sc, sc + sSpan, R1, R2, core.hue, core.bright, sec[0], minFs1);
      sec[1].forEach((ter, ti) => {
        const ts = sc + ti * unit;
        pushSeg(2, ci, si, ti, ts, ts + unit, R2, R3, core.hue, core.bright, ter, minFs2);
      });
      sc += sSpan;
    });
    cur += span;
  });

  return { segs };
}
