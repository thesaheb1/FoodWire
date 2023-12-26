import { useEffect, useState } from "react";
import { hard_Data } from "../Utils/Config";
import FoodCard from "./FoodCard";
import ShimmarUi from "./ShimmarUi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterFood } from "../Redux/Features/filterSlice";

const FoodContainer = () => {
  const filterData = useSelector((state) => state.filter.filterData);
  const dispatch = useDispatch();
  const [shimmar, setShimmar] = useState(false);

  const fetchData = () => {
    setShimmar(true);

    const timer = setTimeout(() => {
      dispatch(filterFood(hard_Data));
      setShimmar(false);
    }, 1000);

    return () => clearTimeout(timer);
   
  };

  useEffect(() => {
    fetchData();
  }, []);

  return shimmar ? (
    <ShimmarUi />
  ) : filterData.length > 0 ? (
    <div className="w-11/12 flex flex-col justify-center items-start flex-wrap">
      <div>
        <h1 className="text-md font-bold md:text-3xl text-white py-8">
          Top restaurant chains in Delhi
        </h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-5 pb-8">
        {filterData.map((data) => (
          <Link
            className="flex justify-center items-center"
            to={"/restaurant/" + data?.info?.id}
            key={data?.info?.id}
          >
            <FoodCard {...data?.info} />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="min-w-screen pt-24 flex justify-center items-center text-5xl text-white">
      Searched Item Not Available
    </div>
  );
};

export default FoodContainer;
