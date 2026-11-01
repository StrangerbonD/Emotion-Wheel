import React from 'react';
import { dispWord, dispBangla } from '../../utils/emotionHelpers.js';

export default function StatesMountainGraph({
  statesLeft,
  statesTop,
  statesWidth,
  statesHeight,
  statesBaseY,
  statePeaksRender,
  stateStops,
  gradIdStates,
  activeState,
  simple,
  isDark,
  kc,
  accentColor,
  isStateMuted,
  onHoverState,
  onToggleState,
}) {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${statesLeft}px`,
        top: `${statesTop}px`,
        width: `${statesWidth}px`,
        height: `${statesHeight}px`,
      }}
    >
      <svg
        width={statesWidth}
        height={statesHeight}
        className="overflow-visible block"
      >
        <defs>
          <linearGradient id={gradIdStates} x1="0%" y1="100%" x2="0%" y2="0%">
            {stateStops?.map((st, idx) => (
              <stop key={idx} offset={st.offset} stopColor={st.color} />
            ))}
          </linearGradient>
        </defs>

        {/* Overlapping State Area Peaks */}
        <g>
          {statePeaksRender.map((pk) => {
            const muted = isStateMuted(pk.name);
            const isSelected = activeState === pk.name;
            return (
              <path
                key={pk.name}
                d={pk.d}
                fill={`url(#${gradIdStates})`}
                stroke={isSelected ? accentColor : 'none'}
                strokeWidth={isSelected ? 1.6 : 0}
                style={{
                  opacity: muted ? 0.18 : 1,
                }}
                className="atlas-state-area atlas-multiply"
                onMouseEnter={() => onHoverState(pk.name)}
                onMouseLeave={() => onHoverState(null)}
                onClick={(e) => onToggleState(pk.name, e)}
              />
            );
          })}
        </g>

        {/* Crisp Baseline Intensity Axis */}
        <line
          x1={16}
          y1={statesBaseY}
          x2={statesWidth - 16}
          y2={statesBaseY}
          stroke={isDark ? '#555555' : '#4d4d4d'}
          strokeWidth="1"
          shapeRendering="crispEdges"
        />
        <text
          x={18}
          y={statesBaseY + 13}
          className="text-[9.5px] uppercase tracking-[0.12em] fill-[#777777] dark:fill-[#888888] pointer-events-none"
        >
          Less Intense
        </text>
        <text
          x={statesWidth - 18}
          y={statesBaseY + 13}
          textAnchor="end"
          className="text-[9.5px] uppercase tracking-[0.12em] fill-[#777777] dark:fill-[#888888] pointer-events-none"
        >
          More Intense
        </text>
      </svg>

      {/* Floating Uppercase + Bangla State Peak Labels */}
      <div className="absolute inset-0 pointer-events-none">
        {statePeaksRender.map((pk) => {
          const muted = isStateMuted(pk.name);
          const isSelected = activeState === pk.name;
          const staggerY =
            statePeaksRender.length >= 7 && pk.orderIdx % 2 === 1 ? -14 : 0;

          return (
            <button
              key={pk.name}
              type="button"
              onMouseEnter={() => onHoverState(pk.name)}
              onMouseLeave={() => onHoverState(null)}
              onClick={(e) => onToggleState(pk.name, e)}
              style={{
                left: `${pk.x1}px`,
                top: `${Math.max(4, pk.peakY - 22 + staggerY)}px`,
                transform: 'translate(-50%, -50%)',
                opacity: muted ? 0.22 : 1,
                borderColor: isSelected ? accentColor : 'transparent',
                backgroundColor: isSelected
                  ? isDark
                    ? 'rgba(28, 28, 32, 0.92)'
                    : 'rgba(255, 255, 255, 0.92)'
                  : 'transparent',
              }}
              className="pointer-events-auto absolute py-[3px] px-[7px] border rounded-[2px] cursor-pointer text-center whitespace-nowrap transition-all"
            >
              <span
                className="block text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] leading-tight"
                style={{ color: accentColor }}
              >
                {dispWord(pk.name, simple)}
              </span>
              <span
                className="atlas-bn block text-[11px] font-bold leading-tight"
                style={{ color: kc }}
              >
                {dispBangla(pk.name, simple)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
