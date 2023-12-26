import React from 'react'

const ShimmarUi = () => {
  return (
   <div className='w-11/12 flex justify-center items-start flex-wrap py-[90px] gap-5'>
     {Array(12).fill("").map((e, index) => <div key={index} className='border-2 border-[#494949] w-[90%] md:w-[270px] h-fit rounded-md flex flex-col justify-between items-start p-2'>
    <div className='contour aspect-square w-full bg-[#222222] rounded-md'></div>
    <div className="w-full flex justify-between items-center my-4">
        <div className="contour h-[32px] w-[70%] bg-[#222222] rounded-full"></div>
        <div className="contour h-[28px] w-[66px] rounded-full bg-[#222222]">
        </div>
      </div>
      <div className="contour h-[24px] w-[100%] bg-[#222222] rounded-full"></div>
  </div>)}
   </div>
  )
};

export default ShimmarUi