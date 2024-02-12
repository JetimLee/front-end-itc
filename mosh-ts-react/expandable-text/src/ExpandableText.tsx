import { useState, useEffect } from "react";

interface Props {
  maxLimit?: number;
  children: string;
}

export const ExpandableText = ({ maxLimit = 100, children }: Props) => {
  const [showingMore, setShowingMore] = useState<boolean>(false);
  const text = showingMore ? children : children.substring(0, maxLimit);
  const handleSetTextToShow = () => {
    setShowingMore(false);
  };

  const handleShowMore = () => {
    setShowingMore(true);
  };

  return (
    <div>
      <span>{text}</span>
      {showingMore ? (
        <button onClick={handleSetTextToShow}>Show less</button>
      ) : (
        <button onClick={handleShowMore}>Show more</button>
      )}
    </div>
  );
};
