import { EMOTIONS } from '../data/emotionsData.js';

export function getEmotion(word) {
  return EMOTIONS[word] || null;
}

export function dispWord(word, simple) {
  const entry = EMOTIONS[word];
  if (!entry) return word;
  return simple && entry.simple?.en ? entry.simple.en : entry.en;
}

export function dispBangla(word, simple) {
  const entry = EMOTIONS[word];
  if (!entry) return '';
  return simple && entry.simple?.bn ? entry.simple.bn : entry.bn || '';
}

export function fillColor(hue, level, bright, isDark) {
  if (isDark) {
    const sat = [bright ? 58 : 50, bright ? 50 : 44, bright ? 42 : 38][level];
    const lig = [bright ? 52 : 48, bright ? 42 : 38, bright ? 33 : 30][level];
    const boost = hue > 190 && hue < 280 ? 3 : 0;
    return `hsl(${hue},${sat}%,${lig + boost}%)`;
  }
  const sat = [bright ? 80 : 60, bright ? 72 : 58, bright ? 62 : 54][level];
  const lig = [bright ? 63 : 67, bright ? 77 : 78, bright ? 89 : 88][level];
  return `hsl(${hue},${sat}%,${lig}%)`;
}

export function keyColor(hue, isDark) {
  if (isDark) return `hsl(${hue},60%,66%)`;
  const lig = hue >= 40 && hue <= 70 ? 36 : 42;
  return `hsl(${hue},75%,${lig}%)`;
}
