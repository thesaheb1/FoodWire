import React from "react";

const RestroShimmerUi = () => {
  return (
    <div className="w-11/12 min-h-screen mx-auto flex flex-col justify-start items-center my-8">
      <div className="border-2 border-[#494949] w-full sm:w-[80%] md:w-11/12 gap-x-20 rounded-md flex flex-col md:flex-row  justify-between items-center cursor-pointer p-4">
        <div className="contour aspect-square w-full md:w-[300px] md:h-[300px] mb-8 md:mb-0 rounded-md"></div>
        <div className="w-full md:w-[50%] h-[300px] flex flex-col justify-between items-start">
          <div className="w-full flex justify-between items-baseline pb-1">
            <div className="contour w-[60%] h-12 rounded-md text-white font-bold"></div>
            <div className="contour w-[20%] h-10 rounded-full "></div>
          </div>
          <div className="contour w-full h-6 rounded-md"></div>
          <div className="w-full flex justify-between items-baseline">
            <div className="contour w-[70%] h-10 rounded-md"></div>
            <div className="contour w-[15%] h-8 rounded-md"></div>
          </div>
          <div className="contour w-[40%] h-6 rounded-md"></div>
          <div className="flex w-full justify-between items-end">
            <div className="contour w-[30%] h-12 rounded-md"></div>
            <div className="contour w-full h-12 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestroShimmerUi;
