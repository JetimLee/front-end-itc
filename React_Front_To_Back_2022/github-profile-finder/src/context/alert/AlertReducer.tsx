interface State<T> {}
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

export const alertReducer = <T,>(
  state: State<T>,
  action: Action<T>
): State<T> => {
  console.log(state, "State in reducer", action, "action in reducer");
  switch (action.type) {
    default:
      return state;
  }
};
