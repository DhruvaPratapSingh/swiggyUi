import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { resdatachain } from "../data/resdatachain";
import { MdStars } from "react-icons/md";

const ResData = () => {
  const [slide, setSlide] = useState(0);

  const leftSlide = () => {
    if (slide + 4 < resdatachain.length) {
      setSlide(slide + 2);
    }
  };

  const rightSlide = () => {
    if (slide > 0) {
      setSlide(slide - 2);
    }
  };
  return (
    <>
    <div className="max-w-[1200px] mx-auto mt-10">
      <div className="flex my-3 items-center justify-between">
        <div className="font-bold text-[24px]">
          Top restaurant chains in Kanpur
        </div>
        <div className="flex">
          <div
            className="hidden lg:flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#e2e2e7] mx-2 cursor-pointer"
            onClick={rightSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className=" hidden lg:flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#e2e2e7] mx-2 cursor-pointer"
            onClick={leftSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 m-14 lg:flex overflow-hidden">
        {resdatachain.map((item, idx) => (
          <div
            key={idx}
            className="w-[260px] h-[300px] rounded-sm shrink-0 duration-500 m-5 cursor-pointer "
            style={{
              transform: `translateX(-${slide * 300}px)`,
            }}
          >
            <img  src={item.image} alt="" className="w-full h-[60%] rounded-md object-cover hover:scale-[1.09] duration-500" />
            <span className="m-2
             font-bold text-[15px]">{item.title}</span>
            <div className="flex items-center gap-1">
            <MdStars className="text-green-800 text-[20px] ml-1"/>
            <span className="font-semibold">{item.rating} •</span>
            <span className="font-medium">{item.minTime} - {item.maxTime} mins</span>
            </div>
            <span className="m-2">
            {item.name}</span>
            <br></br>
            <span className="m-2">
            {item.place}</span>
          </div>
        ))}
      </div>
    <hr className="border-b-0 border-black opacity-15"></hr>
    </div>
    </>
  );
};

export default ResData;
