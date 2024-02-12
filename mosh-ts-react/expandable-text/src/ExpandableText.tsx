import { useState, useEffect } from "react";

interface Props {
  maxLimit?: number;
  children: string;
}

export const ExpandableText = ({ maxLimit = 100, children }: Props) => {
  const [textToShow, setTextToShow] = useState<string>("");
  const [showingMore, setShowingMore] = useState<boolean>(false);

  const handleSetTextToShow = () => {
    const newText = children.slice(0, maxLimit) + "...";
    setTextToShow(newText);
    setShowingMore(false);
  };

  const handleShowMore = () => {
    setTextToShow(children);
    setShowingMore(true);
  };

  // useEffect to run handleSetTextToShow on component mount and whenever the props change
  useEffect(() => {
    handleSetTextToShow();
  }, [children, maxLimit]);

  return (
    <div>
      <span>{textToShow}</span>
      {showingMore ? (
        <button onClick={handleSetTextToShow}>Show less</button>
      ) : (
        <button onClick={handleShowMore}>Show more</button>
      )}
    </div>
  );
};
