import { createContext, ReactNode, useReducer } from "react";
import { user } from "../../interfaces/userInterface";
import { githubReducer, ActionCommands } from "./GithubReducer";

//TO-DO - HANDLE 404 RESULTS, ERROR CARD?

interface GithubContextInterface {
  userList: user[];
  loading: boolean;
  fish: string;
  getUsers: () => Promise<user[] | Error>;
  searchUsers: (username: string) => Promise<user[] | Error>;
  clearUsers: () => void;
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
  // const [userList, setUserList] = useState<user[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  type initialState = {
    userList: user[];
    loading: boolean;
    fish: string;
  };
  const startingState: initialState = {
    fish: "hello",
    loading: false,
    userList: [] as user[],
  };
  const [state, dispatch] = useReducer(githubReducer, startingState);
  //made the set loading function because it's a little bit easier to read this than to constantly dispatch new objects with repeat payloads
  const setLoading = (loadingOption: boolean) =>
    dispatch({ type: ActionCommands.SET_LOADING, payload: loadingOption });

  const searchUsers = async (username: string): Promise<user[] | Error> => {
    setLoading(true);
    try {
      //new URLSearchParams constructor, definitely very handy
      const params = new URLSearchParams({ q: username });
      const data: Response = await fetch(
        `${GITHUB_URL}/search/users?${params}`
      );
      const { items }: { items: user[] } = await data.json();
      console.log("response", items);
      dispatch({ type: ActionCommands.GET_USER, payload: items });
      return items;
    } catch (error) {
      setLoading(false);
      console.log(error);
      return error as Error;
    }
  };
  const clearUsers = (): void => {
    dispatch({ type: ActionCommands.CLEAR_USERS, payload: [] });
  };

  //get initial users (testing purposes, not actually used)
  const getUsers = async (): Promise<user[] | Error> => {
    setLoading(true);

    try {
      const data: Response = await fetch(`${GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
      const response: user[] = await data.json();
      dispatch({ type: ActionCommands.GET_USERS, payload: response });

      console.log(response);

      return response;
    } catch (error) {
      setLoading(false);
      console.log(error);
      return error as Error;
    }
  };

  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        userList: state.userList as user[],
        getUsers,
        fish: state.fish,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

//  return <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>{children}</TodoContext.Provider>;
