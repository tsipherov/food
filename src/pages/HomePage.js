import { useContext, useEffect } from "react";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { FoodContext } from "../context";
import CategoryList from "../components/CaregoryList";

const HomePage = () => {
  const { categories, setAllCategories } = useContext(FoodContext);
  useEffect(() => {
    getAllCategories().then((res) => setAllCategories(res.categories));
    // eslint-disable-next-line
  }, []);
  return <>{categories ? <CategoryList /> : <Preloader />}</>;
};

export default HomePage;
