import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import GoBackButton from "../components/GoBackButton";
import MealList from "../components/MealList";
import { Preloader } from "../components/Preloader";
import { FoodContext } from "../context";

const Category = () => {
  const { slug } = useParams();
  const { meals, setMeals } = useContext(FoodContext);

  useEffect(() => {
    getFilteredCategory(slug).then((res) => setMeals(res.meals));
    // eslint-disable-next-line
  }, [slug]);
  return (
    <>
      <GoBackButton />
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};

export default Category;
