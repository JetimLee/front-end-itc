import { repoInterface } from "../../interfaces/repoInterface";
import { user } from "../../interfaces/userInterface";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface State {
  userList: user[] | [];
  loading: boolean;
  user: user;
  repos: repoInterface[];
}
export enum ActionCommands {
  SET_LOADING = "SET_LOADING",
  GET_USERS = "GET_USERS",
  GET_USER = "GET_USER",
  CLEAR_USERS = "CLEAR_USERS",
  GET_REPOS = "GET_REPOS",
}
type Action =
  | { type: ActionCommands.GET_USERS; payload: user[] }
  | { type: ActionCommands.GET_REPOS; payload: repoInterface[] }
  | { type: ActionCommands.SET_LOADING; payload: boolean }
  | { type: ActionCommands.GET_USER; payload: user }
  | { type: ActionCommands.CLEAR_USERS; payload: [] };

export const githubReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "GET_USERS":
      console.log("getting users", action.type);
      return {
        ...state,
        userList: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        userList: action.payload,
      };
    default:
      return state;
  }
};
