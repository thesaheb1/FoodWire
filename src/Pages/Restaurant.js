import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Features/cartSlice";
import toast from "react-hot-toast";
import FoodContainer from "../Components/FoodContainer";
import RestroShimmerUi from "../Components/RestroShimmerUi";
import { hard_Data } from "../Utils/Config";

const Restaurant = () => {
  const [resData, setResData] = useState([]);
  const [shimmar, setShimmar] = useState();
  const navigate = useNavigate();
  const { resId } = useParams();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);

  const cartHandler = () => {
    dispatch(addToCart(resData));
    toast.success("Item added Successfully");
  };

  useEffect(() => {
    setShimmar(true);
    const timer = setTimeout(() => {
      const r = hard_Data.filter((item) => item.info.id === resId);
      setResData(r[0].info);
      setShimmar(false);
    },1000);

    return () => clearTimeout(timer);
  }, [resId]);

  if (!resData) {
    return null;
  }

  return shimmar ? (
    <RestroShimmerUi />
  ) : (
    <div className="scale-up-center w-11/12 min-h-screen mx-auto flex flex-col justify-start items-center my-8">
      <div className="border-2 border-[#494949] group w-full sm:w-[80%] md:w-11/12 gap-x-20 rounded-md flex flex-col md:flex-row  justify-between items-center cursor-pointer p-4">
        <div className="flex justify-start items-center">
          <img
            src={resData.cloudinaryImageId}
            alt="foodImg"
            className="aspect-square w-full md:h-[300px] mb-8 md:mb-0 rounded-md group-hover:scale-110 transition-all duration-500"
          />
        </div>
        <div className="w-full md:w-[50%] h-[300px] flex flex-col justify-between items-start">
          <div className="w-full flex justify-between items-baseline pb-1">
            <p className="text-2xl sm:text-3xl text-white font-bold">
              {resData.name}
            </p>
            <p className=" bg-green-800 rounded-full text-2xl text-yellow-400 font-bold px-4">
              {resData.avgRatingString}
            </p>
          </div>
          <p className="text-sm text-gray-400 pb-1">
            {resData.cuisines ? resData.cuisines.join(", ") : resData.cuisines}
          </p>
          <div className="w-full flex justify-between items-baseline">
            <p className="text-xl text-gray-200 font-semibold">
              {resData.locality}
            </p>
            <p className="text-md text-blue-400 font-bold">
              {resData.isOpen ? "Open" : "Close"}
            </p>
          </div>
          <p className="text-sm text-gray-300 font-bol">{resData.areaName}</p>
          <div className="flex w-full justify-between items-baseline">
            <p className="text-3xl sm:text-4xl xl:text-5xl w-[40%] font-bold text-green-400 pt-6">
              ₹ {resData.costForTwo}
            </p>
            {cartData.some((c) => c.id === resData.id) ? (
              <button
                onClick={() => {
                  navigate("/cart");
                }}
                className="scale-down-center w-[60%] bg-[#3aa1af] hover:bg-[#0f7d8b] rounded-md text-2xl p-2 text-white font-bold text-center transition-all duration-500"
              >
                Order Now
              </button>
            ) : (
              <button
                onClick={cartHandler}
                className="w-[60%] bg-purple-500 hover:bg-purple-700 rounded-md text-2xl p-2 text-white font-bold text-center transition-all duration-500"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
      <FoodContainer />
    </div>
  );
};

export default Restaurant;
