import { createContext, ReactNode, useReducer } from "react";
import { user } from "../../interfaces/userInterface";
import { githubReducer, Action, State } from "./GithubReducer";

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
console.log(GITHUB_URL);
console.log(GITHUB_TOKEN);

export const GithubProvider = ({ children }: Props) => {
  // const [userList, setUserList] = useState<user[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  const initialState: State = {
    userList: [],
    loading: true,
    fish: "hello",
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const getUsers = async (): Promise<user[] | Error> => {
    const data: Response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    try {
      const response: user[] = await data.json();
      dispatch({ type: "GET_USERS", payload: response });

      console.log(response);

      return response;
    } catch (error) {
      console.log(error);
      return error as Error;
    }
  };

  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        userList: state.userList,
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
