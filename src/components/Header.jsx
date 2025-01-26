import { useState } from "react";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import LeafletMapSearch from "./Map";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleLeft = () => {
    setToggle(true);
  };

  const hideToggle = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <MdOutlineDesktopWindows />,
      name: "Swiggy corporate",
    },
    {
      icon: <CiSearch />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <IoIosHelpBuoy />,
      name: "Help",
    },
    {
      icon: <FaRegUser />,
      name: "Sign In",
    },
    {
      icon: <CiShoppingCart />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        onClick={hideToggle}
        className={`black-overlay w-full h-full fixed duration-500 bg-black/50 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
      <div
        className={`z-[9999] cursor-pointer w-[75%] sm:w-[500px] bg-white h-full fixed top-0 left-0 duration-500 transform ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-2 mt-14 flex justify-center items-center w-[50%] md:w-[100%]">
          <LeafletMapSearch />
        </div>
      </div>
      <header
        className={`p-3 shadow-xl sticky top-0 z-[999] duration-300 ${
          toggle ? "bg-black/70" : "bg-white"
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img className="w-full" src="/slogo.png" alt="Logo" />
          </div>
          <div
            onClick={toggleLeft}
            className="hover:text-[#ff5200] cursor-pointer ml-4"
          >
            <span className="border-b-2 border-gray-600 font-medium hover:border-[#ff5200]">
              Others
            </span>
            <RiArrowDropDownLine className="hidden md:inline text-[#ff5200] text-[40px]" />
          </div>
          <nav className="hidden md:flex list-none gap-10 ml-auto text-[18px]">
            {links.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 cursor-pointer hover:text-[#ff5200]"
              >
                {item.icon}
                <span>
                  {item.name} <sup className="text-[#ee9d77]">{item.sup}</sup>
                </span>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
