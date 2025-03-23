import { useAuthState } from "./auth";
import AppContext from "./context";

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuthState();

  const state = {
    auth,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
