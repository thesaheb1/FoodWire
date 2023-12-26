import FoodContainer from "./FoodContainer";
import SearchContainer from "./SearchContainer";

const Body = () => {

  return (
    <div className='min-w-screen min-h-screen flex flex-col justify-start items-center'>
      <SearchContainer/>
      <FoodContainer/>
    </div>
  );
};

export default Body;