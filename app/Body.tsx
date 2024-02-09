// import { Inter } from "next/font/google";

import Additional from "./Additional";
import Details from "./Details";
import Frame1 from "./Frame1";
import Frequent from "./Frequent";
import Payment from "./Payment";
import Right from "./Right";

const Body = () => {
  return (
    <div className="mt-[80px]  text-black  md:mx-[90px] flex flex-col font-open-sans ">
      <div className="flex md:justify-around justify-center w-full ">
        <div className="left md:w-3/5 w-full  h-auto mx-16">
          <Frame1 />
          <Details />
          <Additional />
          <Payment />
        </div>
        <div className="right w-2/5 h-auto ml-4 hidden md:block">
          <Right />
        </div>
      </div>
      <div className="mb-[44px] mx-4">
        <div className="border border-[#B9BBC6] h-[1px] mt-6"></div>

        <Frequent />
        <div className="border border-[#B9BBC6] h-[1px] mt-6"></div>
      </div>
    </div>
  );
};
export default Body;
