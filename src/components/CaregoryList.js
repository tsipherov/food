import React, { useContext } from "react";
import { FoodContext } from "../context";
import CategoryItem from "./CategoryItem";

const CaregoryList = () => {
  const { categories } = useContext(FoodContext);
  return (
    <div className="list">
      {categories.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
};

export default CaregoryList;
