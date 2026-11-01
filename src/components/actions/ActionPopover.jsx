import React from 'react';
import { VALENCE_META } from '../../data/actionsData.js';
import { dispWord, dispBangla } from '../../utils/emotionHelpers.js';
import { speakEnglishText } from '../../utils/speech.js';

export default function ActionPopover({
  selectedAction,
  popupCoords,
  coreObj,
  paletteRgb,
  simple,
  isDark,
  kc,
  accentColor,
  onClose,
  onPaginate,
  onToggleState,
}) {
  if (!selectedAction || !popupCoords) return null;

  const handleSpeak = (e) => {
    e.stopPropagation();
    const title = simple ? selectedAction.simple.en : selectedAction.en;
    speakEnglishText(`${title}. ${selectedAction.meaning.en} ${selectedAction.shift.en}`, 0.92);
  };

  return (
    <div
      data-atlas-popup="true"
      onClick={(e) => e.stopPropagation()}
      style={{
        left: `${popupCoords.left}px`,
        top: `${popupCoords.top}px`,
        width: `${popupCoords.width}px`,
        borderColor: accentColor,
      }}
      className="atlas-popup-enter absolute z-40 border bg-white/95 dark:bg-[#1e1e22]/95 shadow-[0_14px_38px_rgba(0,0,0,0.18)] dark:shadow-[0_14px_40px_rgba(0,0,0,0.65)] backdrop-blur-[3px]"
    >
      {/* Primary Atlas Action Description Box */}
      <div className="pt-[15px] px-[18px] pb-[14px]">
        <div className="flex items-start gap-[8px]">
          <button
            type="button"
            onClick={handleSpeak}
            aria-label="Read action aloud"
            title="Read aloud"
            className="border border-[#dcdcdc] dark:border-[#444] bg-white dark:bg-[#2c2c32] cursor-pointer p-[4px] rounded-full opacity-75 hover:opacity-100 inline-flex items-center justify-center w-[28px] h-[28px] flex-none mt-[1px]"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          </button>

          <div className="flex-1 min-w-0">
            <h4
              className="m-0 text-[15px] font-bold uppercase tracking-[0.07em] leading-snug"
              style={{ color: accentColor }}
            >
              {simple ? selectedAction.simple.en : selectedAction.en}
            </h4>
            <div
              className="atlas-bn text-[15px] font-bold leading-snug"
              style={{ color: kc }}
            >
              {simple ? selectedAction.simple.bn : selectedAction.bn}
            </div>
          </div>

          {/* Pagination (< >) + Atlas Thin Cross (×) Button */}
          <div className="flex items-center gap-[4px] flex-none ml-auto">
            <button
              type="button"
              onClick={(e) => onPaginate(-1, e)}
              aria-label="Previous action"
              title="Previous action"
              className="w-[24px] h-[24px] bg-transparent hover:bg-[#eeeeee] dark:hover:bg-[#333338] border-none rounded-[2px] text-[15px] text-[#555] dark:text-[#ccc] cursor-pointer flex items-center justify-center p-0"
            >
              &#8249;
            </button>
            <button
              type="button"
              onClick={(e) => onPaginate(1, e)}
              aria-label="Next action"
              title="Next action"
              className="w-[24px] h-[24px] bg-transparent hover:bg-[#eeeeee] dark:hover:bg-[#333338] border-none rounded-[2px] text-[15px] text-[#555] dark:text-[#ccc] cursor-pointer flex items-center justify-center p-0"
            >
              &#8250;
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close action popup"
              title="Close (×)"
              className="w-[28px] h-[28px] bg-transparent hover:bg-[#eeeeee] dark:hover:bg-[#333338] border-none rounded-[2px] text-[26px] font-extralight leading-none text-[#222222] dark:text-[#eeeeee] cursor-pointer flex items-center justify-center p-0"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Action Meaning (English in crisp black + Bangla in emotion color) */}
        <div className="mt-[10px] rounded-[3px] bg-[#f8f9fa] dark:bg-[#28282e] border border-[#ebebeb] dark:border-[#36363e] py-[7px] px-[10px]">
          <p className="m-0 text-[13px] leading-[1.48] text-[#000000] dark:text-[#ffffff]">
            {selectedAction.meaning.en}
          </p>
        </div>
        <div
          className="mt-[5px] rounded-[3px] py-[7px] px-[10px] border"
          style={{
            background: isDark
              ? `hsl(${coreObj.hue}, 28%, 16%)`
              : `hsl(${coreObj.hue}, 68%, 96%)`,
            borderColor: isDark
              ? `hsl(${coreObj.hue}, 35%, 26%)`
              : `hsl(${coreObj.hue}, 55%, 86%)`,
          }}
        >
          <p
            className="atlas-bn m-0 text-[13px] leading-[1.52]"
            style={{ color: kc }}
          >
            {selectedAction.meaning.bn}
          </p>
        </div>
      </div>

      {/* Attached Atlas .secondary Valence & Mindful Guidance Block */}
      <div
        style={{
          borderTopColor: accentColor,
          backgroundColor: isDark
            ? `rgba(${paletteRgb}, 0.16)`
            : `rgba(${paletteRgb}, ${
                selectedAction.valence === 'constructive'
                  ? 0.14
                  : selectedAction.valence === 'both'
                  ? 0.09
                  : 0.06
              })`,
        }}
        className="border-t py-[11px] px-[18px]"
      >
        <div className="flex items-center justify-between gap-[8px] mb-[6px]">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.08em]"
            style={{ color: accentColor }}
          >
            {VALENCE_META[selectedAction.valence]?.en}
          </span>
          <span
            className="atlas-bn text-[12px] font-bold"
            style={{ color: kc }}
          >
            {VALENCE_META[selectedAction.valence]?.bn}
          </span>
        </div>

        <div className="rounded-[3px] bg-white/90 dark:bg-[#242429] border border-[#e6e6e6] dark:border-[#36363e] py-[6px] px-[9px]">
          <p className="m-0 text-[12.5px] leading-[1.45] text-[#000000] dark:text-[#ffffff]">
            <b className="font-semibold uppercase text-[10.5px] tracking-[0.06em] mr-[5px]">
              Mindful Shift:
            </b>
            {selectedAction.shift.en}
          </p>
        </div>
        <div
          className="mt-[4px] rounded-[3px] py-[6px] px-[9px] border"
          style={{
            background: isDark
              ? `hsl(${coreObj.hue}, 28%, 15%)`
              : `hsl(${coreObj.hue}, 68%, 97%)`,
            borderColor: isDark
              ? `hsl(${coreObj.hue}, 35%, 25%)`
              : `hsl(${coreObj.hue}, 55%, 86%)`,
          }}
        >
          <p
            className="atlas-bn m-0 text-[12.5px] leading-[1.5]"
            style={{ color: kc }}
          >
            {selectedAction.shift.bn}
          </p>
        </div>

        {/* Connected States Pills */}
        <div className="flex flex-wrap items-center gap-[5px] mt-[8px]">
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#666] dark:text-[#aaa] mr-[2px]">
            States:
          </span>
          {selectedAction.states.map((stName) => (
            <button
              key={stName}
              type="button"
              onClick={(e) => onToggleState(stName, e)}
              className="text-[11px] py-[2px] px-[7px] rounded-[2px] bg-white/90 hover:bg-white dark:bg-[#2a2a30] border border-[#d4d4d4] dark:border-[#444] cursor-pointer"
            >
              <span className="font-semibold text-[#000000] dark:text-[#ffffff]">
                {dispWord(stName, simple)}
              </span>
              <span className="atlas-bn ml-[3px]" style={{ color: kc }}>
                ({dispBangla(stName, simple)})
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
