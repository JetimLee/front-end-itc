import { createContext, ReactNode, useReducer } from "react";
import { user } from "../../interfaces/userInterface";
import { githubReducer, ActionCommands } from "./GithubReducer";

interface GithubContextInterface {
  userList: user[];
  loading: boolean;
  fish: string;
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

  //get initial users (testing purposes, not actually used)
  const getUsers = async (): Promise<user[] | Error> => {
    setLoading(true);
    const data: Response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    try {
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
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

//  return <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>{children}</TodoContext.Provider>;
