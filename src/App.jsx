import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { CORES } from './data/emotionsData.js';
import { useDarkMode } from './hooks/useDarkMode.js';
import { useHashNavigation } from './hooks/useHashNavigation.js';
import HeaderReadout from './components/layout/HeaderReadout.jsx';
import WheelControls from './components/layout/WheelControls.jsx';
import EmotionWheelSvg from './components/wheel/EmotionWheelSvg.jsx';
import DefinePanel from './components/wheel/DefinePanel.jsx';
import ActionsExplorer from './components/actions/ActionsExplorer.jsx';

export default function App() {
  const [activeView, setActiveView] = useState('wheel'); // 'wheel' | 'actions'
  const [sel, setSel] = useState({ ci: null, si: null, ti: null });
  const [cardOpen, setCardOpen] = useState(false);
  const [simple, setSimple] = useState(false);
  const [isDark, toggleDarkMode] = useDarkMode();
  const [zoomPercent, setZoomPercent] = useState(100);
  const [actionsNav, setActionsNav] = useState({
    coreIndex: 0,
    secondaryWord: null,
    actionId: null,
  });

  const animTargetRef = useRef(null);
  const liveData = CORES;

  const { updateWheelHash } = useHashNavigation({
    setActiveView,
    setSel,
    setCardOpen,
    setActionsNav,
    animTargetRef,
  });

  // Switch between Wheel and Actions views
  const handleChangeView = useCallback(
    (nextView) => {
      setActiveView(nextView);
      if (nextView === 'actions') {
        const ci = sel.ci !== null ? sel.ci : actionsNav.coreIndex;
        const secWord =
          sel.ci !== null && sel.si !== null
            ? CORES[sel.ci]?.secs[sel.si]?.[0] || null
            : null;
        setActionsNav({
          coreIndex: ci,
          secondaryWord: secWord,
          actionId: null,
        });
        const coreSlug = CORES[ci]?.name.toLowerCase() || '';
        window.history.pushState(
          null,
          '',
          coreSlug ? `#actions/${coreSlug}` : '#actions/'
        );
      } else {
        updateWheelHash(sel);
      }
    },
    [sel, actionsNav.coreIndex, updateWheelHash]
  );

  // Open Actions Map directly from the Wheel Meaning Card
  const handleOpenActionsFromCard = useCallback(
    (actionId = null) => {
      const ci = sel.ci !== null ? sel.ci : 0;
      const secWord =
        sel.ci !== null && sel.si !== null
          ? CORES[sel.ci]?.secs[sel.si]?.[0] || null
          : null;
      setActionsNav({
        coreIndex: ci,
        secondaryWord: secWord,
        actionId,
      });
      setActiveView('actions');
      const coreSlug = CORES[ci]?.name.toLowerCase() || '';
      window.history.pushState(
        null,
        '',
        coreSlug ? `#actions/${coreSlug}` : '#actions/'
      );
    },
    [sel]
  );

  // Jump from Actions Map back to a specific slice on the Emotion Wheel
  const handleJumpToWheel = useCallback(
    (ci, si = null, ti = null) => {
      const nextSel = { ci, si, ti };
      setActiveView('wheel');
      setSel(nextSel);
      setCardOpen(true);
      updateWheelHash(nextSel);
      setTimeout(() => {
        if (animTargetRef.current) {
          const level = ti !== null ? 2 : si !== null ? 1 : 0;
          const mid = animTargetRef.current.findSegMid(ci, si, ti, level);
          if (mid !== null) {
            animTargetRef.current.animateToSeg({ level, ci, si, ti }, mid);
          }
        }
      }, 30);
    },
    [updateWheelHash]
  );

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

      updateWheelHash(nextSel);
    },
    [updateWheelHash]
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
    updateWheelHash(nextSel);
  }, [updateWheelHash]);

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
        updateWheelHash(nextSel);
        return nextSel;
      }
      if (animTargetRef.current) {
        animTargetRef.current.animateStepOut(level);
      }
      updateWheelHash(nextSel);
      return nextSel;
    });
  }, [updateWheelHash]);

  const handleScaleChange = useCallback((scaleVal) => {
    const pct = Math.round(scaleVal * 100);
    setZoomPercent((prev) => (prev === pct ? prev : pct));
  }, []);

  // Global Escape key handler for Wheel view
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape' && activeView === 'wheel') {
        if (cardOpen) {
          handleCloseCard();
          return;
        }
        handleStepOut();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeView, cardOpen, handleCloseCard, handleStepOut]);

  // Derived selection labels
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

  const branchSecondaryWord = useMemo(() => {
    if (sel.ci !== null && sel.si !== null) {
      return liveData[sel.ci]?.secs[sel.si]?.[0] || null;
    }
    return null;
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
        <h1>Emotion Wheel &amp; Atlas of Emotions Actions — interactive feelings and responses</h1>
        <p>
          Explore 108 feelings across six core emotions — fear, anger, sadness, surprise, joy,
          and love — along with constructive and destructive behavioral actions in English and
          Bangla.
        </p>
      </div>

      {/* Top Readout Breadcrumb (Wheel mode) */}
      {activeView === 'wheel' && (
        <HeaderReadout sel={sel} liveData={liveData} simple={simple} />
      )}

      {/* Top-Left View Toggle (Wheel | Actions), Top-Right Dark Mode & Bottom-Left Simplify + Zoom */}
      <WheelControls
        activeView={activeView}
        onChangeView={handleChangeView}
        isDark={isDark}
        onToggleDark={toggleDarkMode}
        simple={simple}
        onToggleSimple={() => setSimple((prev) => !prev)}
        zoomPercent={zoomPercent}
        onZoomOut={() => animTargetRef.current?.zoomBy(-0.25)}
        onResetZoom={() => animTargetRef.current?.resetZoom()}
        onZoomIn={() => animTargetRef.current?.zoomBy(0.25)}
      />

      {activeView === 'wheel' ? (
        <>
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

          <div className="hint fixed bottom-[18px] left-1/2 -translate-x-1/2 z-10 font-light text-[12.5px] text-[#b3b3b3] dark:text-[#666] tracking-[0.03em] text-center pointer-events-none whitespace-nowrap max-w-[54vw] max-[760px]:hidden">
            Drag &ldquo;I am feeling&rdquo; circle to move &bull; drag wheel to spin &bull; scroll
            to zoom &bull; click any emotion for meaning &amp; actions
          </div>

          <DefinePanel
            selectedWord={selectedWord}
            secondaryParentWord={secondaryParentWord}
            branchSecondaryWord={branchSecondaryWord}
            coreEmotion={coreEmotion}
            open={cardOpen}
            onClose={handleCloseCard}
            onOpenActions={handleOpenActionsFromCard}
            simple={simple}
            isDark={isDark}
          />
        </>
      ) : (
        <ActionsExplorer
          initialCoreIndex={actionsNav.coreIndex}
          initialSecondaryWord={actionsNav.secondaryWord}
          initialActionId={actionsNav.actionId}
          simple={simple}
          isDark={isDark}
          onSelectCoreIndex={(idx, secSlug = '') => {
            setActionsNav({ coreIndex: idx, secondaryWord: null, actionId: null });
            const slug = CORES[idx]?.name.toLowerCase() || '';
            const nextHash = slug
              ? secSlug
                ? `#actions/${slug}/${secSlug}`
                : `#actions/${slug}`
              : '#actions/';
            window.history.replaceState(null, '', nextHash);
          }}
          onJumpToWheel={handleJumpToWheel}
          onBackToWheel={() => handleChangeView('wheel')}
        />
      )}
    </div>
  );
}
