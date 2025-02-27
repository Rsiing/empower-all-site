import { FaTrophy, FaBowlFood } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import Navbar from "./navbar";
import { div } from "framer-motion/client";


export default function Home() {
  return (
    <div>
      <Navbar/>
    <div className="w-full h-full bg-backdrop p-20 cursor-default">
      <div className="flex flex-col gap-4">
        <h1 className="text-[10rem] text-primarycol font-extrabold">EmpowerAll</h1>
        <h2 className="relative left-20 text-[5rem] font-bold text-secondarycol">Health and welbeing made for all</h2>
        <div className="grid grid-cols-2 shadow-xl mt-40 gap-4">
          <div className=" bg-secondarycol p-20 rounded-3xl flex self-center">
            <p className="text-5xl font-semibold text-backdrop">
              At EmpowerAll, we believe that fitness is more than just a workout—it's a path
              to transforming your mind, body, and life. Whether you're a beginner or an 
              experienced athlete, our goal is to help you unlock your true strength.
              It's time to challenge yourself and redefine what's possible with EmpowerAll.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full h-full bg-accentcol rounded-3xl container flex text-[120px] text-primarycol justify-around flex-row py-10">
              <button className="hover:scale-150 duration-500"><FaHeartbeat/></button>
              <button className="hover:scale-150 duration-500"><FaBowlFood/></button>
              <button className="hover:scale-150 duration-500"><FaTrophy/></button>
            </div>
            <div className="flex justify-center bg-primarycol text-secondarycol rounded-3xl h-full items-center">
              <p className="text-5xl font-bold">
                Join the wellbeing revoultion
              </p>
            </div>
          </div>
        </div>
        <div className="h-[400px] w-full text-5xl grid grid-cols-3 gap-4 self-center">
          <div className="bg-accentcol items-center flex p-10 rounded-3xl">
            <p className="text-center font-semibold text-primarycol">Fully Adjustable meal panner</p>
          </div>
          <div className="bg-primarycol items-center flex p-10 rounded-3xl">
            <p className="text-center font-semibold text-secondarycol">Huge exercise libary</p>
          </div>
          <div className="bg-secondarycol items-center flex p-10 rounded-3xl">
            <p className="text-center font-semibold text-primarycol">Fully Adjustable meal panner</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
