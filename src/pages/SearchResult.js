import React, { useContext } from "react";
import GoBackButton from "../components/GoBackButton";
import MealList from "../components/MealList";
import { Preloader } from "../components/Preloader";
import Search from "../components/Search";
import { FoodContext } from "../context";

const SearchResult = () => {
  const { meals } = useContext(FoodContext);

  return (
    <>
      <GoBackButton />
      <Search />
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};

export default SearchResult;
