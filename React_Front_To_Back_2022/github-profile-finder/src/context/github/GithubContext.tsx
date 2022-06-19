import React, { createContext, FC, useState, ReactNode } from "react";
import { user } from "../../interfaces/userInterface";

interface GithubContextInterface {
  userList: user[];
  loading: boolean;
  getUsers: () => Promise<user[] | Error>;
}
interface Props {
  children?: ReactNode;
}

const GithubContext = createContext<GithubContextInterface>(
  {} as GithubContextInterface
);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }: Props) => {
  const [userList, setUserList] = useState<user[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getUsers = async (): Promise<user[] | Error> => {
    const data: Response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    try {
      setLoading(true);
      const response: user[] = await data.json();
      console.log(response);
      setUserList(response);
      setLoading(false);
      return response;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return error as Error;
    }
  };

  return (
    <GithubContext.Provider value={{ loading, userList, getUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

//  return <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>{children}</TodoContext.Provider>;
