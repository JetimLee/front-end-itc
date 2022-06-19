import React, { createContext, FC } from "react";
import { user } from "../../interfaces/userInterface";

interface GithubContextInterface {
  children?: React.ReactNode;
}

const GithubContext = createContext<GithubContextInterface | null>(null);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider: FC<GithubContextInterface> = ({ children }) => {
  return <GithubContext.Provider value={{}}>{children}</GithubContext.Provider>;
};

//  return <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>{children}</TodoContext.Provider>;
