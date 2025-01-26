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
    const [toggle,settoggle]=useState(false);
    const toggleleft=()=>{
     settoggle(true);
    }
    const hidetoggle=()=>{
     settoggle(false);
    }
    const links=[
        {
            icon:<MdOutlineDesktopWindows />,
            name:"Swiggy corporate"
        },
        {
            icon:<CiSearch />,
            name:"Search"
        },
        {
            icon:<BiSolidOffer />,
            name:"Offers",
            sup:"New"
        },
        {
            icon:<IoIosHelpBuoy />            ,
            name:"Help"
        },
        {
            icon:<FaRegUser />,
            name:"Sign In"
        },
        {
            icon:<CiShoppingCart/>,
            name:"Cart"
        },
    ]
    
  return (
   <>
    <div onClick={hidetoggle} className="black-overlay w-full h-full fixed duration-500 " style={{opacity: toggle ? 1 : 0,
    visibility: toggle ? "visible" : "hidden"}}>
    </div>
    <div className="hidden md:z-[9999] cursor-pointer w-[500px] bg-white h-full absolute duration-[600ms]"
    style={{
        left:toggle ? "0%" : "-100%"
    }}>
    <div className="p-5 mt-14 flex justify-center items-center ">
   <LeafletMapSearch/>
    </div>
    </div>
     <header className='p-3 shadow-xl sticky top-0 z-[999]' style={{backgroundColor: toggle ? "rgb(0, 0, 0,0.7)" : "white"}}>
      <div className='max-w-[1200px] mx-auto flex items-center'>
        <div className='w-[100px]'>
          <img className="w-full" src='/slogo.png' alt=''/>
        </div>
        <div onClick={toggleleft} className="hover:text-[#ff5200] ">
          <span className="border-b-2 border-gray-600 cursor-pointer  font-medium hover:border-[#ff5200]">others </span>
          <RiArrowDropDownLine className="inline text-[#ff5200] text-[40px] cursor-pointer"/>
        </div>
      <nav className="hidden md:flex list-none gap-10  ml-auto text-[18px]">
       {
        links.map((item,idx)=>{
            return <li key={idx} className=" flex items-center gap-2 cursor-pointer hover:text-[#ff5200]">
            {item.icon}
            <span>{item.name} <sup className="text-[#ee9d77]">{item.sup}</sup> </span>
            </li>
        })
       }
      </nav>
      </div>
    </header>
   </>
  )
}

export default Header
