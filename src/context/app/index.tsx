import React, { ReactNode, createContext, useEffect, useState } from "react";

interface AppContextType {}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
