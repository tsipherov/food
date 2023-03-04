export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "sdf":
      return { ...state };

    default:
      return state;
  }
};
