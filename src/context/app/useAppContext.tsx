import { useContext } from "react";
import { AppContext } from ".";

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Component must be used within an AppProvider");
  }

  return context;
};

export default useAppContext;
