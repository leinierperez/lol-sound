import { useVolume } from '@/hooks/useVolume';
import React, { useRef, useState } from 'react';

const VolumeSlider = () => {
  const { volume, updateVolume } = useVolume();
  const [debouncedVolume, setDebouncedVolume] = useState(volume);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setDebouncedVolume(newVolume);
    if (debounceTimeoutRef.current !== null) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(() => {
      updateVolume(newVolume);
      debounceTimeoutRef.current = null;
    }, 1);
  };

  return (
    <div className="bg-gold h-full p-3 rounded-tr-md rounded-br-md">
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={debouncedVolume}
        onChange={handleVolumeChange}
        className="accent-white"
      />
    </div>
  );
};

export default VolumeSlider;
