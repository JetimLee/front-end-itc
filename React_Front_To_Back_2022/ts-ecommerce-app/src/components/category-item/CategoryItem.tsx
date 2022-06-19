import React from "react";
import { Category } from "../../interfaces/Category";
interface Props {
  category: Category;
}

export const CategoryItem: React.FC<Props> = ({
  category: { id, imgUrl, title },
}) => {
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};
