import { ReactNode, createContext, useContext, useState } from 'react';

type VolumeContextData = {
  volume: number;
  updateVolume: (newVolume: number) => void;
};

const VolumeContext = createContext<VolumeContextData>({
  volume: 0.5,
  updateVolume: () => {},
});

export function useVolume() {
  return useContext(VolumeContext);
}

type VolumeProviderProps = {
  children: ReactNode;
};

export function VolumeProvider({ children }: VolumeProviderProps) {
  const [volume, setVolume] = useState(0.5);

  const updateVolume = (newVolume: number) => {
    setVolume(newVolume);
  };

  return (
    <VolumeContext.Provider value={{ volume, updateVolume }}>
      {children}
    </VolumeContext.Provider>
  );
}
