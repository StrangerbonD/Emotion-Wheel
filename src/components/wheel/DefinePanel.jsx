import React, { useState, useEffect } from 'react';
import {
  getEmotion,
  dispWord,
  dispBangla,
  fillColor,
  keyColor,
} from '../../utils/emotionHelpers.js';
import { speakEnglishText } from '../../utils/speech.js';
import { getActionsForSelection } from '../../data/actionsData.js';

export default function DefinePanel({
  selectedWord,
  secondaryParentWord,
  branchSecondaryWord,
  coreEmotion,
  open,
  onClose,
  onOpenActions,
  simple,
  isDark,
}) {
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    setIntensity(0);
  }, [selectedWord]);

  if (!open || !selectedWord || !coreEmotion) return null;

  const emotion = getEmotion(selectedWord);
  const coreEntry = getEmotion(coreEmotion.name);

  const meaningEn = emotion?.meaning?.en || 'A feeling on the wheel.';
  const meaningBn = emotion?.meaning?.bn || '';
  const exampleEn = emotion?.example?.en || '';
  const exampleBn = emotion?.example?.bn || '';

  const coreBangla = dispBangla(coreEmotion.name, simple);
  const secParentBangla = secondaryParentWord
    ? dispBangla(secondaryParentWord, simple)
    : '';

  const kc = keyColor(coreEmotion.hue, isDark);
  const tagBg = fillColor(coreEmotion.hue, 2, coreEmotion.bright, isDark);

  const prompts = emotion?.whatNow || coreEntry?.whatNow;
  const whatNowPrompt =
    intensity > 0 && prompts ? prompts[intensity >= 4 ? 1 : 0] : null;

  const relatedActions = getActionsForSelection(
    coreEmotion.name,
    branchSecondaryWord
  );

  const activeEnglish = dispWord(selectedWord, simple);
  const activeBangla = dispBangla(selectedWord, simple);
  const altEnglish = simple
    ? emotion?.en || selectedWord
    : emotion?.simple?.en || selectedWord;
  const altBangla = simple ? emotion?.bn || '' : emotion?.simple?.bn || '';

  const handleSpeak = () => {
    const text =
      activeEnglish +
      '. ' +
      meaningEn +
      (exampleEn ? ' For example: ' + exampleEn : '');
    speakEnglishText(text, 0.9);
  };

  return (
    <div
      id="defineWrap"
      onClick={(e) => e.stopPropagation()}
      className="define-wrap show fixed bottom-[16px] right-[16px] z-30 flex flex-col items-end"
    >
      <div
        id="defineCard"
        className="define-card open bg-white dark:bg-[#242424] border border-[#ececec] dark:border-[#3a3a3a] rounded-[18px] shadow-[0_16px_44px_rgba(0,0,0,0.18)] dark:shadow-[0_16px_44px_rgba(0,0,0,0.6)] pt-[16px] px-[18px] pb-[18px] w-[min(380px,90vw)] max-h-[82vh] overflow-y-auto animate-pop"
      >
        {/* Header with Speak button, Emotion Name (English + বাংলা), and Cross (×) Close button */}
        <div className="dhead flex items-start gap-[10px]">
          <button
            type="button"
            onClick={handleSpeak}
            aria-label="Read aloud"
            title="Read aloud"
            className="speak-btn border border-[#e6e6e6] dark:border-[#555] bg-white dark:bg-[#333] cursor-pointer p-[5px] rounded-full opacity-75 hover:opacity-100 focus:opacity-100 transition-opacity inline-flex items-center justify-center w-[32px] h-[32px] flex-none mt-[2px]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          </button>

          <div className="flex-1 min-w-0">
            <h3 className="m-0 text-[20px] font-bold text-[#000000] dark:text-[#ffffff] leading-snug">
              {activeEnglish}
              {activeBangla && (
                <span
                  className="block text-[17px] font-bold mt-[1px]"
                  style={{ color: kc }}
                >
                  {activeBangla}
                </span>
              )}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close meaning"
            title="Close (×)"
            className="close-def-btn border border-[#dcdcdc] dark:border-[#555] bg-[#f5f5f5] hover:bg-[#e5e5e5] dark:bg-[#333] dark:hover:bg-[#444] text-[#333] dark:text-[#eee] cursor-pointer p-[5px] rounded-full transition-colors inline-flex items-center justify-center w-[32px] h-[32px] flex-none ml-auto"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Core & Secondary Parent Tags + Normal / Simplified Bangla mapping pill */}
        <div className="flex flex-wrap items-center gap-[6px] mt-[9px] mb-[12px]">
          <span
            className="core-tag inline-block text-[11px] font-bold tracking-[0.05em] uppercase py-[3px] px-[9px] rounded-full"
            style={{ background: tagBg, color: kc }}
          >
            {dispWord(coreEmotion.name, simple)}
            {coreBangla ? ` (${coreBangla})` : ''}
            {secondaryParentWord
              ? ` › ${dispWord(secondaryParentWord, simple)}${
                  secParentBangla ? ` (${secParentBangla})` : ''
                }`
              : ''}
          </span>

          {emotion && (
            <span className="text-[11.5px] text-[#777] dark:text-[#aaa] bg-[#f7f7f7] dark:bg-[#2e2e2e] py-[2px] px-[8px] rounded-full">
              {simple ? 'Normal: ' : 'Simple: '}
              <b className="font-semibold text-[#444] dark:text-[#ddd]">
                {altEnglish}
              </b>
              {altBangla ? ` (${altBangla})` : ''}
            </span>
          )}
        </div>

        {/* Meaning (English + বাংলা with distinct background colors) */}
        <div className="mb-[12px]">
          <span className="block text-[10.5px] font-bold uppercase tracking-[0.07em] text-[#888] dark:text-[#999] mb-[5px]">
            Meaning
          </span>
          <div className="rounded-[10px] bg-[#f8f9fa] dark:bg-[#2c2c2c] border border-[#eee] dark:border-[#383838] py-[8px] px-[11px]">
            <p className="m-0 text-[14px] leading-[1.5] font-normal text-[#000000] dark:text-[#ffffff]">
              {meaningEn}
            </p>
          </div>
          {meaningBn && (
            <div
              className="mt-[5px] rounded-[10px] py-[8px] px-[11px] border"
              style={{
                background: isDark
                  ? `hsl(${coreEmotion.hue}, 30%, 16%)`
                  : `hsl(${coreEmotion.hue}, 70%, 96%)`,
                borderColor: isDark
                  ? `hsl(${coreEmotion.hue}, 35%, 26%)`
                  : `hsl(${coreEmotion.hue}, 60%, 86%)`,
              }}
            >
              <p
                className="m-0 text-[14px] leading-[1.55] font-normal"
                style={{ color: kc }}
              >
                {meaningBn}
              </p>
            </div>
          )}
        </div>

        {/* Example Sentence (English + বাংলা with distinct background colors) */}
        {(exampleEn || exampleBn) && (
          <div className="m-0">
            <span className="block text-[10.5px] font-bold uppercase tracking-[0.07em] text-[#888] dark:text-[#999] mb-[5px]">
              Example
            </span>
            {exampleEn && (
              <div className="rounded-[10px] bg-[#f8f9fa] dark:bg-[#2c2c2c] border border-[#eee] dark:border-[#383838] py-[8px] px-[11px]">
                <p className="m-0 italic text-[#000000] dark:text-[#ffffff] font-normal text-[13.5px] leading-[1.5]">
                  {exampleEn}
                </p>
              </div>
            )}
            {exampleBn && (
              <div
                className="mt-[5px] rounded-[10px] py-[8px] px-[11px] border"
                style={{
                  background: isDark
                    ? `hsl(${coreEmotion.hue}, 30%, 16%)`
                    : `hsl(${coreEmotion.hue}, 70%, 96%)`,
                  borderColor: isDark
                    ? `hsl(${coreEmotion.hue}, 35%, 26%)`
                    : `hsl(${coreEmotion.hue}, 60%, 86%)`,
                }}
              >
                <p
                  className="m-0 font-normal text-[13.5px] leading-[1.55]"
                  style={{ color: kc }}
                >
                  {exampleBn}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Atlas of Emotions — Linked Behavioral Actions */}
        {relatedActions.length > 0 && (
          <div className="mt-[13px] pt-[11px] border-t border-[#eeeeee] dark:border-[#363636]">
            <div className="flex items-center justify-between mb-[6px]">
              <span className="text-[10.5px] font-bold uppercase tracking-[0.07em] text-[#888] dark:text-[#999]">
                Actions &amp; Responses
              </span>
              {onOpenActions && (
                <button
                  type="button"
                  onClick={() => onOpenActions(null)}
                  className="text-[11.5px] font-bold bg-transparent border-none p-0 cursor-pointer hover:underline"
                  style={{ color: kc }}
                >
                  Open Actions Map &#8594;
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-[5px]">
              {relatedActions.map((act) => {
                const isConstructive = act.impact === 'constructive';
                const labelEn = simple ? act.simple.en : act.en;
                const labelBn = simple ? act.simple.bn : act.bn;
                return (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => onOpenActions && onOpenActions(act.id)}
                    title="Click to explore this action"
                    className={`text-[11.5px] py-[4px] px-[9px] rounded-full border cursor-pointer transition-colors text-left ${
                      isConstructive
                        ? 'bg-[#eefaf2] border-[#ccebd7] hover:bg-[#e1f6e8] dark:bg-[#193022] dark:border-[#295238]'
                        : 'bg-[#fff5f5] border-[#f8d7d7] hover:bg-[#ffebeb] dark:bg-[#331e1e] dark:border-[#542c2c]'
                    }`}
                  >
                    <span className="font-semibold text-[#000000] dark:text-[#ffffff]">
                      {isConstructive ? '+ ' : '• '}
                      {labelEn}
                    </span>
                    <span className="ml-[4px]" style={{ color: kc }}>
                      ({labelBn})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Intensity rating */}
        <div className="intensity flex items-center gap-[6px] mt-[12px] mb-[2px]">
          <span className="ilabel text-[11px] font-bold tracking-[0.06em] uppercase text-[#999] mr-[2px]">
            How strong?
          </span>
          {[1, 2, 3, 4, 5].map((v) => {
            const isOn = v <= intensity;
            return (
              <button
                key={v}
                type="button"
                aria-label={`Intensity ${v}`}
                onClick={() => setIntensity(intensity === v ? 0 : v)}
                className={`dot w-[22px] h-[22px] rounded-full border-2 cursor-pointer transition-colors p-0 ${
                  isOn ? 'on' : 'border-[#ddd] dark:border-[#555] bg-transparent'
                }`}
                style={
                  isOn
                    ? { background: kc, borderColor: kc, color: kc }
                    : { color: kc }
                }
              />
            );
          })}
        </div>

        {whatNowPrompt && (
          <div className="whatnow mt-[12px] py-[11px] px-[13px] bg-[#f0faf1] dark:bg-[#1a2e1a] rounded-[11px] text-[13.5px] leading-[1.55] text-[#2d6a3a] dark:text-[#8fcf8f] font-normal">
            <span className="wnlabel font-bold text-[11px] uppercase tracking-[0.06em] mb-[4px] block text-[#3a8a4a] dark:text-[#6ab06a]">
              What now?
            </span>
            <span>{whatNowPrompt}</span>
          </div>
        )}
      </div>
    </div>
  );
}
