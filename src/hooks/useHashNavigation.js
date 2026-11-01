import { useEffect, useCallback } from 'react';
import { CORES } from '../data/emotionsData.js';

/**
 * Synchronizes URL hashes for both the Emotion Wheel (#anger/enraged/hostile)
 * and the Atlas Actions explorer (#actions/, #actions/anger, #actions/anger/enraged).
 */
export function useHashNavigation({
  setActiveView,
  setSel,
  setCardOpen,
  setActionsNav,
  animTargetRef,
}) {
  const updateWheelHash = useCallback((selection) => {
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
    if (
      selection.si !== null &&
      coreObj.secs.length &&
      coreObj.secs[selection.si]
    ) {
      parts.push(
        coreObj.secs[selection.si][0].toLowerCase().replace(/\s+/g, '-')
      );
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

  const parseHash = useCallback(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) {
      setActiveView('wheel');
      return false;
    }

    const parts = hash
      .split('/')
      .filter(Boolean)
      .map((s) => s.toLowerCase().replace(/-/g, ' '));

    if (!parts.length) {
      if (hash.toLowerCase().startsWith('actions')) {
        setActiveView('actions');
        return true;
      }
      return false;
    }

    if (parts[0] === 'actions') {
      const foundCi = parts[1]
        ? CORES.findIndex((c) => c.name.toLowerCase() === parts[1])
        : -1;
      const resolvedCi = foundCi >= 0 ? foundCi : 0;
      const foundSec =
        parts[2] && CORES[resolvedCi]
          ? CORES[resolvedCi].secs.find((s) => s[0].toLowerCase() === parts[2])?.[0] ||
            null
          : null;

      setActionsNav((prev) => ({
        ...prev,
        coreIndex: foundCi >= 0 ? foundCi : prev.coreIndex,
        secondaryWord: foundSec,
      }));
      setActiveView('actions');
      return true;
    }

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

    setActiveView('wheel');
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
  }, [setActiveView, setSel, setCardOpen, setActionsNav, animTargetRef]);

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
  }, [parseHash, setSel, setCardOpen, animTargetRef]);

  return { updateWheelHash };
}
