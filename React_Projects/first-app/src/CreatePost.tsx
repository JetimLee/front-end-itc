import React, { useState, FC, useRef, MutableRefObject } from "react";
import { iPost } from "./interfaces";

interface Props {
  username: string;
  setPostList: Function;
  posts: iPost[];
}
export const CreatePost: FC<Props> = ({ username, setPostList, posts }) => {
  //since an object is being used here it's best to use null as the init value
  const [image, setImage] = useState<File | null>(null);
  const [postText, setPostText] = useState("");
  const imageInputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const postTextInputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const handleSubmission = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (postText.trim() !== "") {
      const post: iPost = { postText, image, username };
      postTextInputRef.current.value = "";
      imageInputRef.current.value = "";
      const newPosts = [post, ...posts];
      setPostList(newPosts);
    }
  };
  const handlePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    } else {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmission} action="">
        <input
          ref={postTextInputRef}
          onChange={(e) => setPostText(e.target.value)}
          type="text"
          placeholder="Add Post Content"
        />
        <input
          ref={imageInputRef}
          onChange={(e) => handlePictureUpload(e)}
          type="file"
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};
