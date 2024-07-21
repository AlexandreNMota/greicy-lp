import { useContext } from "react";
import { DoencaContext } from ".";

const useDoencaContext = () => {
  const context = useContext(DoencaContext);

  if (!context) {
    throw new Error("Component must be used within an AppProvider");
  }

  return context;
};

export default useDoencaContext;
