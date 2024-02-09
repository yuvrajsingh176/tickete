// import { Inter } from "next/font/google";

import Additional from "./Additional";
import Details from "./Details";
import Frame1 from "./Frame1";
import Frequent from "./Frequent";
import Payment from "./Payment";
import Right from "./Right";

const Body = () => {
  return (
    <div className="mt-[80px]  text-black  flex flex-col items-center justify-between  font-open-sans w-full overflow-x-hidden">
      <div className="md:flex justify-center    w-full">
        <div className="md:w-[70%] h-auto">
          <Frame1 />
          <Details />
          <Additional />
          <Payment />
        </div>
        <div className="  h-auto w-[30%]    hidden md:block ">
          <Right />
        </div>
      </div>
      <div className="mb-[44px] w-full">
        <div className="border border-[#B9BBC6] h-[1px] mt-6  "></div>

        <Frequent />
        <div className="border border-[#B9BBC6] h-[1px] mt-6"></div>
      </div>
    </div>
  );
};
export default Body;
