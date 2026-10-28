import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { CORES } from './data/emotionsData';
import HeaderReadout from './components/HeaderReadout';
import WheelControls from './components/WheelControls';
import EmotionWheelSvg from './components/EmotionWheelSvg';
import DefinePanel from './components/DefinePanel';

function getInitialDarkMode() {
  if (typeof document === 'undefined') return false;
  const darkCookie = document.cookie
    .split(';')
    .find((c) => c.trim().startsWith('darkMode='));
  if (darkCookie) {
    return darkCookie.trim().split('=')[1] === '1';
  }
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

export default function App() {
  const [sel, setSel] = useState({ ci: null, si: null, ti: null });
  const [cardOpen, setCardOpen] = useState(false);
  const [simple, setSimple] = useState(false);
  const [isDark, setIsDark] = useState(getInitialDarkMode);
  const [zoomPercent, setZoomPercent] = useState(100);

  const animTargetRef = useRef(null);
  const liveData = CORES;

  // Sync dark mode class & cookie
  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.cookie = `darkMode=${
      isDark ? '1' : '0'
    };path=/;max-age=31536000;SameSite=Lax`;
  }, [isDark]);

  // Update URL hash helper
  const updateHash = useCallback((selection) => {
    if (selection.ci === null) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
      return;
    }
    const coreObj = CORES[selection.ci];
    if (!coreObj) return;
    const parts = [coreObj.name.toLowerCase()];
    if (selection.si !== null && coreObj.secs.length && coreObj.secs[selection.si]) {
      parts.push(coreObj.secs[selection.si][0].toLowerCase().replace(/\s+/g, '-'));
    }
    if (
      selection.ti !== null &&
      coreObj.secs.length &&
      coreObj.secs[selection.si] &&
      coreObj.secs[selection.si][1][selection.ti]
    ) {
      parts.push(
        coreObj.secs[selection.si][1][selection.ti]
          .toLowerCase()
          .replace(/\s+/g, '-')
      );
    }
    window.history.pushState(null, '', '#' + parts.join('/'));
  }, []);

  // Parse URL hash on load / popstate
  const parseHash = useCallback(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return false;
    const parts = hash.split('/').map((s) => s.toLowerCase().replace(/-/g, ' '));
    if (!parts.length) return false;

    const ci = CORES.findIndex((c) => c.name.toLowerCase() === parts[0]);
    if (ci < 0) return false;
    let si = null;
    let ti = null;
    if (parts[1] && CORES[ci].secs.length) {
      const foundSi = CORES[ci].secs.findIndex(
        (s) => s[0].toLowerCase() === parts[1]
      );
      if (foundSi >= 0) {
        si = foundSi;
        if (parts[2]) {
          const foundTi = CORES[ci].secs[foundSi][1].findIndex(
            (t) => t.toLowerCase() === parts[2]
          );
          if (foundTi >= 0) ti = foundTi;
        }
      }
    }
    setSel({ ci, si, ti });
    setCardOpen(true);
    setTimeout(() => {
      if (animTargetRef.current) {
        const level = ti !== null ? 2 : si !== null ? 1 : 0;
        const mid = animTargetRef.current.findSegMid(ci, si, ti, level);
        if (mid !== null) {
          animTargetRef.current.animateToSeg({ level, ci, si, ti }, mid);
        }
      }
    }, 0);
    return true;
  }, []);

  useEffect(() => {
    parseHash();
    const onPopState = () => {
      if (!parseHash()) {
        setSel({ ci: null, si: null, ti: null });
        setCardOpen(false);
        if (animTargetRef.current) animTargetRef.current.animateReset();
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [parseHash]);

  // Pressing any word/slice on the emotion wheel selects it, zooms in, and shows its meaning card
  const handleSelectSeg = useCallback(
    (info, mid) => {
      const nextSel = {
        ci: info.ci,
        si: info.level >= 1 ? info.si : null,
        ti: info.level >= 2 ? info.ti : null,
      };

      setSel(nextSel);
      setCardOpen(true);

      if (animTargetRef.current) {
        animTargetRef.current.animateToSeg(info, mid);
      }

      updateHash(nextSel);
    },
    [updateHash]
  );

  // Pressing the cross (×) button vanishes the card until the user presses another word on the wheel
  const handleCloseCard = useCallback(() => {
    setCardOpen(false);
  }, []);

  const handleResetSelection = useCallback(() => {
    const nextSel = { ci: null, si: null, ti: null };
    setSel(nextSel);
    setCardOpen(false);
    if (animTargetRef.current) {
      animTargetRef.current.animateReset();
    }
    updateHash(nextSel);
  }, [updateHash]);

  const handleStepOut = useCallback(() => {
    setCardOpen(false);
    setSel((prev) => {
      if (prev.ci === null) return prev;
      let nextSel;
      let level;
      if (prev.ti !== null) {
        nextSel = { ...prev, ti: null };
        level = 1;
      } else if (prev.si !== null) {
        nextSel = { ...prev, si: null };
        level = 0;
      } else {
        nextSel = { ci: null, si: null, ti: null };
        if (animTargetRef.current) animTargetRef.current.animateReset();
        updateHash(nextSel);
        return nextSel;
      }
      if (animTargetRef.current) {
        animTargetRef.current.animateStepOut(level);
      }
      updateHash(nextSel);
      return nextSel;
    });
  }, [updateHash]);

  const handleScaleChange = useCallback((scaleVal) => {
    const pct = Math.round(scaleVal * 100);
    setZoomPercent((prev) => (prev === pct ? prev : pct));
  }, []);

  // Global Escape key: if meaning card is open, close it first; otherwise step out of wheel
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        if (cardOpen) {
          handleCloseCard();
          return;
        }
        handleStepOut();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [cardOpen, handleCloseCard, handleStepOut]);

  // Compute currently selected word and parent secondary word (for Tertiary emotions)
  const selectedWord = useMemo(() => {
    if (sel.ci === null || !liveData[sel.ci]) return null;
    const c = liveData[sel.ci];
    if (sel.ti !== null && c.secs[sel.si] && c.secs[sel.si][1][sel.ti]) {
      return c.secs[sel.si][1][sel.ti];
    }
    if (sel.si !== null && c.secs[sel.si]) {
      return c.secs[sel.si][0];
    }
    return c.name;
  }, [sel, liveData]);

  const secondaryParentWord = useMemo(() => {
    if (sel.ci !== null && sel.si !== null && sel.ti !== null) {
      return liveData[sel.ci]?.secs[sel.si]?.[0] || null;
    }
    return null;
  }, [sel, liveData]);

  const coreEmotion = sel.ci !== null ? liveData[sel.ci] : null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative select-none">
      {/* Crawlable SEO content */}
      <div className="seo-only">
        <h1>Emotion Wheel — an interactive feelings wheel</h1>
        <p>
          The Emotion Wheel is a free interactive tool that helps you name and understand your
          emotions across six core feelings — love, joy, surprise, sadness, anger and fear.
        </p>
      </div>

      {/* Top Readout Breadcrumb */}
      <HeaderReadout sel={sel} liveData={liveData} simple={simple} />

      {/* Top-Right Dark Mode & Bottom-Left Simplify + Zoom Controls */}
      <WheelControls
        isDark={isDark}
        onToggleDark={() => setIsDark((prev) => !prev)}
        simple={simple}
        onToggleSimple={() => setSimple((prev) => !prev)}
        zoomPercent={zoomPercent}
        onZoomOut={() => animTargetRef.current?.zoomBy(-0.25)}
        onResetZoom={() => animTargetRef.current?.resetZoom()}
        onZoomIn={() => animTargetRef.current?.zoomBy(0.25)}
      />

      {/* Interactive Emotion Wheel SVG (Junto-style only) */}
      <EmotionWheelSvg
        liveData={liveData}
        sel={sel}
        simple={simple}
        isDark={isDark}
        onSelectSeg={handleSelectSeg}
        onResetSelection={handleResetSelection}
        onStepOut={handleStepOut}
        onScaleChange={handleScaleChange}
        animTargetRef={animTargetRef}
      />

      {/* Bottom Hint Bar */}
      <div className="hint fixed bottom-[18px] left-1/2 -translate-x-1/2 z-10 font-light text-[12.5px] text-[#b3b3b3] dark:text-[#666] tracking-[0.03em] text-center pointer-events-none whitespace-nowrap max-w-[54vw] max-[760px]:hidden">
        Drag &ldquo;I am feeling&rdquo; circle to move &bull; drag wheel to spin &bull; scroll to
        zoom &bull; click any emotion for meaning
      </div>

      {/* Meaning Card Panel (vanishes completely when cross × is pressed; only opens when a slice is clicked) */}
      <DefinePanel
        selectedWord={selectedWord}
        secondaryParentWord={secondaryParentWord}
        coreEmotion={coreEmotion}
        open={cardOpen}
        onClose={handleCloseCard}
        simple={simple}
        isDark={isDark}
      />
    </div>
  );
}
