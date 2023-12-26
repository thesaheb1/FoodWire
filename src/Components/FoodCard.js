
const FoodCard = ({
  cloudinaryImageId,
  name,
  areaName,
  avgRatingString,
}) => {
  return (
    <div className="scale-up-center border-2 border-[#494949] w-[90%] md:w-[270px] h-fit rounded-md flex flex-col justify-between items-start p-2 group cursor-pointer">
      <img
        src={cloudinaryImageId}
        alt="foodImg"
        loading="lazy"
        className="aspect-square rounded-md group-hover:scale-105 transition-all duration-500"
      />
      <div className="w-full flex justify-between items-baseline pt-4">
        <p className="text-xl text-white font-bold py-1">
          {name.length > 12 ? name.slice(0, 12) + "..." : name}
        </p>
        <p className="px-4 bg-green-800 rounded-full text-2xl text-yellow-400 font-bold">
          {avgRatingString}
        </p>
      </div>
    
     
      <p className="text-sm text-gray-300 font-bol pb-2">{areaName}</p>
    </div>
  );
};

export default FoodCard;
