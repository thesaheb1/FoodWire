import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterFood } from "../Redux/Features/filterSlice";
import { hard_Data } from "../Utils/Config";

const SearchContainer = () => {
 
  const [searchedData, setSearchedData] = useState('');
  const dispatch = useDispatch();

  const searchHandler = (searchedData) => {
      dispatch(filterFood(hard_Data.filter((data) => {
        return searchedData.toLowerCase() === '' ? data : data.info.name
          .toLowerCase()
          .includes(searchedData.toLowerCase());
      })))
 
  };

  useEffect(()=>{
    searchHandler(searchedData);
  },[searchedData])

  return (
    <div className="w-screen pt-16 md:py-16 bg-custom flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <input
            type="search"
            value={searchedData}
            onChange={e => {setSearchedData(e.target.value)}}
            className="scale-up-center w-[70%] text-3xl px-4 font-bold h-10 md:w-96 md:h-14 rounded-l-full"
          />
          <button
            onClick={()=>{searchHandler(searchedData)}}
            className="scale-up-center text-black text-3xl hover:text-4xl transition-all duration-200 flex justify-center items-center w-14 h-10 md:h-14 rounded-r-full bg-white ml-1"
          >
            <FaSearch />
          </button>
        </div>
        <h1 className="scale-up-center text-xl md:text-3xl font-bold text-white pt-8 md:pt-8">
          What's on your mind?
        </h1>
      </div>
    </div>
  );
};

export default SearchContainer;
