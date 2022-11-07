import { createContext, ReactNode, useReducer } from "react";
import { counterReducer, ActionCommands } from "./counterReducer";

interface counterContextInterface {
  count: number;
  decreaseCount: () => void;
  increaseCount: () => void;
}
interface Props {
  children?: ReactNode;
}

const CounterContext = createContext<counterContextInterface>(
  {} as counterContextInterface
);

export const CounterProvider = ({ children }: Props) => {
  type initialState = {
    count: number;
  };

  const startingState: initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(counterReducer, startingState);

  const increaseCount = () => {
    console.log("count was increased");
    dispatch({ type: ActionCommands.INCREASE_COUNT, payload: state.count + 1 });
  };
  const decreaseCount = () => {
    console.log("count was decreased");
    dispatch({ type: ActionCommands.DECREASE_COUNT, payload: state.count - 1 });
  };
  return (
    <CounterContext.Provider
      value={{ count: state.count, decreaseCount, increaseCount }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
