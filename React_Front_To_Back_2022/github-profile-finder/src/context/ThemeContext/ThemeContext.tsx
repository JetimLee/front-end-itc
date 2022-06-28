import { createContext, useReducer, ReactNode } from "react";

import { ThemeReducer, ActionCommands } from "./ThemeReducer";
interface Props {
  children?: ReactNode;
}
interface ThemeContextInterface {
  darkMode: boolean;
  toggleDarkMode: () => void;
  initializeTheme: () => void;
}
export const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const userMedia = window.matchMedia("(prefers-color-scheme:dark");
    if (userMedia.matches) {
      //setups the default theme as dark
      return true;
    }
  }
  return false; //setups the default theme as light
};

export const ThemeContext = createContext<ThemeContextInterface>(
  {} as ThemeContextInterface
);

export const ThemeProvider = ({ children }: Props) => {
  interface initialState {
    darkMode: boolean;
  }
  const startingState: initialState = {
    darkMode: getInitialTheme(),
  };
  const [state, dispatch] = useReducer(ThemeReducer, startingState);

  const initializeTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userMedia = window.matchMedia("(prefers-color-scheme:dark");
      const root = window.document.documentElement;

      if (userMedia.matches) {
        //setups the default theme as dark
        root.setAttribute("data-theme", "night");
        dispatch({ type: ActionCommands.TOGGLE_THEME, payload: true });
        return;
      }
      root.setAttribute("data-theme", "retro");
      dispatch({ type: ActionCommands.TOGGLE_THEME, payload: false });

      return;
    }
  };

  const toggleDarkMode = () => {
    const newTheme = state.darkMode === false ? true : false;
    dispatch({ type: ActionCommands.TOGGLE_THEME, payload: newTheme });
    const root = window.document.documentElement;
    root.setAttribute("data-theme", newTheme === false ? "retro" : "night");
    localStorage.setItem("color-theme", newTheme ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode: state.darkMode as boolean,
        toggleDarkMode,
        initializeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
