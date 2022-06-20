import { Reducer } from "react";
import { user } from "../../interfaces/userInterface";

export type State = {
  userList: user[];
  loading: boolean;
  fish: string;
};
export type Action = { type: "GET_USERS"; payload: user[] };
export const githubReducer: Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        userList: action.payload,
        loading: false,
        fish: "hello from reducer",
      };
    default:
      return state;
  }
};
