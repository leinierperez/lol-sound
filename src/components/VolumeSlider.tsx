import { useVolume } from '@/hooks/useVolume';
import React, { useState } from 'react';

const VolumeSlider = () => {
  const { volume, updateVolume } = useVolume();
  const [debouncedVolume, setDebouncedVolume] = useState(volume);
  let debounceTimeout: NodeJS.Timeout | null = null;

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setDebouncedVolume(newVolume);
    if (debounceTimeout !== null) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(() => {
      updateVolume(newVolume);
      debounceTimeout = null;
    }, 200);
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
