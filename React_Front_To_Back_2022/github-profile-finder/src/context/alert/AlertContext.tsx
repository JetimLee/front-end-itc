import { createContext, ReactNode, useReducer } from "react";
import { alertReducer, ActionCommands } from "./AlertReducer";

interface AlertContextInterface {}
interface Props {
  children?: ReactNode;
}
const AlertContext = createContext<AlertContextInterface>(
  {} as AlertContextInterface
);

export const AlertProvider = ({ children }: Props) => {
  // const [userList, setUserList] = useState<user[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  type initialState = { alert: { msg: string; type: string } | null };
  const startingState: initialState = { alert: null };
  const [state, dispatch] = useReducer(alertReducer, startingState);

  const setAlert = (msg: string, type: string) => {
    dispatch({ type: ActionCommands.SET_ALERT, payload: { msg, type } });

    setTimeout(() => {
      dispatch({ type: ActionCommands.REMOVE_ALERT, payload: null });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
