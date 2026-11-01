import React from 'react';
import { CORES } from '../../data/emotionsData.js';
import { EMOTION_ACTIONS } from '../../data/actionsData.js';
import { dispWord, dispBangla, keyColor } from '../../utils/emotionHelpers.js';

export default function EmotionContinentNav({
  coreIdx,
  simple,
  isDark,
  onChooseCore,
}) {
  return (
    <nav
      aria-label="Core emotions navigation"
      onClick={(e) => e.stopPropagation()}
      className="absolute bottom-0 left-0 right-0 h-[62px] bg-white/90 dark:bg-[#121215]/90 backdrop-blur-[4px] border-t border-[#eeeeee] dark:border-[#26262b] z-30 flex items-center justify-around px-[8px] sm:px-[24px]"
    >
      {CORES.map((c, idx) => {
        const isSelected = idx === coreIdx;
        const cKey = keyColor(c.hue, isDark);
        const cAccent = isDark
          ? EMOTION_ACTIONS[c.name]?.palette?.accentDark || cKey
          : EMOTION_ACTIONS[c.name]?.palette?.accent || cKey;

        return (
          <button
            key={c.name}
            type="button"
            onClick={() => onChooseCore(idx)}
            className={`relative h-full px-[6px] sm:px-[14px] bg-transparent border-none cursor-pointer flex flex-col items-center justify-center transition-all ${
              isSelected ? 'opacity-100' : 'opacity-45 hover:opacity-85'
            }`}
          >
            {isSelected && (
              <span
                className="absolute top-0 left-[15%] right-[15%] h-[2.5px]"
                style={{ backgroundColor: cAccent }}
              />
            )}
            <span
              className={`text-[11px] sm:text-[13.5px] uppercase tracking-[0.14em] leading-tight ${
                isSelected
                  ? 'font-bold text-[#000000] dark:text-[#ffffff]'
                  : 'font-medium text-[#222222] dark:text-[#dddddd]'
              }`}
            >
              {dispWord(c.name, simple)}
            </span>
            <span
              className="atlas-bn text-[11px] sm:text-[12px] font-bold leading-tight mt-[2px]"
              style={{ color: cKey }}
            >
              {dispBangla(c.name, simple)}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
