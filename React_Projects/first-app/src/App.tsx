import "./App.css";
import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useReducer,
} from "react";
import { Login } from "./Login";
import { Header } from "./Header";
import { CreatePost } from "./CreatePost";
import { PostList } from "./PostList";
import { iPost } from "./interfaces";
import { postReducer } from "./postReducer";

export const UserContext = createContext("");
interface postContextInterface {
  postList: iPost[];
  user: string;
}
const postContext = createContext<postContextInterface>(
  {} as postContextInterface
);

function App() {
  const [user, setUser] = useState("gavin");
  interface initialStateInterface {
    postList: iPost[];
    user: string;
  }
  const startingState: initialStateInterface = {
    postList: [],
    user: "",
  };
  const initialPostState: initialStateInterface = useContext(postContext);
  const [state, dispatch] = useReducer(postReducer, startingState);
  // const [postList, setPostList] = useState([]);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : `Please Login`;
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} user={""} />;
  }
  return (
    <postContext.Provider value={{state,dispatch}}>
      <UserContext.Provider value={user}>
        <Header username={user} setUser={setUser} />
        <CreatePost username={user} />
        <PostList postList={state.postList} />
      </UserContext.Provider>
    </postContext.Provider>
  );
}

export default App;
