import { createContext, ReactNode, useReducer } from "react";
import { alertReducer, ActionCommands } from "./AlertReducer";

interface AlertContextInterface {
  setAlert<T>(msg: T, type: T): void;
  alert: { msg: string; type: string };
}

interface Props {
  children?: ReactNode;
}
interface Alert {
  msg: string;
  type: string;
}
const AlertContext = createContext<AlertContextInterface>(
  {} as AlertContextInterface
);

export const AlertProvider = ({ children }: Props) => {
  type initialState<T> = { alert: { msg: T; type: T } | null };
  const startingState: initialState<{}> = { alert: null };
  const [state, dispatch] = useReducer(alertReducer, startingState);

  const setAlert = <T,>(msg: T, type: T) => {
    dispatch({ type: ActionCommands.SET_ALERT, payload: { msg, type } });

    setTimeout(() => {
      dispatch({ type: ActionCommands.REMOVE_ALERT, payload: null });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state.alert as Alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
