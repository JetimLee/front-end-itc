import { createContext, ReactNode, useReducer } from "react";
import { alertReducer } from "./AlertReducer";

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
  type initialState = {};
  const startingState: initialState = {};
  const [state, dispatch] = useReducer(alertReducer, startingState);

  return (
    <AlertContext.Provider value={{ alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
