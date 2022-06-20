interface State<T> {
  userList: T;
  loading: boolean;
  fish: string;
}
export enum ActionCommands {
  SET_LOADING = "SET_LOADING",
  GET_USERS = "GET_USERS",
}
type Action<T> =
  | { type: ActionCommands.GET_USERS; payload: T }
  | { type: ActionCommands.SET_LOADING; payload: T };

export const githubReducer = <T>(
  state: State<T>,
  action: Action<T>
): State<T> => {
  console.log(state, "State in reducer", action, "action in reducer");
  switch (action.type) {
    case "GET_USERS":
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
    default:
      return state;
  }
};
