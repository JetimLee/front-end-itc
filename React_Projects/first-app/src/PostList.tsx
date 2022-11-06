import React, { FC } from "react";
import { iPost } from "./interfaces";
import { Post } from "./Post";

interface Props {
  postList: any;
}

export const PostList: FC<Props> = ({ postList }) => {
  return postList.map((post: iPost, i: number) => <Post key={i} post={post} />);
};
