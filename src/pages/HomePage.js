import { useEffect, useState } from "react";
import { getAllCategories } from "../api";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllCategories().then((res) => setData(res.categories));
  }, []);
  console.log("data >>> ", data);
  return <div>HomePage</div>;
};

export default HomePage;
