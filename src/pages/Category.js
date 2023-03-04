import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import MealList from "../components/MealList";
import { Preloader } from "../components/Preloader";
import { FoodContext } from "../context";

const Category = () => {
  const { slug } = useParams();
  const { meals, setMeals } = useContext(FoodContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    getFilteredCategory(slug).then((res) => setMeals(res.meals));
    // eslint-disable-next-line
  }, [slug]);
  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};

export default Category;
