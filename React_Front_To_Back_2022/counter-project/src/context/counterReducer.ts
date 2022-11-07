type initialState = {
  count: number;
};
export enum ActionCommands {
  INCREASE_COUNT = "INCREASE_COUNT",
  DECREASE_COUNT = "DECREASE_COUNT",
}

export type Action =
  | { type: ActionCommands.INCREASE_COUNT; payload: number }
  | { type: ActionCommands.DECREASE_COUNT; payload: number };

export const counterReducer = (
  state: initialState,
  action: Action
): initialState => {
  switch (action.type) {
    case ActionCommands.DECREASE_COUNT:
      return { ...state, count: action.payload };
    case ActionCommands.INCREASE_COUNT:
      return { ...state, count: action.payload };
    default:
      return { ...state };
  }
};
