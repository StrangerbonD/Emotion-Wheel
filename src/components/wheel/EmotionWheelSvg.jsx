import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { dispWord, keyColor } from '../../utils/emotionHelpers.js';
import {
  CX,
  CY,
  RH,
  RMID,
  buildRingSegments,
  computeLabelTransform,
} from '../../utils/wheelGeometry.js';

const MIN_SCALE = 0.6;
const MAX_SCALE = 3.5;

export default function EmotionWheelSvg({
  liveData,
  sel,
  simple,
  isDark,
  onSelectSeg,
  onResetSelection,
  onStepOut,
  onScaleChange,
  animTargetRef,
}) {
  const wrapperRef = useRef(null);
  const svgRef = useRef(null);
  const viewRef = useRef(null);
  const rotorRef = useRef(null);
  const hubRef = useRef(null);

  const transformState = useRef({
    curRot: 0,
    curScale: 1,
    focalR: 0,
    panX: 0,
    panY: 0,
    animId: 0,
    inertiaId: 0,
  });

  const dragState = useRef({
    on: false,
    mode: 'spin',
    startX: 0,
    startY: 0,
    startPanX: 0,
    startPanY: 0,
    lastAngle: 0,
    movedPx: 0,
    vel: 0,
    was: false,
    suppressClick: false,
  });

  const pinchState = useRef({
    active: false,
    initialDist: 0,
    initialScale: 1,
  });

  const [kbFocusedId, setKbFocusedId] = useState(null);

  const wheelGeometry = useMemo(
    () => buildRingSegments('default', simple, isDark),
    [simple, isDark]
  );

  const { orderedSegs, hasSelection } = useMemo(() => {
    const active = sel.ci !== null;
    const regular = [];
    const toFront = [];

    wheelGeometry.segs.forEach((seg) => {
      const i = seg.info;
      let on = false;
      let lead = false;
      let onPath = false;

      if (active && i.ci === sel.ci) {
        if (i.level === 0) {
          on = true;
        } else if (i.level === 1) {
          on = sel.si === null || i.si === sel.si;
        } else {
          on =
            sel.si === null ||
            (i.si === sel.si && (sel.ti === null || i.ti === sel.ti));
        }

        if (i.level === 0) onPath = true;
        else if (i.level === 1) onPath = sel.si !== null && i.si === sel.si;
        else onPath = sel.ti !== null && i.si === sel.si && i.ti === sel.ti;

        if (sel.ti !== null) {
          lead = i.level === 2 && i.si === sel.si && i.ti === sel.ti;
        } else if (sel.si !== null) {
          lead = i.level === 1 && i.si === sel.si;
        } else {
          lead = i.level === 0;
        }
      }

      const decorated = {
        ...seg,
        on,
        lead,
        onPath,
        strokeColor: onPath ? keyColor(seg.hue, isDark) : '',
        strokeWidth: onPath ? (lead ? '3.4' : '2.2') : '',
      };

      if (onPath || on) {
        toFront.push(decorated);
      } else {
        regular.push(decorated);
      }
    });

    toFront.sort((a, b) => b.info.level - a.info.level);

    return {
      orderedSegs: [...regular, ...toFront],
      hasSelection: active,
    };
  }, [wheelGeometry, sel, isDark]);

  const applyView = useCallback(() => {
    const { curRot, curScale, focalR, panX, panY } = transformState.current;
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translate3d(${panX.toFixed(1)}px, ${panY.toFixed(
        1
      )}px, 0)`;
    }
    if (rotorRef.current) {
      rotorRef.current.setAttribute('transform', `rotate(${curRot} ${CX} ${CY})`);
    }
    if (viewRef.current) {
      const s = curScale;
      const focalShift = s > 1 ? focalR * 0.55 * (s - 1) : 0;
      const tx = CX * (1 - s) - focalShift;
      const ty = CY * (1 - s);
      viewRef.current.setAttribute(
        'transform',
        `translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${s.toFixed(4)})`
      );
    }
    if (rotorRef.current) {
      const labelNodes = rotorRef.current.querySelectorAll('[data-base-mid]');
      labelNodes.forEach((node) => {
        const baseMid = parseFloat(node.getAttribute('data-base-mid'));
        const x = parseFloat(node.getAttribute('data-lx'));
        const y = parseFloat(node.getAttribute('data-ly'));
        const { transform } = computeLabelTransform(
          { baseMid, x, y, spoke: false, axis: false },
          curRot
        );
        node.setAttribute('transform', transform);
      });
    }
    if (onScaleChange) {
      onScaleChange(curScale);
    }
  }, [onScaleChange]);

  const animateTo = useCallback(
    (rot, scale, focal, duration = 520, targetPanX = null, targetPanY = null) => {
      const st = transformState.current;
      cancelAnimationFrame(st.animId);
      cancelAnimationFrame(st.inertiaId);
      const targetScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale));
      const f0 = st.focalR;
      const targetFocal = focal !== null && focal !== undefined ? focal : f0;
      const px0 = st.panX;
      const py0 = st.panY;
      const tPx = targetPanX !== null && targetPanX !== undefined ? targetPanX : px0;
      const tPy = targetPanY !== null && targetPanY !== undefined ? targetPanY : py0;

      const prefersReducedMotion =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion || duration <= 0) {
        st.curRot = rot;
        st.curScale = targetScale;
        st.focalR = targetFocal;
        st.panX = tPx;
        st.panY = tPy;
        applyView();
        return;
      }

      const r0 = st.curRot;
      const s0 = st.curScale;
      const dr = rot - r0;
      const ds = targetScale - s0;
      const df = targetFocal - f0;
      const dpx = tPx - px0;
      const dpy = tPy - py0;
      let start = null;

      function step(ts) {
        if (start === null) start = ts;
        const p = Math.min(1, (ts - start) / duration);
        const e = 1 - Math.pow(1 - p, 3);
        st.curRot = r0 + dr * e;
        st.curScale = s0 + ds * e;
        st.focalR = f0 + df * e;
        st.panX = px0 + dpx * e;
        st.panY = py0 + dpy * e;
        applyView();
        if (p < 1) {
          st.animId = requestAnimationFrame(step);
        }
      }
      st.animId = requestAnimationFrame(step);
    },
    [applyView]
  );

  useEffect(() => {
    if (animTargetRef) {
      animTargetRef.current = {
        animateToSeg: (info, mid) => {
          const st = transformState.current;
          let rawRot = 90 - mid;
          while (rawRot - st.curRot > 180) rawRot -= 360;
          while (rawRot - st.curRot < -180) rawRot += 360;
          const isMobile = window.matchMedia('(max-width:760px)').matches;
          const scaleArr = isMobile ? [1.7, 2.2, 2.75] : [1.45, 1.85, 2.3];
          animateTo(rawRot, scaleArr[info.level], RMID[info.level]);
        },
        animateStepOut: (level) => {
          const st = transformState.current;
          const isMobile = window.matchMedia('(max-width:760px)').matches;
          const scaleArr = isMobile ? [1.7, 2.2, 2.75] : [1.45, 1.85, 2.3];
          animateTo(st.curRot, scaleArr[level], RMID[level]);
        },
        animateReset: () => {
          const st = transformState.current;
          animateTo(st.curRot, 1, 0);
        },
        zoomBy: (delta) => {
          const st = transformState.current;
          const nextScale = Math.max(
            MIN_SCALE,
            Math.min(MAX_SCALE, +(st.curScale + delta).toFixed(2))
          );
          animateTo(st.curRot, nextScale, nextScale <= 1 ? 0 : st.focalR, 240);
        },
        resetZoom: () => {
          const st = transformState.current;
          animateTo(st.curRot, 1, 0, 320, 0, 0);
        },
        findSegMid: (ci, si, ti, level) => {
          const found = wheelGeometry.segs.find((g) => {
            const i = g.info;
            return (
              i.ci === ci &&
              (level < 1 || i.si === si) &&
              (level < 2 || i.ti === ti) &&
              i.level === level
            );
          });
          return found ? found.mid : null;
        },
      };
    }
  }, [animTargetRef, animateTo, wheelGeometry]);

  useEffect(() => {
    applyView();
  }, [orderedSegs, applyView]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    function angleAt(x, y) {
      const el = hubRef.current || svg;
      const r = el.getBoundingClientRect();
      return (Math.atan2(y - (r.top + r.height / 2), x - (r.left + r.width / 2)) * 180) / Math.PI;
    }

    const norm = (d) => {
      let val = d;
      while (val > 180) val -= 360;
      while (val < -180) val += 360;
      return val;
    };

    function inertia() {
      const st = transformState.current;
      const dr = dragState.current;
      st.curRot += dr.vel;
      dr.vel *= 0.95;
      applyView();
      if (Math.abs(dr.vel) > 0.05) {
        st.inertiaId = requestAnimationFrame(inertia);
      }
    }

    function glide(v) {
      const st = transformState.current;
      const dr = dragState.current;
      cancelAnimationFrame(st.inertiaId);
      dr.vel = v;
      st.inertiaId = requestAnimationFrame(inertia);
    }

    function onDown(e) {
      if (pinchState.current.active) return;
      const st = transformState.current;
      const dr = dragState.current;
      const isHub = Boolean(e.target?.closest && e.target.closest('.hub'));
      dr.on = true;
      dr.mode = isHub ? 'pan' : 'spin';
      dr.was = false;
      dr.startX = e.clientX;
      dr.startY = e.clientY;
      dr.startPanX = st.panX;
      dr.startPanY = st.panY;
      dr.movedPx = 0;
      dr.vel = 0;
      dr.lastAngle = angleAt(e.clientX, e.clientY);
      cancelAnimationFrame(st.animId);
      cancelAnimationFrame(st.inertiaId);
    }

    function onMove(e) {
      if (pinchState.current.active) return;
      const st = transformState.current;
      const dr = dragState.current;
      if (!dr.on) return;

      const dx = e.clientX - dr.startX;
      const dy = e.clientY - dr.startY;
      const distPx = Math.hypot(dx, dy);
      dr.movedPx = Math.max(dr.movedPx, distPx);

      if (dr.mode === 'pan') {
        if (!dr.was && dr.movedPx > 3) {
          dr.was = true;
          document.body.style.cursor = 'grabbing';
        }
        if (dr.was) {
          st.panX = dr.startPanX + dx;
          st.panY = dr.startPanY + dy;
          applyView();
        }
        return;
      }

      const a = angleAt(e.clientX, e.clientY);
      const d = norm(a - dr.lastAngle);
      dr.lastAngle = a;

      if (!dr.was && dr.movedPx > 8) {
        dr.was = true;
      }
      if (dr.was) {
        dr.vel = d;
        st.curRot += d;
        applyView();
      }
    }

    function onUp() {
      const dr = dragState.current;
      if (!dr.on) return;
      dr.on = false;
      document.body.style.cursor = '';
      if (dr.was) {
        dr.suppressClick = true;
        setTimeout(() => {
          dr.suppressClick = false;
        }, 250);
        if (dr.mode === 'spin' && Math.abs(dr.vel) > 0.4) {
          glide(dr.vel);
        }
      }
    }

    function onCancel() {
      dragState.current.on = false;
      document.body.style.cursor = '';
    }

    function getTouchDist(touches) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.hypot(dx, dy);
    }

    function onTouchStart(e) {
      if (e.touches.length === 2) {
        e.preventDefault();
        dragState.current.on = false;
        pinchState.current.active = true;
        pinchState.current.initialDist = getTouchDist(e.touches);
        pinchState.current.initialScale = transformState.current.curScale;
      }
    }

    function onTouchMove(e) {
      if (pinchState.current.active && e.touches.length === 2) {
        e.preventDefault();
        const dist = getTouchDist(e.touches);
        const ratio = dist / (pinchState.current.initialDist || 1);
        const st = transformState.current;
        st.curScale = Math.max(
          MIN_SCALE,
          Math.min(MAX_SCALE, pinchState.current.initialScale * ratio)
        );
        applyView();
      }
    }

    function onTouchEnd(e) {
      if (e.touches.length < 2) {
        pinchState.current.active = false;
      }
    }

    svg.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    svg.addEventListener('pointercancel', onCancel);
    svg.addEventListener('touchstart', onTouchStart, { passive: false });
    svg.addEventListener('touchmove', onTouchMove, { passive: false });
    svg.addEventListener('touchend', onTouchEnd);

    return () => {
      svg.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      svg.removeEventListener('pointercancel', onCancel);
      svg.removeEventListener('touchstart', onTouchStart);
      svg.removeEventListener('touchmove', onTouchMove);
      svg.removeEventListener('touchend', onTouchEnd);
    };
  }, [applyView]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    function onWheel(e) {
      e.preventDefault();
      const st = transformState.current;
      cancelAnimationFrame(st.animId);
      cancelAnimationFrame(st.inertiaId);

      if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY) * 1.5) {
        const deltaSpin = Math.max(-40, Math.min(40, e.deltaX || e.deltaY)) * 0.5;
        st.curRot += deltaSpin;
        applyView();
        return;
      }

      const zoomFactor = e.ctrlKey ? -e.deltaY * 0.01 : -e.deltaY * 0.0018;
      const nextScale = Math.max(
        MIN_SCALE,
        Math.min(MAX_SCALE, st.curScale * (1 + zoomFactor))
      );
      st.curScale = nextScale;
      if (nextScale <= 1.02) {
        st.focalR = st.focalR * 0.85;
      }
      applyView();
    }

    wrapper.addEventListener('wheel', onWheel, { passive: false });
    return () => wrapper.removeEventListener('wheel', onWheel);
  }, [applyView]);

  useEffect(() => {
    function kbSegsAtLevel() {
      if (sel.ci === null) return wheelGeometry.segs.filter((g) => g.info.level === 0);
      if (sel.si === null)
        return wheelGeometry.segs.filter((g) => g.info.level === 1 && g.info.ci === sel.ci);
      return wheelGeometry.segs.filter(
        (g) => g.info.level === 2 && g.info.ci === sel.ci && g.info.si === sel.si
      );
    }

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setKbFocusedId(null);
        return;
      }
      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        if (animTargetRef.current) animTargetRef.current.zoomBy(0.25);
        return;
      }
      if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        if (animTargetRef.current) animTargetRef.current.zoomBy(-0.25);
        return;
      }
      if (e.key === '0') {
        e.preventDefault();
        if (animTargetRef.current) animTargetRef.current.resetZoom();
        return;
      }
      if (
        document.activeElement === wrapperRef.current ||
        document.activeElement === document.body
      ) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          const pool = kbSegsAtLevel();
          if (!pool.length) return;
          let idx = kbFocusedId ? pool.findIndex((g) => g.id === kbFocusedId) : -1;
          idx =
            e.key === 'ArrowRight'
              ? (idx + 1) % pool.length
              : (idx - 1 + pool.length) % pool.length;
          const nextSeg = pool[idx];
          setKbFocusedId(nextSeg.id);
          if (wrapperRef.current) {
            const w =
              nextSeg.info.level === 0
                ? liveData[nextSeg.info.ci].name
                : nextSeg.info.level === 1
                ? liveData[nextSeg.info.ci].secs[nextSeg.info.si][0]
                : liveData[nextSeg.info.ci].secs[nextSeg.info.si][1][nextSeg.info.ti];
            wrapperRef.current.setAttribute('aria-label', 'Focused: ' + dispWord(w, simple));
          }
          return;
        }
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setKbFocusedId(null);
          onStepOut();
          return;
        }
        if ((e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') && kbFocusedId) {
          e.preventDefault();
          const target = wheelGeometry.segs.find((g) => g.id === kbFocusedId);
          if (target) {
            onSelectSeg(target.info, target.mid);
            setKbFocusedId(null);
          }
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [kbFocusedId, sel, wheelGeometry, liveData, simple, onSelectSeg, onStepOut, animTargetRef]);

  const handleSegClick = (e, seg) => {
    e.stopPropagation();
    if (dragState.current.suppressClick) return;
    onSelectSeg(seg.info, seg.mid);
  };

  const handleHubClick = (e) => {
    e.stopPropagation();
    if (dragState.current.suppressClick) return;
    onResetSelection();
  };

  const handleStageClick = () => {
    if (dragState.current.suppressClick) return;
    onStepOut();
  };

  return (
    <div
      className="stage w-full h-full flex items-center justify-center max-[760px]:justify-start"
      onClick={handleStageClick}
    >
      <div
        ref={wrapperRef}
        id="wrapper"
        tabIndex={0}
        role="application"
        aria-label="Emotion wheel. Use Tab to focus, arrow keys to navigate emotions, Enter to select, Escape to go back."
        className="wheel-wrapper flex-none touch-none outline-none"
      >
        <svg
          ref={svgRef}
          id="wheel"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Interactive emotion wheel"
          className="w-full h-full block overflow-visible"
        >
          <g ref={viewRef} id="view">
            <g
              ref={rotorRef}
              id="rotor"
              className={`rotor ${hasSelection ? 'has-selection' : ''}`}
            >
              {orderedSegs.map((seg) => {
                const isKbFocus = kbFocusedId === seg.id;
                const segClasses = [
                  'seg',
                  seg.levelClass,
                  seg.on ? 'active' : '',
                  seg.lead ? 'lead' : '',
                  isKbFocus ? 'kb-focus' : '',
                ]
                  .filter(Boolean)
                  .join(' ');

                return (
                  <g
                    key={seg.id}
                    className={segClasses}
                    role="button"
                    aria-label={dispWord(seg.word, simple)}
                    onClick={(e) => handleSegClick(e, seg)}
                  >
                    <path
                      d={seg.d}
                      fill={seg.fill}
                      style={{
                        stroke: seg.strokeColor || undefined,
                        strokeWidth: seg.strokeWidth || undefined,
                      }}
                    />
                    {seg.label && (
                      <text
                        x={seg.label.x}
                        y={seg.label.y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={seg.label.fontSize}
                        fontWeight={seg.label.fontWeight}
                        data-base-mid={seg.label.baseMid}
                        data-lx={seg.label.x}
                        data-ly={seg.label.y}
                        data-spoke="false"
                        data-axis="false"
                      >
                        {dispWord(seg.label.word, simple)}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>

            {/* Center Hub (drag to move wheel anywhere on screen, tap to reset selection) */}
            <g ref={hubRef} className="hub" onClick={handleHubClick}>
              <title>Drag to move wheel • Click to reset</title>
              <circle className="hub-circle" cx={CX} cy={CY} r={RH} />
              <text className="hub-text" x={CX} y={CY - 9} fontSize="17">
                I am
              </text>
              <text className="hub-text" x={CX} y={CY + 12} fontSize="17">
                feeling
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
