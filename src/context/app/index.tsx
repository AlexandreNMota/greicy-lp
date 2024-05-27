import React, { ReactNode, createContext, useEffect, useState } from "react";
import { DIMENSIONS } from "../../constantes/dimensions";
export type Dimensions = {
  headerHeight: string;
};
interface AppContextType {
  dimensions: Dimensions;
  section: string;
}

export const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [dimensions, setDimensions] = useState(DIMENSIONS);
  const [section, setSection] = useState<string>("hero");
  return (
    <AppContext.Provider value={{ dimensions, section }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
