import { createContext, useReducer, ReactNode } from "react";

import { ThemeReducer, ActionCommands } from "./ThemeReducer";
interface Props {
  children?: ReactNode;
}
interface ThemeContextInterface {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
export const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const userMedia = window.matchMedia("(prefers-color-scheme:dark");
    if (userMedia.matches) {
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

  const toggleDarkMode = () => {
    console.log("toggling!");
    let newTheme = state.darkMode === false ? true : false;
    dispatch({ type: ActionCommands.TOGGLE_THEME, payload: newTheme });
    const root = window.document.documentElement;
    const isDark = newTheme === true;
    root.setAttribute("data-theme", isDark ? "winter" : "night");
    localStorage.setItem("color-theme", isDark ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode: state.darkMode as boolean, toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
