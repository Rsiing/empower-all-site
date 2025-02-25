import { FaTrophy, FaBowlFood } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full bg-backdrop p-20 cursor-default">
      <div className="flex flex-col gap-6">
        <h1 className="text-[10rem] text-primarycol font-extrabold">EmpowerAll</h1>
        <h2 className="relative left-20 text-[5rem] font-bold text-secondarycol">Health and welbeing made for all</h2>
        <div className="grid grid-cols-2 mt-40 gap-2">
          <div className=" bg-secondarycol p-20 rounded-3xl flex self-center">
            <p className="text-5xl font-semibold text-backdrop">
              At EmpowerAll, we believe that fitness is more than just a workout—it's a path
              to transforming your mind, body, and life. Whether you're a beginner or an 
              experienced athlete, our goal is to help you unlock your true strength.
              It's time to challenge yourself and redefine what's possible with EmpowerAll.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-full bg-accentcol rounded-3xl container flex text-[120px] text-primarycol justify-around flex-row py-10">
              <button className="hover:scale-150 duration-500"><FaHeartbeat/></button>
              <button className="hover:scale-150 duration-500"><FaBowlFood/></button>
              <button className="hover:scale-150 duration-500"><FaTrophy/></button>
            </div>
            <div className="flex justify-center bg-primarycol text-secondarycol rounded-3xl h-full items-center">
              <p className="text-5xl p-4 font-bold">
                Join the wellbeing revoultion
              </p>
            </div>
          </div>
        </div>
        <div>
        <Image 
                src="/dumbell.png" 
                alt="Meal Planner" 
                className="w-full h-full "
                width={0}
                height={0}/>
        </div>
      </div>
    </div>
  );
}
