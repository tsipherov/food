import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";
import { FoodContext } from "../context";

const MealPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipe, setRecipe } = useContext(FoodContext);

  useEffect(() => {
    getMealById(id).then((res) => setRecipe(res.meals[0]));
    // eslint-disable-next-line
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <h1 className="recipeHeader">{recipe.strMeal}</h1>
          <div className="ingredientContainer">
            <div className="imgContainer">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            </div>

            <table className="centered">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes("Ingredient") && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>

          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>

          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: "2rem 0 1.5rem" }}>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
      <button className="btn btn-back light-blue lighten-1" onClick={goBack}>
        Go Back
      </button>
    </>
  );
};

export default MealPage;
