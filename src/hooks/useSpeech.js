import { useState } from 'react';

const useSpeech = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (text) => {
    if (!window.speechSynthesis) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.lang = 'en-US';

    const [voice] = speechSynthesis.getVoices();
    if (voice) utterance.voice = voice;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    speechSynthesis.speak(utterance);
  };

  const pause = () => {
    if (!speechSynthesis.speaking) return;
    speechSynthesis.resume();
    setIsPaused(false);
  };

  const resume = () => {
    if (!speechSynthesis.paused) return;
    speechSynthesis.resume();
    setIsPaused(false);
  };

  const stop = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };
  const toggle = (text) => {
    if (speechSynthesis.speaking && !speechSynthesis.pause) {
      pause();
    } else if (speechSynthesis.paused) {
      resume();
    } else {
      speak(text);
    }
  };
  return {
    speak,
    pause,
    resume,
    stop,
    toggle,
    isPaused,
    isSpeaking,
  };
};

export default useSpeech;
