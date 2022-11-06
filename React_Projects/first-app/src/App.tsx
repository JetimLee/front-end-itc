import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { Login } from "./Login";
import { Header } from "./Header";
import { CreatePost } from "./CreatePost";
import { PostList } from "./PostList";

export const UserContext = createContext("");

function App() {
  const [user, setUser] = useState("gavin");
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : `Please Login`;
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} user={""} />;
  }
  return (
    <UserContext.Provider value={user}>
      <Header username={user} setUser={setUser} />
      <CreatePost username={user} setPostList={setPostList} posts={postList} />
      <PostList postList={postList} />
    </UserContext.Provider>
  );
}

export default App;
