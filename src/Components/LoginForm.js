import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { setIsLoggedIn } from "../Redux/Features/loginSlice";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [isPasswordVisible, SetisPasswordVisible] = useState(true);
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  function Formhandler(event) {
    const { name, value } = event.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    dispatch(setIsLoggedIn(true));
    navigate("/");
    toast.success("Login Successfully");
    console.log(FormData);
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-600">*</sup>
        </p>
        <input
          type="email"
          name="email"
          value={FormData.email}
          onChange={Formhandler}
          required
          placeholder="Enter your email address"
          className="bg-[rgba(255,255,255,0.2)] placeholder:text-gray-400 placeholder:text-opacity-80 rounded-[0.5rem] border-b-2 border-gray-400 text-gray-200 w-full p-[12px]"
        />
      </label>
      <label className="w-full relative">
        <p className="text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-600">*</sup>
        </p>
        <input
          type={isPasswordVisible ? "password" : "text"}
          name="password"
          value={FormData.password}
          onChange={Formhandler}
          required
          placeholder="Enter your password"
          className="bg-[rgba(255,255,255,0.2)] placeholder:text-gray-400 placeholder:text-opacity-80 border-b-2 border-gray-400 rounded-[0.5rem] text-gray-200 w-full p-[12px]"
        />
        <div className="flex justify-between items-center">
          <Link to="/signup">
            <p className="text-sm text-right text-sky-600 cursor-pointer">
              or create an account
            </p>
          </Link>
          <p className="text-sm text-right text-sky-600 cursor-pointer">
            Forgot Password
          </p>
        </div>
        <div
          className="cursor-pointer absolute top-10 right-2 text-2xl text-gray-400"
          onClick={() => {
            SetisPasswordVisible(!isPasswordVisible);
          }}
        >
          {isPasswordVisible ? <BiShow /> : <BiHide />}
        </div>
      </label>

      <button className="bg-yellow-500 rounded-[8px] font-bold text-black p-[8px] mt-4">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
