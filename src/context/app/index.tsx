import React, { ReactNode, createContext, useEffect, useState } from "react";
import { DIMENSIONS } from "../../constantes/dimensions";

export type Dimensions = {
  headerHeight: string;
};
interface AppContextType {
  dimensions: Dimensions;
  section: string;
  isMobile: boolean;
}

export const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [dimensions, setDimensions] = useState(DIMENSIONS);
  const [section, setSection] = useState<string>("hero");
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.matchMedia("(max-width: 600px)").matches);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <AppContext.Provider value={{ dimensions, isMobile, section }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
