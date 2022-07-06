interface State<T> {
  darkMode: T;
}

export enum ActionCommands {
  TOGGLE_THEME = "TOGGLE_THEME",
}
type Action<T> = { type: ActionCommands.TOGGLE_THEME; payload: T };

export const ThemeReducer = <T>(
  state: State<T>,
  action: Action<T>
): State<T> => {
  switch (action.type) {
    case ActionCommands.TOGGLE_THEME:
      //will turrn darkmode to true
      return { darkMode: action.payload };
    default:
      return state;
  }
};
