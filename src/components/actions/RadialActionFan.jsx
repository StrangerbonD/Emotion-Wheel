import React from 'react';
import {
  FORESHORTEN_Y,
  getValenceFillOpacity,
} from '../../utils/actionsGeometry.js';

export default function RadialActionFan({
  stageWidth,
  stageHeight,
  isCompact,
  originX,
  originY,
  spearRadius,
  spearPathD,
  gradIdActions,
  actionStops,
  orderedAllActions,
  activeFanActions,
  actionLayoutMap,
  selectedActionId,
  hoveredActionId,
  popupOpen,
  simple,
  isDark,
  kc,
  accentColor,
  isActionMuted,
  onHoverAction,
  onClickAction,
}) {
  return (
    <>
      {/* SVG Radial Tapered Spear Rays */}
      <svg
        width={stageWidth}
        height={stageHeight}
        className="absolute inset-0 pointer-events-none overflow-visible"
      >
        <defs>
          <linearGradient
            id={gradIdActions}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2={spearRadius}
            y2="0"
          >
            {actionStops?.map((st, idx) => (
              <stop key={idx} offset={st.offset} stopColor={st.color} />
            ))}
          </linearGradient>
        </defs>

        <g
          transform={`translate(${originX}, ${originY}) scale(1, ${FORESHORTEN_Y})`}
        >
          {orderedAllActions.map((act) => {
            const layout = actionLayoutMap[act.id];
            const visible = layout?.isVisible;
            const muted = isActionMuted(act);
            const valenceOpacity = getValenceFillOpacity(act.valence, isDark);
            const rayOpacity = !visible ? 0 : muted ? 0.14 : 1;

            return (
              <g
                key={act.id}
                style={{
                  transform: `rotate(${layout.thetaDeg}deg) scale(${
                    visible ? 1 : 0.01
                  })`,
                  opacity: rayOpacity,
                  pointerEvents: visible ? 'auto' : 'none',
                }}
                className="atlas-action-ray"
                onMouseEnter={() => onHoverAction(act.id)}
                onMouseLeave={() => onHoverAction(null)}
                onClick={(e) => onClickAction(act, e)}
              >
                <path
                  d={spearPathD}
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="14"
                />
                <path
                  d={spearPathD}
                  fill={`url(#${gradIdActions})`}
                  fillOpacity={valenceOpacity}
                  className="atlas-multiply"
                />
              </g>
            );
          })}
        </g>
      </svg>

      {/* Desktop/Tablet (>= 680px): Outward-anchored Arc Labels | Mobile (< 680px): Tappable Pill Strip */}
      {!isCompact ? (
        <div className="absolute inset-0 pointer-events-none">
          {orderedAllActions.map((act) => {
            const layout = actionLayoutMap[act.id];
            if (!layout?.isVisible) return null;

            const muted = isActionMuted(act);
            const isSelected = selectedActionId === act.id && popupOpen;
            const isHovered = hoveredActionId === act.id;

            const labelR = spearRadius + 12;
            const x = originX + labelR * Math.cos(layout.thetaRad);
            const y = originY + FORESHORTEN_Y * labelR * Math.sin(layout.thetaRad);

            let anchorTransform;
            let textAlignClass;
            if (layout.thetaDeg > 95) {
              anchorTransform =
                layout.thetaDeg <= 115
                  ? 'translate(-100%, 0px)'
                  : 'translate(-100%, -10px)';
              textAlignClass = 'text-right';
            } else if (layout.thetaDeg < 85) {
              anchorTransform =
                layout.thetaDeg >= 65
                  ? 'translate(0%, 0px)'
                  : 'translate(0%, -10px)';
              textAlignClass = 'text-left';
            } else {
              anchorTransform = 'translate(-50%, 24px)';
              textAlignClass = 'text-center';
            }

            const titleEn = simple ? act.simple.en : act.en;
            const titleBn = simple ? act.simple.bn : act.bn;

            return (
              <button
                key={act.id}
                type="button"
                onMouseEnter={() => onHoverAction(act.id)}
                onMouseLeave={() => onHoverAction(null)}
                onClick={(e) => onClickAction(act, e)}
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: anchorTransform,
                  opacity: muted ? 0.22 : 1,
                  borderColor:
                    isSelected || isHovered ? accentColor : 'transparent',
                  backgroundColor:
                    isSelected || isHovered
                      ? isDark
                        ? 'rgba(28, 28, 32, 0.92)'
                        : 'rgba(255, 255, 255, 0.92)'
                      : 'transparent',
                }}
                className={`atlas-action-label pointer-events-auto absolute py-[3px] px-[6px] border rounded-[2px] cursor-pointer ${textAlignClass}`}
              >
                <span
                  className="block text-[11px] xl:text-[12px] font-semibold uppercase tracking-[0.06em] leading-tight whitespace-nowrap"
                  style={{ color: accentColor }}
                >
                  {titleEn}
                </span>
                <span
                  className="atlas-bn block text-[11px] xl:text-[11.5px] font-bold leading-tight whitespace-nowrap mt-[1px]"
                  style={{ color: kc }}
                >
                  {titleBn}
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute left-[10px] right-[10px] bottom-[70px] flex flex-wrap items-center justify-center gap-[5px] z-20"
        >
          {activeFanActions.map((act) => {
            const isSelected = selectedActionId === act.id && popupOpen;
            const titleEn = simple ? act.simple.en : act.en;
            const titleBn = simple ? act.simple.bn : act.bn;
            return (
              <button
                key={act.id}
                type="button"
                onClick={(e) => onClickAction(act, e)}
                style={{
                  borderColor: isSelected
                    ? accentColor
                    : isDark
                    ? '#3a3a42'
                    : '#dcdcdc',
                }}
                className="py-[4px] px-[8px] rounded-[3px] border bg-white/90 dark:bg-[#222227]/90 cursor-pointer text-[11px]"
              >
                <span
                  className="font-semibold uppercase tracking-[0.04em]"
                  style={{ color: accentColor }}
                >
                  {titleEn}
                </span>
                <span className="atlas-bn ml-[4px] font-bold" style={{ color: kc }}>
                  ({titleBn})
                </span>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
