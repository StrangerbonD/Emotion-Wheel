import React from 'react';
import { ATLAS_INTRO, VALENCE_META } from '../../data/actionsData.js';
import { getEmotion, dispWord, dispBangla } from '../../utils/emotionHelpers.js';

export default function ActionsSidebar({
  coreObj,
  coreIdx,
  actionGroup,
  activeState,
  popupOpen,
  simple,
  isDark,
  kc,
  accentColor,
  onRestart,
  onClearState,
  onHoverState,
  onToggleState,
  onJumpToWheel,
}) {
  const activeStateEmotion = activeState ? getEmotion(activeState) : null;
  const activeStateSecIndex = activeState
    ? coreObj.secs.findIndex((s) => s[0] === activeState)
    : -1;
  const activeStateTertiaries =
    activeStateSecIndex >= 0 ? coreObj.secs[activeStateSecIndex][1] : [];

  return (
    <aside
      onClick={(e) => e.stopPropagation()}
      className="w-full lg:w-[272px] xl:w-[304px] lg:h-full flex-none bg-[#eeeeee] dark:bg-[#1c1c1f] border-b lg:border-b-0 lg:border-r border-[#dfdfdf] dark:border-[#2d2d32] pt-[68px] pb-[20px] lg:pb-[68px] px-[20px] xl:px-[24px] flex flex-col z-20"
    >
      {/* Section Heading + RESTART */}
      <div className="relative pb-[14px] mb-[14px] border-b border-[#000000] dark:border-[#555555] flex items-baseline justify-between gap-[8px]">
        <div>
          <h2 className="m-0 text-[26px] font-light tracking-[0.02em] leading-none text-[#000000] dark:text-[#ffffff]">
            Actions
          </h2>
          <span
            className="atlas-bn block text-[15px] font-bold mt-[4px]"
            style={{ color: kc }}
          >
            প্রতিক্রিয়া ও আচরণ
          </span>
        </div>

        {(activeState || popupOpen) && (
          <button
            type="button"
            onClick={onRestart}
            title="Reset selection"
            className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#444444] hover:text-[#000000] dark:text-[#bbbbbb] dark:hover:text-[#ffffff] bg-transparent border-none cursor-pointer p-0 flex items-center gap-[4px] transition-opacity"
          >
            <span>Restart</span>
            <span className="text-[13px] leading-none">&#8635;</span>
          </button>
        )}
      </div>

      {/* Scrollable Sidebar Body */}
      <div className="flex-1 lg:overflow-y-auto pr-[2px] space-y-[14px]">
        {activeState && activeStateEmotion ? (
          /* SELECTED EMOTIONAL STATE VIEW */
          <div className="space-y-[12px]">
            <div className="flex items-center justify-between gap-[6px]">
              <span className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#666666] dark:text-[#aaaaaa]">
                Selected State
              </span>
              <button
                type="button"
                onClick={onClearState}
                className="text-[11px] font-semibold underline bg-transparent border-none cursor-pointer text-[#333333] dark:text-[#cccccc] p-0"
              >
                All {dispWord(coreObj.name, simple)} Actions
              </button>
            </div>

            <div>
              <h3 className="m-0 text-[20px] font-semibold uppercase tracking-[0.05em] text-[#000000] dark:text-[#ffffff]">
                {dispWord(activeState, simple)}
              </h3>
              <div
                className="atlas-bn text-[16px] font-bold mt-[1px]"
                style={{ color: kc }}
              >
                {dispBangla(activeState, simple)}
              </div>
            </div>

            <div className="rounded-[4px] bg-white/85 dark:bg-[#26262a] border border-[#dcdcdc] dark:border-[#38383e] py-[9px] px-[11px]">
              <p className="m-0 text-[13.5px] leading-[1.5] text-[#000000] dark:text-[#ffffff]">
                {activeStateEmotion.meaning.en}
              </p>
            </div>

            {activeStateEmotion.meaning.bn && (
              <div
                className="rounded-[4px] py-[9px] px-[11px] border"
                style={{
                  background: isDark
                    ? `hsl(${coreObj.hue}, 28%, 16%)`
                    : `hsl(${coreObj.hue}, 65%, 96%)`,
                  borderColor: isDark
                    ? `hsl(${coreObj.hue}, 35%, 26%)`
                    : `hsl(${coreObj.hue}, 55%, 85%)`,
                }}
              >
                <p
                  className="atlas-bn m-0 text-[13.5px] leading-[1.55]"
                  style={{ color: kc }}
                >
                  {activeStateEmotion.meaning.bn}
                </p>
              </div>
            )}

            {/* Related Tertiary Nuances */}
            {activeStateTertiaries.length > 0 && (
              <div>
                <span className="block text-[10.5px] font-bold uppercase tracking-[0.09em] text-[#666666] dark:text-[#999999] mb-[6px]">
                  Related Wheel Feelings
                </span>
                <div className="flex flex-wrap gap-[6px]">
                  {activeStateTertiaries.map((terWord, ti) => (
                    <button
                      key={terWord}
                      type="button"
                      onClick={() => onJumpToWheel(coreIdx, activeStateSecIndex, ti)}
                      className="text-[12px] py-[4px] px-[9px] rounded-[3px] bg-white hover:bg-[#f7f7f7] dark:bg-[#28282d] dark:hover:bg-[#323238] border border-[#cccccc] dark:border-[#44444a] cursor-pointer transition-colors"
                    >
                      <span className="font-semibold text-[#000000] dark:text-[#ffffff]">
                        {dispWord(terWord, simple)}
                      </span>
                      <span className="atlas-bn ml-[4px]" style={{ color: kc }}>
                        ({dispBangla(terWord, simple)})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Atlas-styled Bordered Action Button */}
            {activeStateSecIndex >= 0 && (
              <button
                type="button"
                onClick={() => onJumpToWheel(coreIdx, activeStateSecIndex, null)}
                className="w-full py-[8px] px-[12px] border border-[#000000] dark:border-[#777777] rounded-[3px] bg-gradient-to-b from-[#ffffff] to-[#e9e9e9] dark:from-[#2c2c30] dark:to-[#222226] text-[#000000] dark:text-[#ffffff] text-[11.5px] font-semibold uppercase tracking-[0.08em] shadow-[1px_2px_4px_rgba(0,0,0,0.18)] hover:font-bold cursor-pointer transition-all"
              >
                View {dispWord(activeState, simple)} on Wheel &#8599;
              </button>
            )}
          </div>
        ) : (
          /* DEFAULT ATLAS ACTIONS OVERVIEW */
          <>
            <div className="rounded-[4px] bg-white/80 dark:bg-[#26262a] border border-[#dcdcdc] dark:border-[#38383e] py-[9px] px-[11px]">
              <p className="m-0 text-[13px] leading-[1.52] text-[#000000] dark:text-[#ffffff]">
                {ATLAS_INTRO.en}
              </p>
            </div>

            <div
              className="rounded-[4px] py-[9px] px-[11px] border"
              style={{
                background: isDark
                  ? `hsl(${coreObj.hue}, 28%, 16%)`
                  : `hsl(${coreObj.hue}, 65%, 96%)`,
                borderColor: isDark
                  ? `hsl(${coreObj.hue}, 35%, 26%)`
                  : `hsl(${coreObj.hue}, 55%, 85%)`,
              }}
            >
              <p
                className="atlas-bn m-0 text-[13px] leading-[1.56]"
                style={{ color: kc }}
              >
                {ATLAS_INTRO.bn}
              </p>
            </div>

            {/* Active Continent Impulse Summary */}
            {actionGroup && (
              <div className="pt-[4px]">
                <div className="flex items-center justify-between mb-[5px]">
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#000000] dark:text-[#ffffff]">
                    {dispWord(coreObj.name, simple)}
                    <span className="atlas-bn ml-[6px] font-bold" style={{ color: kc }}>
                      ({dispBangla(coreObj.name, simple)})
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => onJumpToWheel(coreIdx, null, null)}
                    className="text-[11px] font-semibold bg-transparent border-none p-0 cursor-pointer hover:underline"
                    style={{ color: accentColor }}
                  >
                    Wheel &#8599;
                  </button>
                </div>
                <div className="rounded-[4px] bg-white/80 dark:bg-[#26262a] border border-[#dcdcdc] dark:border-[#38383e] py-[8px] px-[10px]">
                  <p className="m-0 text-[12.5px] leading-[1.48] text-[#000000] dark:text-[#ffffff]">
                    {actionGroup.summary.en}
                  </p>
                </div>
                <div
                  className="mt-[5px] rounded-[4px] py-[8px] px-[10px] border"
                  style={{
                    background: isDark
                      ? `hsl(${coreObj.hue}, 28%, 16%)`
                      : `hsl(${coreObj.hue}, 65%, 96%)`,
                    borderColor: isDark
                      ? `hsl(${coreObj.hue}, 35%, 26%)`
                      : `hsl(${coreObj.hue}, 55%, 85%)`,
                  }}
                >
                  <p
                    className="atlas-bn m-0 text-[12.5px] leading-[1.52]"
                    style={{ color: kc }}
                  >
                    {actionGroup.summary.bn}
                  </p>
                </div>
              </div>
            )}

            {/* Atlas Ray Opacity Legend (Constructive / Context-Dependent / Destructive) */}
            <div className="pt-[4px]">
              <span className="block text-[10.5px] font-bold uppercase tracking-[0.09em] text-[#666666] dark:text-[#999999] mb-[6px]">
                Ray Shading Key
              </span>
              <div className="space-y-[5px] text-[12px]">
                {[
                  { key: 'constructive', op: 1 },
                  { key: 'both', op: 0.55 },
                  { key: 'destructive', op: 0.26 },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center gap-[8px] py-[3px] px-[7px] rounded-[3px] bg-white/60 dark:bg-[#252529]"
                  >
                    <span
                      className="w-[22px] h-[9px] rounded-full flex-none"
                      style={{
                        background: accentColor,
                        opacity: item.op,
                      }}
                    />
                    <span className="font-medium text-[#000000] dark:text-[#ffffff]">
                      {VALENCE_META[item.key].en}
                    </span>
                    <span
                      className="atlas-bn ml-auto text-[11.5px] font-semibold"
                      style={{ color: kc }}
                    >
                      {VALENCE_META[item.key].bn}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Interactive State Links (ordered mild -> intense) */}
            {actionGroup?.statePeaks && (
              <div className="pt-[4px]">
                <span className="block text-[10.5px] font-bold uppercase tracking-[0.09em] text-[#666666] dark:text-[#999999] mb-[6px]">
                  States (Mild &#8594; Intense)
                </span>
                <div className="flex flex-wrap gap-[5px]">
                  {actionGroup.statePeaks.map((pk) => (
                    <button
                      key={pk.name}
                      type="button"
                      onMouseEnter={() => onHoverState(pk.name)}
                      onMouseLeave={() => onHoverState(null)}
                      onClick={(e) => onToggleState(pk.name, e)}
                      className="text-[11.5px] py-[3.5px] px-[8px] rounded-[3px] bg-white/85 hover:bg-white dark:bg-[#27272b] dark:hover:bg-[#323238] border border-[#d6d6d6] dark:border-[#3e3e45] cursor-pointer transition-colors"
                    >
                      <span
                        className="font-semibold uppercase tracking-[0.04em]"
                        style={{ color: accentColor }}
                      >
                        {dispWord(pk.name, simple)}
                      </span>
                      <span className="atlas-bn ml-[4px]" style={{ color: kc }}>
                        ({dispBangla(pk.name, simple)})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </aside>
  );
}
