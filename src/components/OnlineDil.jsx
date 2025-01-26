import { resdatachain } from "../data/resdatachain";
import { MdStars } from "react-icons/md";

const Onlinestore = () => {
  return (
    <>
    <div className="max-w-[1200px] mx-auto mt-10">
      <div className="flex my-3 items-center justify-between">
        <div className="font-bold text-[24px]">
         Online delivery where you want in just 20 mins.
        </div>
      </div>
      <div className="w-full border border-green-300">
        <div className="flex gap-10 font-medium text-[15px]">
            <span className=" cursor-pointer">sortby</span>
            <span className=" cursor-pointer">filter</span>
            <span className=" cursor-pointer">place</span>
        </div>
      </div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 m-14 lg:grid-cols-4">
        {resdatachain.map((item, idx) => (
          <div
            key={idx}
            className="w-[260px] h-[300px] rounded-sm shrink-0 duration-500 m-5 cursor-pointer hover:scale-[1.1]"
          >
            <img  src={item.image} alt="" className="w-full h-[60%] rounded-md object-cover " />
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
    </div>
    </>
  );
};

export default Onlinestore;
