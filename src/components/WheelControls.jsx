import React from 'react';

export default function WheelControls({
  isDark,
  onToggleDark,
  simple,
  onToggleSimple,
  zoomPercent,
  onZoomIn,
  onZoomOut,
  onResetZoom,
}) {
  return (
    <>
      {/* Top-Right Controls (Dark Mode toggle) */}
      <div className="topright fixed top-[14px] right-[14px] z-30 flex gap-[8px]">
        <button
          type="button"
          id="darkBtn"
          onClick={onToggleDark}
          aria-label="Toggle dark mode"
          className="btn dark-btn p-[7px] flex items-center justify-center w-[38px] h-[38px]"
        >
          {isDark ? (
            <svg
              className="w-[16px] h-[16px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              className="w-[16px] h-[16px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>

      {/* Bottom-Left Controls (Simplify Toggle + Zoom Controls) */}
      <div className="bottom-left-controls fixed bottom-[14px] left-[14px] z-30 flex items-center gap-[8px] max-[760px]:flex-col max-[760px]:items-start">
        <button
          type="button"
          id="simplifyBtn"
          onClick={onToggleSimple}
          aria-label="Toggle simplified language"
          className={`btn simplify-btn py-[9px] pr-[15px] pl-[13px] flex items-center gap-[9px] h-[40px] ${
            simple ? 'on' : ''
          }`}
        >
          <span className="lbl">Simplify</span>
          <span className="sw" />
        </button>

        {/* Zoom Controls (- / 100% / +) */}
        <div className="btn flex items-center h-[40px] px-[6px] gap-[2px]">
          <button
            type="button"
            onClick={onZoomOut}
            aria-label="Zoom out"
            title="Zoom out (-)"
            className="w-[28px] h-[28px] rounded-full border-none bg-transparent hover:bg-[#f0f0f0] dark:hover:bg-[#333] text-inherit font-bold text-[17px] leading-none flex items-center justify-center cursor-pointer"
          >
            &minus;
          </button>
          <button
            type="button"
            onClick={onResetZoom}
            aria-label="Reset zoom"
            title="Click to reset zoom to 100%"
            className="px-[6px] h-[28px] rounded-[8px] border-none bg-transparent hover:bg-[#f0f0f0] dark:hover:bg-[#333] text-inherit font-bold text-[12px] cursor-pointer min-w-[46px] text-center"
          >
            {zoomPercent}%
          </button>
          <button
            type="button"
            onClick={onZoomIn}
            aria-label="Zoom in"
            title="Zoom in (+)"
            className="w-[28px] h-[28px] rounded-full border-none bg-transparent hover:bg-[#f0f0f0] dark:hover:bg-[#333] text-inherit font-bold text-[17px] leading-none flex items-center justify-center cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
