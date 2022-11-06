import React, { FC, useContext } from "react";
import { iPost } from "./interfaces";
import { UserContext } from "./App";

interface Props {
  post: iPost;
}

export const Post: FC<Props> = ({ post }) => {
  //returns the user with the useContext
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser === post.username;
  return (
    <>
      {post.image && (
        <img
          style={{ height: 100, width: 200, objectFit: "cover" }}
          alt="Post cover"
          src={URL.createObjectURL(post.image)}
        />
      )}
      <p>{post.postText}</p>
      <div style={{ color: isCurrentUser ? "green" : "inherit" }}>
        {post.username}
      </div>
    </>
  );
};
