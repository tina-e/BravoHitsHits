import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IAppContext {
  state: number; // 0 - welcome, 1 - first album, 2 - second album, ...
  setState: Dispatch<SetStateAction<number>>;
}

export const AppContext = createContext<IAppContext | null>(null);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
