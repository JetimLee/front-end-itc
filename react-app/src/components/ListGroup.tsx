import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  // items = [];
  const [isActive, setIsActive] = useState(-1);
  const handleClick = (event: React.MouseEvent, idx: number) => {
    setIsActive(idx);
  };
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items to show...</p>}
      <ul className="list-group">
        {items.map((item, idx) => (
          <li
            onClick={(e) => {
              handleClick(e, idx), onSelectItem(item);
            }}
            className={
              isActive === idx ? "list-group-item active" : "list-group-item"
            }
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
