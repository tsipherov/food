import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initState = {
  food: [],
};

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  state.method = (data) => {
    dispatch({ type: "", payload: data });
  };

  return <FoodContext.Provider value={state}>{children}</FoodContext.Provider>;
};
