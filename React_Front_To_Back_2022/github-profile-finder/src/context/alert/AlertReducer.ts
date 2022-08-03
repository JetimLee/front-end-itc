interface State<T> {
  alert: T;
}
export enum ActionCommands {
  SET_ALERT = "SET_ALERT",
  REMOVE_ALERT = "REMOVE_ALERT",
}
type Action<T> =
  | { type: ActionCommands.SET_ALERT; payload: T }
  | { type: ActionCommands.REMOVE_ALERT; payload: T };

export const alertReducer = <T>(
  state: State<T>,
  action: Action<T>
): State<T> => {
  switch (action.type) {
    case "SET_ALERT":
      return { alert: action.payload };
    case "REMOVE_ALERT":
      return { alert: action.payload };

    // return action.payload;
    default:
      return state;
  }
};
