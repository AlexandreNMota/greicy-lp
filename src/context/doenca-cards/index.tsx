import React, { ReactNode, createContext, useEffect, useState } from "react";

interface DoencaContextType {
  isPlaying: boolean;
  play: () => void;
  stopPlaying: () => void;
  truncateText: (text: string, maxLength: number) => string;
}

export const DoencaContext = createContext<DoencaContextType | null>(null);

interface DoencaProviderProps {
  children: ReactNode;
}

const DoencaProvider: React.FC<DoencaProviderProps> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const play = () => {
    setIsPlaying(true);
  };
  const stopPlaying = () => {
    setIsPlaying(false);
  };

  const truncateText: (text: string, maxLength: number) => string = (
    text: string,
    maxLength: number
  ) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <DoencaContext.Provider
      value={{ isPlaying, play, truncateText, stopPlaying }}
    >
      {children}
    </DoencaContext.Provider>
  );
};

export default DoencaProvider;
