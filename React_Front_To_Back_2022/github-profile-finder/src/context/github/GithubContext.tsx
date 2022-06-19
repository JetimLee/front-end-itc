import React, { createContext, FC, useState, ReactNode } from "react";
import { user } from "../../interfaces/userInterface";

interface GithubContextInterface {
  userList: user[];
  loading: boolean;
  getUsers: Function;
}
interface Props {
  children?: ReactNode;
}

export const GithubContext = createContext<GithubContextInterface | null>(null);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const getUsers = async (): Promise<user[] | Error> => {
  const data: Response = await fetch(`${GITHUB_URL}/users`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  try {
    const response: user[] = await data.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error as Error;
  }
};

export const GithubProvider = ({ children }: Props) => {
  const [userList, setUserList] = useState<user[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <GithubContext.Provider value={{ loading, userList, getUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

//  return <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>{children}</TodoContext.Provider>;
