import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchMealByName } from "../api";
import { FoodContext } from "../context";

const Search = () => {
  const [value, setValue] = useState("");
  // eslint-disable-next-line
  let [searchParams, setSearchParams] = useSearchParams();
  const { setMeals } = useContext(FoodContext);
  const navigate = useNavigate();
  const resultSearchParams = searchParams.get("meal");

  useEffect(() => {
    // console.log("searchParams >>> ", resultSearchParams);
    if (resultSearchParams) {
      setValue(resultSearchParams);
      searchMealByName(resultSearchParams).then((res) => {
        // console.log("res >>> ", res);
        setMeals(res.meals);
      });
    }
    // eslint-disable-next-line
  }, [resultSearchParams]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (value.length === 0) {
      navigate("/");
    } else {
      navigate(`/browse?meal=${value}`);
    }
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="Search for a meal"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className="btn searchBtn" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
