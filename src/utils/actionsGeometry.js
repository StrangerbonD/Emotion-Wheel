// Pure SVG & Radial Layout Geometry for the Atlas of Emotions (#actions/) View

// Perspective foreshortening for the downward radial spear fan (tuned for 2-line English + বাংলা labels)
export const FORESHORTEN_Y = 0.72;

export const VALENCE_ORDER = {
  constructive: 0,
  both: 1,
  destructive: 2,
};

/**
 * Generates the organic tapered spear/petal SVG path modeled on
 * atlasofemotions.org/#actions/ (ARROW_SHAPE interpolated with a closed Cardinal spline)
 * pointing along +X from (0,0) to (radius, 0).
 */
export function buildAtlasSpearPath(radius) {
  if (radius <= 0) return '';
  const phi = 2 * Math.PI * 0.0115;
  const rMid = 0.75 * radius;
  const pts = [
    { x: 0, y: 0 },
    { x: rMid * Math.cos(phi), y: -rMid * Math.sin(phi) },
    { x: radius, y: 0 },
    { x: rMid * Math.cos(phi), y: rMid * Math.sin(phi) },
    { x: 0, y: 0 },
  ];

  // Cardinal spline (tension = 0 -> factor = 1/6) converted to SVG cubic Beziers
  const k = 1 / 6;
  let d = `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = i === 0 ? pts[0] : pts[i - 1];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = i + 2 < pts.length ? pts[i + 2] : pts[pts.length - 1];

    const cp1x = p1.x + (p2.x - p0.x) * k;
    const cp1y = p1.y + (p2.y - p0.y) * k;
    const cp2x = p2.x - (p3.x - p1.x) * k;
    const cp2y = p2.y - (p3.y - p1.y) * k;

    d += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(
      2
    )} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
  }
  return d + ' Z';
}

/**
 * Generates the emotion-specific Stamen SVG area silhouette for each Emotional State peak
 * on the [0..10] horizontal intensity scale.
 */
export function buildStatePeakPath(shapeType, x0, x1, x2, baseY, peakY) {
  const h = baseY - peakY;
  switch (shapeType) {
    case 'anger': {
      return `M ${x0.toFixed(1)},${baseY.toFixed(1)} L ${x1.toFixed(1)},${peakY.toFixed(
        1
      )} L ${x2.toFixed(1)},${baseY.toFixed(1)} Z`;
    }
    case 'fear': {
      const cLeftX = x0 + 0.74 * (x1 - x0);
      const cLeftY = baseY - 0.1 * h;
      const cRightX = x2 - 0.08 * (x2 - x1);
      const cRightY = peakY + 0.26 * h;
      return `M ${x0.toFixed(1)},${baseY.toFixed(1)} Q ${cLeftX.toFixed(1)},${cLeftY.toFixed(
        1
      )} ${x1.toFixed(1)},${peakY.toFixed(1)} Q ${cRightX.toFixed(1)},${cRightY.toFixed(
        1
      )} ${x2.toFixed(1)},${baseY.toFixed(1)} Z`;
    }
    case 'sadness': {
      const c1x = x0 + 0.38 * (x1 - x0);
      const c2x = x1 - 0.36 * (x1 - x0);
      const c3x = x1 + 0.36 * (x2 - x1);
      const c4x = x2 - 0.38 * (x2 - x1);
      return `M ${x0.toFixed(1)},${baseY.toFixed(1)} C ${c1x.toFixed(1)},${baseY.toFixed(
        1
      )} ${c2x.toFixed(1)},${peakY.toFixed(1)} ${x1.toFixed(1)},${peakY.toFixed(
        1
      )} C ${c3x.toFixed(1)},${peakY.toFixed(1)} ${c4x.toFixed(1)},${baseY.toFixed(
        1
      )} ${x2.toFixed(1)},${baseY.toFixed(1)} Z`;
    }
    case 'surprise': {
      const fLeftX = x0 + 0.28 * (x1 - x0);
      const fRightX = x2 - 0.28 * (x2 - x1);
      const fY = baseY - 0.52 * h;
      return `M ${x0.toFixed(1)},${baseY.toFixed(1)} L ${fLeftX.toFixed(1)},${fY.toFixed(
        1
      )} L ${x1.toFixed(1)},${peakY.toFixed(1)} L ${fRightX.toFixed(1)},${fY.toFixed(
        1
      )} L ${x2.toFixed(1)},${baseY.toFixed(1)} Z`;
    }
    case 'joy':
    case 'love':
    default: {
      const midY = baseY - 0.56 * h;
      const cLeftTop = x1 - 0.34 * (x1 - x0);
      const cRightTop = x1 + 0.34 * (x2 - x1);
      return `M ${x0.toFixed(1)},${baseY.toFixed(1)} C ${x0.toFixed(1)},${midY.toFixed(
        1
      )} ${cLeftTop.toFixed(1)},${peakY.toFixed(1)} ${x1.toFixed(1)},${peakY.toFixed(
        1
      )} C ${cRightTop.toFixed(1)},${peakY.toFixed(1)} ${x2.toFixed(1)},${midY.toFixed(
        1
      )} ${x2.toFixed(1)},${baseY.toFixed(1)} Z`;
    }
  }
}

/**
 * Returns the base fill opacity for an action spear ray based on its Atlas valence.
 */
export function getValenceFillOpacity(valence, isDark) {
  if (valence === 'constructive') return isDark ? 0.95 : 1.0;
  if (valence === 'both') return isDark ? 0.62 : 0.56;
  return isDark ? 0.36 : 0.28;
}
