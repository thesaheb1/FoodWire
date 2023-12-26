import { useDispatch, useSelector } from "react-redux";
import Logo from "../Assets/images/logoFoodWire.png";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {setIsLoggedIn} from "../Redux/Features/loginSlice";
import toast from "react-hot-toast";

const Header = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(setIsLoggedIn(false))
    toast.success("Logout Successfully");
  }
  return (
    <div className="min-w-screen bg-black flex justify-center items-center border-b-2 border-[#222222] shadow-[0_10px_10px_rgb(0,0,0)]">
      <div className="scale-up-center w-10/12 flex justify-between items-center px-4 py-2">
        <Link to="/">
          <img src={Logo} alt="" className="w-24 md:w-32 aspect-auto cursor-pointer my-2" />
        </Link>
        <ul className="text-white text-xl font-bold hidden md:flex justify-center items-center gap-x-10">
          <Link to="/">
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to="/offers">
            <li className="cursor-pointer">Offer</li>
          </Link>
          <Link to="/contact">
            <li className="cursor-pointer">Contact</li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer">About</li>
          </Link>
        </ul>
        <div className="flex justify-center items-center gap-x-5">
          {isLoggedIn ? <button onClick={logoutHandler} className="bg-white text-black font-bold py-2 px-4 rounded-full cursor-pointer">
            Logout
          </button>: <button onClick={()=>navigate("/login")} className="bg-white text-black font-bold py-2 px-4 rounded-full cursor-pointer">
            Login
          </button>}
          <div className="relative">
            <Link to="/cart">
              <IconContext.Provider value={{ color: "#9376E0", size: "24px" }}>
                <div className="cursor-pointer">
                  <FaShoppingCart />
                </div>
              </IconContext.Provider>

              {cartData.length > 0 && <p className="text-white text-[0.8rem] font-bold flex justify-center items-center bg-green-700 w-6 h-6 rounded-full absolute bottom-2 left-4 animate-bounce">
                {cartData.length}
              </p>}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
