import React, {useEffect} from "react";
import CartList from "../Components/CartList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getTotalPrice } from "../Redux/Features/cartSlice";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    if (!isLoggedIn) {
      navigate("/login");
      toast.error("You must be logged in");
    } else {
      toast.error("Website is not Connected with Payment Facility");
    }
  };

  useEffect(() => {
    dispatch(
      getTotalPrice(
        cartData.reduce((acc, item) => {
          return (acc += (item.costForTwo*item.quantity));
        }, 0)
      )
    );
  });
  
  return cartData.length > 0 ? (
    <div className="w-11/12 min-h-screen mx-auto mt-6 md:mt-16 flex flex-col md:flex-row justify-start md:justify-center items-start">
      <div className="w-full pr-4 rounded-xl md:w-[65%] max-h-[60vh] md:max-h-[70vh] overflow-y-auto md:overflow-x-auto flex flex-col justify-between items-center  gap-5 mb-6">
        {cartData.map((data) => (
          <CartList {...data} key={data.id} />
        ))}
      </div>
      <div className="md:pl-8 w-full md:w-[35%] md:h-[70vh] flex flex-col justify-between items-start">
        <div>
          <p className="text-2xl xl:text-4xl text-white font-bold">Your Cart</p>
          <p className="text-4xl xl:text-7xl text-white font-bold pb-8">
            Summary
          </p>
          <p className="text-2xl xl:text-3xl text-white font-bold">
            Total Items :{" "}
            <span className="text-pink-500">{cartData.length}</span>
          </p>
        </div>
        <div className="w-full">
          <p className="text-2xl xl:text-3xl text-white font-bold textgree">
            Total Amount : <span className="text-green-500">₹{totalPrice}</span>
          </p>
          <button
            onClick={checkoutHandler}
            className="w-full bg-green-500 hover:bg-green-700 p-4 mt-8 rounded-md text-center text-2xl xl:text-3xl text-white font-bold transition-all duration-500"
          >
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h1 className="min-w-screen min-h-screen flex justify-center items-center text-5xl text-white">
      No Item
    </h1>
  );
};

export default Cart;
