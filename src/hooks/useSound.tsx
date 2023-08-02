import { ElementRef, useEffect, useState } from 'react';

function useSound() {
  const [audio, setAudio] = useState<ElementRef<'audio'> | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio());
  }, []);

  useEffect(() => {
    if (!audio) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleEnded);
      }
    };
  }, [audio]);

  const play = (src: string) => {
    if (!audio) return;
    audio.src = src;
    audio.play();
    setIsPlaying(true);
  };

  const pause = () => {
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  };

  return { play, pause, isPlaying };
}

export default useSound;
