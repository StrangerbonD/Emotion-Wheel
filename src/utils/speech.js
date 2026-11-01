// Safe Web Speech API helper shared across Wheel and Actions views

export function speakEnglishText(text, rate = 0.9) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text) {
    return;
  }
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.lang = 'en';
    window.speechSynthesis.speak(utterance);
  } catch {
    // Gracefully ignore speech synthesis errors in restricted browsers
  }
}
