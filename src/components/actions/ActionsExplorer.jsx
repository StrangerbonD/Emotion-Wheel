import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { CORES } from '../../data/emotionsData.js';
import { EMOTION_ACTIONS } from '../../data/actionsData.js';
import { keyColor } from '../../utils/emotionHelpers.js';
import {
  FORESHORTEN_Y,
  VALENCE_ORDER,
  buildAtlasSpearPath,
  buildStatePeakPath,
} from '../../utils/actionsGeometry.js';
import ActionsSidebar from './ActionsSidebar.jsx';
import StatesMountainGraph from './StatesMountainGraph.jsx';
import RadialActionFan from './RadialActionFan.jsx';
import ActionPopover from './ActionPopover.jsx';
import EmotionContinentNav from './EmotionContinentNav.jsx';

export default function ActionsExplorer({
  initialCoreIndex = 0,
  initialSecondaryWord = null,
  initialActionId = null,
  simple,
  isDark,
  onSelectCoreIndex,
  onJumpToWheel,
  onBackToWheel,
}) {
  const safeCoreIdx =
    initialCoreIndex !== null &&
    initialCoreIndex >= 0 &&
    initialCoreIndex < CORES.length
      ? initialCoreIndex
      : 0;

  const [coreIdx, setCoreIdx] = useState(safeCoreIdx);
  const [panDir, setPanDir] = useState('right');
  const [panKey, setPanKey] = useState(0);

  const [activeState, setActiveState] = useState(initialSecondaryWord || null);
  const [hoveredState, setHoveredState] = useState(null);

  const [selectedActionId, setSelectedActionId] = useState(initialActionId || null);
  const [hoveredActionId, setHoveredActionId] = useState(null);
  const [popupOpen, setPopupOpen] = useState(Boolean(initialActionId));

  const stageRef = useRef(null);
  const [stageSize, setStageSize] = useState({ width: 960, height: 700 });

  useEffect(() => {
    if (
      initialCoreIndex !== null &&
      initialCoreIndex >= 0 &&
      initialCoreIndex < CORES.length
    ) {
      setCoreIdx(initialCoreIndex);
    }
  }, [initialCoreIndex]);

  useEffect(() => {
    setActiveState(initialSecondaryWord || null);
  }, [initialSecondaryWord]);

  useEffect(() => {
    if (initialActionId) {
      setSelectedActionId(initialActionId);
      setPopupOpen(true);
    }
  }, [initialActionId]);

  const updateStageSize = useCallback(() => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      setStageSize((prev) =>
        Math.abs(prev.width - rect.width) < 1 &&
        Math.abs(prev.height - rect.height) < 1
          ? prev
          : { width: rect.width, height: rect.height }
      );
    }
  }, []);

  useLayoutEffect(() => {
    updateStageSize();
    const raf = requestAnimationFrame(updateStageSize);
    return () => cancelAnimationFrame(raf);
  }, [updateStageSize]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => updateStageSize());
    ro.observe(el);
    window.addEventListener('resize', updateStageSize);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateStageSize);
    };
  }, [updateStageSize]);

  const coreObj = CORES[coreIdx] || CORES[0];
  const actionGroup = EMOTION_ACTIONS[coreObj.name];
  const kc = keyColor(coreObj.hue, isDark);
  const accentColor = isDark
    ? actionGroup?.palette?.accentDark || kc
    : actionGroup?.palette?.accent || kc;

  const orderedAllActions = useMemo(() => {
    if (!actionGroup) return [];
    return [...actionGroup.actions].sort((a, b) => {
      const va = VALENCE_ORDER[a.valence] ?? 1;
      const vb = VALENCE_ORDER[b.valence] ?? 1;
      if (va !== vb) return va - vb;
      return a.en.localeCompare(b.en);
    });
  }, [actionGroup]);

  const activeFanActions = useMemo(() => {
    if (!activeState) return orderedAllActions;
    const filtered = orderedAllActions.filter((a) =>
      a.states.includes(activeState)
    );
    return filtered.length ? filtered : orderedAllActions;
  }, [orderedAllActions, activeState]);

  const actionLayoutMap = useMemo(() => {
    const map = {};
    const nAll = orderedAllActions.length;
    const nActive = activeFanActions.length;

    orderedAllActions.forEach((act, idxAll) => {
      const activeIdx = activeFanActions.findIndex((a) => a.id === act.id);
      const isVisible = activeIdx !== -1;

      const thetaDeg = isVisible
        ? nActive === 1
          ? 90
          : 166 - (activeIdx * 152) / (nActive - 1)
        : nAll <= 1
        ? 90
        : 166 - (idxAll * 152) / (nAll - 1);

      map[act.id] = {
        isVisible,
        activeIdx,
        thetaDeg,
        thetaRad: (thetaDeg * Math.PI) / 180,
      };
    });
    return map;
  }, [orderedAllActions, activeFanActions]);

  const selectedAction = useMemo(() => {
    if (!popupOpen || !selectedActionId) return null;
    return orderedAllActions.find((a) => a.id === selectedActionId) || null;
  }, [popupOpen, selectedActionId, orderedAllActions]);

  const hoveredAction = useMemo(() => {
    if (!hoveredActionId) return null;
    return orderedAllActions.find((a) => a.id === hoveredActionId) || null;
  }, [hoveredActionId, orderedAllActions]);

  const handleChooseCore = useCallback(
    (nextIdx) => {
      if (nextIdx === coreIdx) return;
      const goRight =
        (nextIdx > coreIdx && !(coreIdx === 0 && nextIdx === CORES.length - 1)) ||
        (coreIdx === CORES.length - 1 && nextIdx === 0);
      setPanDir(goRight ? 'right' : 'left');
      setPanKey((k) => k + 1);
      setCoreIdx(nextIdx);
      setActiveState(null);
      setHoveredState(null);
      setSelectedActionId(null);
      setHoveredActionId(null);
      setPopupOpen(false);
      if (onSelectCoreIndex) onSelectCoreIndex(nextIdx);
    },
    [coreIdx, onSelectCoreIndex]
  );

  const handleRestart = useCallback(() => {
    setActiveState(null);
    setHoveredState(null);
    setSelectedActionId(null);
    setHoveredActionId(null);
    setPopupOpen(false);
    if (onSelectCoreIndex) onSelectCoreIndex(coreIdx);
  }, [coreIdx, onSelectCoreIndex]);

  const handleToggleState = useCallback(
    (stateName, e) => {
      if (e) e.stopPropagation();
      setPopupOpen(false);
      setSelectedActionId(null);
      setActiveState((prev) => {
        const next = prev === stateName ? null : stateName;
        if (onSelectCoreIndex) {
          onSelectCoreIndex(
            coreIdx,
            next ? next.toLowerCase().replace(/\s+/g, '-') : ''
          );
        }
        return next;
      });
    },
    [coreIdx, onSelectCoreIndex]
  );

  const handleClickAction = useCallback((act, e) => {
    if (e) e.stopPropagation();
    setSelectedActionId(act.id);
    setPopupOpen(true);
  }, []);

  const handleClosePopup = useCallback((e) => {
    if (e) e.stopPropagation();
    setPopupOpen(false);
    setSelectedActionId(null);
  }, []);

  const handlePaginateAction = useCallback(
    (dir, e) => {
      if (e) e.stopPropagation();
      if (!activeFanActions.length) return;
      const curIdx = activeFanActions.findIndex((a) => a.id === selectedActionId);
      const nextIdx =
        curIdx < 0
          ? 0
          : (curIdx + dir + activeFanActions.length) % activeFanActions.length;
      setSelectedActionId(activeFanActions[nextIdx].id);
      setPopupOpen(true);
    },
    [activeFanActions, selectedActionId]
  );

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        if (popupOpen) {
          setPopupOpen(false);
          setSelectedActionId(null);
        } else if (activeState) {
          setActiveState(null);
        }
      } else if (popupOpen && e.key === 'ArrowRight') {
        handlePaginateAction(1);
      } else if (popupOpen && e.key === 'ArrowLeft') {
        handlePaginateAction(-1);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [popupOpen, activeState, handlePaginateAction]);

  // Responsive stage coordinates
  const isCompact = stageSize.width < 680;
  const navBarHeight = 62;
  const statesTop = isCompact ? 14 : 32;
  const statesWidth = Math.min(
    stageSize.width * (isCompact ? 0.92 : 0.68),
    720
  );
  const statesLeft = (stageSize.width - statesWidth) * 0.5;
  const statesHeight = Math.max(
    135,
    Math.min(
      218,
      (stageSize.height - navBarHeight) * (isCompact ? 0.28 : 0.3)
    )
  );
  const statesPadTop = 42;
  const statesBaseY = statesHeight - 16;
  const maxPeakDrawH = statesBaseY - statesPadTop;

  const originX = stageSize.width * 0.5;
  const originY = statesTop + statesBaseY + (isCompact ? 18 : 20);
  const lowerAvailH = Math.max(
    120,
    stageSize.height - navBarHeight - originY - (isCompact ? 108 : 62)
  );
  const maxHorizR = isCompact
    ? Math.max(95, stageSize.width * 0.38)
    : Math.max(125, stageSize.width * 0.5 - 160);

  const spearRadius = Math.max(
    isCompact ? 95 : 130,
    Math.min(maxHorizR, lowerAvailH / FORESHORTEN_Y, 310)
  );
  const spearPathD = useMemo(
    () => buildAtlasSpearPath(spearRadius),
    [spearRadius]
  );

  const statePeaksRender = useMemo(() => {
    if (!actionGroup?.statePeaks) return [];
    const padX = 24;
    const usableW = Math.max(180, statesWidth - padX * 2);
    const xScale = (val) => padX + (val / 10) * usableW;

    const mapped = actionGroup.statePeaks.map((pk, idx) => {
      const x0 = xScale(pk.min);
      const x2 = xScale(pk.max);
      const x1 = (x0 + x2) * 0.5;
      const peakY = statesBaseY - pk.height * maxPeakDrawH;
      const d = buildStatePeakPath(
        actionGroup.shapeType,
        x0,
        x1,
        x2,
        statesBaseY,
        peakY
      );
      return {
        ...pk,
        orderIdx: idx,
        x0,
        x1,
        x2,
        peakY,
        d,
      };
    });

    return [...mapped].sort((a, b) => b.height - a.height);
  }, [actionGroup, statesWidth, statesBaseY, maxPeakDrawH]);

  const isStateMuted = useCallback(
    (stateName) => {
      if (hoveredState) return hoveredState !== stateName;
      if (hoveredAction) return !hoveredAction.states.includes(stateName);
      if (selectedAction) return !selectedAction.states.includes(stateName);
      if (activeState) return activeState !== stateName;
      return false;
    },
    [hoveredState, hoveredAction, selectedAction, activeState]
  );

  const isActionMuted = useCallback(
    (act) => {
      const layout = actionLayoutMap[act.id];
      if (!layout?.isVisible) return true;
      if (hoveredAction) return hoveredAction.id !== act.id;
      if (hoveredState) return !act.states.includes(hoveredState);
      if (selectedAction) return selectedAction.id !== act.id;
      return false;
    },
    [actionLayoutMap, hoveredAction, hoveredState, selectedAction]
  );

  const popupCoords = useMemo(() => {
    if (!selectedAction) return null;
    const layout = actionLayoutMap[selectedAction.id];
    if (!layout) return null;

    const labelR = spearRadius + 16;
    const rawX = originX + labelR * Math.cos(layout.thetaRad);
    const rawY = originY + FORESHORTEN_Y * labelR * Math.sin(layout.thetaRad);

    const cardW = Math.min(370, stageSize.width - 28);
    const cardEstH = 310;
    const clampedLeft = Math.max(
      14,
      Math.min(rawX - cardW * 0.5, stageSize.width - cardW - 14)
    );
    const clampedTop = Math.max(
      52,
      Math.min(rawY - 36, stageSize.height - navBarHeight - cardEstH - 10)
    );

    return { left: clampedLeft, top: clampedTop, width: cardW };
  }, [selectedAction, actionLayoutMap, spearRadius, originX, originY, stageSize]);

  const gradIdStates = `atlas-state-grad-${coreObj.name.toLowerCase()}`;
  const gradIdActions = `atlas-action-grad-${coreObj.name.toLowerCase()}`;

  return (
    <div
      className="atlas-font fixed inset-0 w-full h-full flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden bg-[#ffffff] dark:bg-[#121215] select-none"
      onClick={() => {
        if (popupOpen) {
          setPopupOpen(false);
          setSelectedActionId(null);
        } else if (activeState) {
          setActiveState(null);
        }
      }}
    >
      <ActionsSidebar
        coreObj={coreObj}
        coreIdx={coreIdx}
        actionGroup={actionGroup}
        activeState={activeState}
        popupOpen={popupOpen}
        simple={simple}
        isDark={isDark}
        kc={kc}
        accentColor={accentColor}
        onRestart={handleRestart}
        onClearState={() => setActiveState(null)}
        onHoverState={setHoveredState}
        onToggleState={handleToggleState}
        onJumpToWheel={onJumpToWheel}
      />

      <main
        ref={stageRef}
        className="relative flex-1 min-h-[580px] lg:min-h-0 lg:h-full overflow-hidden"
      >
        {/* Top-Right Atlas Section Navigation Bar */}
        <nav
          aria-label="Atlas section navigation"
          onClick={(e) => e.stopPropagation()}
          className="hidden sm:flex items-center gap-[24px] absolute top-[20px] right-[68px] z-20 text-[12px] tracking-[0.12em] uppercase"
        >
          <button
            type="button"
            onClick={onBackToWheel}
            className="bg-transparent border-none p-0 cursor-pointer font-normal text-[#777777] hover:text-[#000000] dark:text-[#999999] dark:hover:text-[#ffffff] transition-colors"
          >
            Emotion Wheel
          </button>
          <button
            type="button"
            onClick={() => {
              setPopupOpen(false);
              setSelectedActionId(null);
              setActiveState(null);
            }}
            className={`bg-transparent border-none p-0 cursor-pointer transition-colors ${
              activeState
                ? 'font-bold text-[#000000] dark:text-[#ffffff] border-b border-current pb-[2px]'
                : 'font-normal text-[#777777] hover:text-[#000000] dark:text-[#999999] dark:hover:text-[#ffffff]'
            }`}
          >
            States
          </button>
          <span className="font-bold text-[#000000] dark:text-[#ffffff] border-b-2 border-[#000000] dark:border-[#ffffff] pb-[2px]">
            Actions
          </span>
        </nav>

        {/* Animated Continent Wrapper */}
        <div
          key={`${coreObj.name}-${panKey}`}
          className={`relative w-full h-full ${
            panKey > 0
              ? panDir === 'right'
                ? 'atlas-pan-right'
                : 'atlas-pan-left'
              : ''
          }`}
        >
          <StatesMountainGraph
            statesLeft={statesLeft}
            statesTop={statesTop}
            statesWidth={statesWidth}
            statesHeight={statesHeight}
            statesBaseY={statesBaseY}
            statePeaksRender={statePeaksRender}
            stateStops={actionGroup?.palette?.stateStops}
            gradIdStates={gradIdStates}
            activeState={activeState}
            simple={simple}
            isDark={isDark}
            kc={kc}
            accentColor={accentColor}
            isStateMuted={isStateMuted}
            onHoverState={setHoveredState}
            onToggleState={handleToggleState}
          />

          <RadialActionFan
            stageWidth={stageSize.width}
            stageHeight={stageSize.height}
            isCompact={isCompact}
            originX={originX}
            originY={originY}
            spearRadius={spearRadius}
            spearPathD={spearPathD}
            gradIdActions={gradIdActions}
            actionStops={actionGroup?.palette?.actionStops}
            orderedAllActions={orderedAllActions}
            activeFanActions={activeFanActions}
            actionLayoutMap={actionLayoutMap}
            selectedActionId={selectedActionId}
            hoveredActionId={hoveredActionId}
            popupOpen={popupOpen}
            simple={simple}
            isDark={isDark}
            kc={kc}
            accentColor={accentColor}
            isActionMuted={isActionMuted}
            onHoverAction={setHoveredActionId}
            onClickAction={handleClickAction}
          />
        </div>

        {popupOpen && selectedAction && popupCoords && (
          <ActionPopover
            selectedAction={selectedAction}
            popupCoords={popupCoords}
            coreObj={coreObj}
            paletteRgb={actionGroup.palette.rgb}
            simple={simple}
            isDark={isDark}
            kc={kc}
            accentColor={accentColor}
            onClose={handleClosePopup}
            onPaginate={handlePaginateAction}
            onToggleState={handleToggleState}
          />
        )}

        <EmotionContinentNav
          coreIdx={coreIdx}
          simple={simple}
          isDark={isDark}
          onChooseCore={handleChooseCore}
        />
      </main>
    </div>
  );
}
