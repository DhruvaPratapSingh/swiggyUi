import { useState } from "react";
import { inyourminddata } from "../data/restaurant";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const InYourMind = () => {
    const [slide, setSlide] = useState(0);

    const leftSlide = () => {
        if (slide + 8 < inyourminddata.length) {
            setSlide(slide + 3);
        }
    };

    const rightSlide = () => {
        if (slide > 0) {
            setSlide(slide - 3);
        }
    };

    return (
        <>
        <div className="max-w-[1200px] mx-auto">
            <div className="flex my-3 items-center justify-between">
                <div className="font-bold text-[24px]">Whats In Your Mind?</div>
                <div className="flex">
                    <div
                        className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#e2e2e7] mx-2 cursor-pointer"
                        onClick={rightSlide}
                    >
                        <FaArrowLeft />
                    </div>
                    <div
                        className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#e2e2e7] mx-2 cursor-pointer"
                        onClick={leftSlide}
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden cursor-pointer ">
                {inyourminddata.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-[150px] shrink-0 duration-500 hover:scale-[1.12]"
                        style={{
                            transform: `translateX(-${slide * 100}%)`,
                        }}
                    >
                        <img src={item.image} alt="" className="w-full duration-500 hover:scale-[1.12]" />
                    </div>
                ))}
            </div>
            <hr className="border-b-[1px] border-gray-500 opacity-10" />
        </div>
     </>
    );
};

export default InYourMind;
