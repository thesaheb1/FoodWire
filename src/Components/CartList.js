import { useDispatch } from "react-redux";
import { removeFromCart, incQuantity, decQuantity } from "../Redux/Features/cartSlice";
import { AiFillDelete } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";

const CartList = ({ id, cloudinaryImageId, name, cuisines, costForTwo, quantity }) => {
  const dispatch = useDispatch();

  // quantity increaser
  const plusHandler = () => {
    if (quantity === 20) {
      toast.error("At this time only 20 of these available.");
      return;
    }
    dispatch(incQuantity(id));
  };

  // quantity reduer
  const minusHandler = () => {
    if (quantity === 1) {
      dispatch(removeFromCart(id));
      toast.success("Item deleted successfully");
      return;
    }
    dispatch(decQuantity(id));
  };

  return (
    <div className="scale-up-center w-full sm:w-[450px] xl:w-[550px] border-2 border-[#494949] p-2 rounded-md flex justify-between items-start md:items-center">
      <div className="h-[180px]">
        <img
          src={cloudinaryImageId}
          alt="foodImg"
          className="aspect-square h-full  rounded-md hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="w-[70%] flex flex-col justify-between my-auto items-start pl-4">
        <p className="xl:text-2xl text-white font-bold">{name}</p>
        <p className="text-md text-gray-400 pb-2 md:pb-4">{cuisines.join(", ")}</p>
        <div className="w-full flex justify-between items-baseline">
          <p className="text-3xl font-bold text-green-400">
            ₹ {costForTwo}
          </p>
        </div>
        <div className="bg-gray-200 text-white bg-opacity-20 flex justify-between items-center w-full mt-2 md:mt-4 md:py-2 rounded-md">
          <button
            onClick={minusHandler}
            className={
              quantity > 1
                ? "text-white text-2xl md:text-3xl font-bold flex justify-center items-center px-4"
                : "text-red-500 text-2xl md:text-3xl font-bold flex justify-center items-center px-4"
            }
          >
            {quantity > 1 ? <FaMinus /> : <AiFillDelete />}
          </button>
          <p className="text-2xl md:text-3xl font-bold flex justify-center items-center">
            {quantity}
          </p>
          <button
            onClick={plusHandler}
            className="text-2xl md:text-3xl font-bold flex justify-center items-center px-4"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
