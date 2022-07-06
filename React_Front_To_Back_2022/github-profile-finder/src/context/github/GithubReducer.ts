import { user } from "../../interfaces/userInterface";
interface State<T> {
  userList: T;
  loading: boolean;
  fish: string;
  user: T;
}
export enum ActionCommands {
  SET_LOADING = "SET_LOADING",
  GET_USERS = "GET_USERS",
  GET_USER = "GET_USER",
  CLEAR_USERS = "CLEAR_USERS",
}
type Action<T> =
  | { type: ActionCommands.GET_USERS; payload: T }
  | { type: ActionCommands.SET_LOADING; payload: T }
  | { type: ActionCommands.GET_USER; payload: T }
  | { type: ActionCommands.CLEAR_USERS; payload: T };

export const githubReducer = <T>(
  state: State<T>,
  action: Action<T>
): State<T> => {
  switch (action.type) {
    case "GET_USERS":
      console.log("getting users", action.type);
      return {
        ...state,
        userList: action.payload,
        loading: false,
        fish: "hello from reducer",
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
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
