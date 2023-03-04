export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ALL_CATEGORIES":
      return { ...state, categories: payload };

    case "SET_MEALS":
      return { ...state, meals: payload };

    case "SET_RECIPE":
      return { ...state, recipe: payload };

    default:
      return state;
  }
};
