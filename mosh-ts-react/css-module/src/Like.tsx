import styles from "./Like.module.css";
import { AiFillLike } from "react-icons/ai";

interface Props {
  onClick: () => void;
  liked: boolean;
}

export const Like = ({ onClick, liked }: Props) => {
  return (
    <div>
      <AiFillLike
        className={[
          styles.myLike,
          styles.somethingElse,
          `${liked ? styles.liked : ""}`,
        ].join(" ")}
        onClick={onClick}
        size={liked ? "40" : "20"}
      />
    </div>
  );
};
