import React from 'react';
import { dispWord, dispBangla } from '../utils/emotionHelpers';

export default function HeaderReadout({ sel, liveData, simple }) {
  const coreObj = sel.ci !== null ? liveData[sel.ci] : null;
  const secEntry = coreObj && sel.si !== null ? coreObj.secs[sel.si] : null;
  const terWord =
    secEntry && sel.ti !== null && secEntry[1] ? secEntry[1][sel.ti] : null;

  const coreBn = coreObj ? dispBangla(coreObj.name, simple) : '';
  const secBn = secEntry ? dispBangla(secEntry[0], simple) : '';
  const terBn = terWord ? dispBangla(terWord, simple) : '';

  return (
    <div
      id="readout"
      aria-live="polite"
      role="status"
      className="readout fixed top-[16px] left-1/2 -translate-x-1/2 z-10 font-light text-[16px] tracking-[0.04em] text-[#6a6a6a] dark:text-[#888] text-center pointer-events-none min-h-[22px] whitespace-nowrap max-w-[74vw] overflow-hidden text-ellipsis max-[760px]:hidden"
    >
      {!coreObj ? (
        <span>{simple ? 'Tap a feeling to begin' : 'Tap a core emotion to begin'}</span>
      ) : (
        <>
          <b className="font-bold text-[#3a3a3a] dark:text-[#e0e0e0]">
            {dispWord(coreObj.name, simple)}
            {coreBn ? ` (${coreBn})` : ''}
          </b>
          {secEntry && (
            <>
              <span className="sep opacity-45 px-[0.35em]">&rsaquo;</span>
              <span>
                {dispWord(secEntry[0], simple)}
                {secBn ? ` (${secBn})` : ''}
              </span>
            </>
          )}
          {terWord && (
            <>
              <span className="sep opacity-45 px-[0.35em]">&rsaquo;</span>
              <span>
                {dispWord(terWord, simple)}
                {terBn ? ` (${terBn})` : ''}
              </span>
            </>
          )}
        </>
      )}
    </div>
  );
}
