import React, { useContext } from "react";
import { FoodContext } from "../context";
import Meal from "./Meal";

const MealList = () => {
  const { meals } = useContext(FoodContext);
  return (
    <div className="list">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
};

export default MealList;
