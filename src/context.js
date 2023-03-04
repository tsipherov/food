import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initState = {
  categories: [],
  meals: [],
  recipe: {},
};

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  state.setAllCategories = (data) => {
    dispatch({ type: "SET_ALL_CATEGORIES", payload: data });
  };

  state.setMeals = (data) => {
    dispatch({ type: "SET_MEALS", payload: data });
  };

  state.setRecipe = (data) => {
    dispatch({ type: "SET_RECIPE", payload: data });
  };

  return <FoodContext.Provider value={state}>{children}</FoodContext.Provider>;
};
