import { useContext, useEffect } from "react";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { FoodContext } from "../context";
import CategoryList from "../components/CaregoryList";
import Search from "../components/Search";

const HomePage = () => {
  const { categories, setAllCategories } = useContext(FoodContext);
  useEffect(() => {
    getAllCategories().then((res) => setAllCategories(res.categories));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Search />
      {categories ? <CategoryList /> : <Preloader />}
    </>
  );
};

export default HomePage;
