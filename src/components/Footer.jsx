import { data1, rest, restaurants } from "../constants/footerdata";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <footer className="max-w-[1200px] mx-auto mt-10">
      <div>
        <h1 className="font-bold text-[30px] mx-auto mb-5">
          Best Places to Eat Across Cities
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 mb-16">
          {data1.map((item, idx) => {
            return (
              <span
                className="text-wrap flex items-center justify-center border border-gray-400  rounded-2xl w-[100%] h-14 text-center font-medium text-[15px] cursor-pointer"
                key={idx}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-[30px] mx-auto mb-5">
          Best Cuisines Near Me
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 mb-16">
          {restaurants.map((item, idx) => {
            return (
              <span
                className="cursor-pointer text-wrap flex items-center justify-center border border-gray-400  rounded-2xl w-[100%] h-14 text-center font-medium text-[15px] "
                key={idx}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-[30px] mx-auto mb-5">
          Explore Every Restaurants Near Me
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 mb-16">
          {rest.map((item, idx) => {
            return (
              <span
                className="cursor-pointer text-wrap flex items-center justify-center border border-gray-400  rounded-2xl w-[100%] h-14 text-center font-medium text-[15px] "
                key={idx}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
    </footer>
    <footer className="w-[100%] h-full bg-slate-200">
    <div className="max-w-[1200px] mx-auto mt-10 py-5 border-t-[1px] border-black">
        <div className="grid grid-cols-1 text-center text-wrap md:flex justify-start items-center gap-5 m-6  h-[20%] ">
          <h1 className="font-bold text-[10px] md:text-[20px] text-wrap items-center">
            For better experience,download the Swiggy app now
          </h1>
          <button className="px-1 w-16 h-10 md:w-24 md:h-16 bg-slate-400 rounded-xl text-sm md:text-lg">
            Google Play
          </button>
          <button className=" px-1 w-16 h-10 md:w-24 md:h-16 bg-slate-400 rounded-xl text-sm md:text-lg">
            App Store
          </button>
        </div>
        <div className="grid grid-cols-1 text-center md:flex w-full">
          <div className=" w-[30%] flex justify-center items-center flex-col ">
            <div className="w-full flex justify-center items-center ">
              <img className="w-[100px] h-14" src="/slogo.png" alt="Logo" />
              <span className="text-orange-500 font-bold text-[20px] -ml-6">
                swiggy
              </span>
            </div>
            <span>© 2025 Swiggy Limited</span>
          </div>
          <div className="text-gray-600 mt-10 p-3 w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-normal ">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-lg text-black">Company</h1>
              <span className="cursor-pointer">About Us</span>
              <span className="cursor-pointer">Swiggy Corporate</span>
              <span className="cursor-pointer">Careers</span>
              <span className="cursor-pointer">Team</span>
              <span className="cursor-pointer">Swiggy One</span>
              <span className="cursor-pointer">Swiggy Instamart</span>
              <span className="cursor-pointer">Swiggy Dineout</span>
              <span className="cursor-pointer">Swiggy Genie</span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-lg text-black">Contact us</h1>
              <span className="cursor-pointer">Help & Support</span>
              <span className="cursor-pointer">Partner with us</span>
              <span className="cursor-pointer">Ride with us</span>
              <h1 className="font-semibold text-lg text-black mt-16">Legal</h1>
              <span className="cursor-pointer">Terms & Conditions</span>
              <span className="cursor-pointer">Cookie Policy</span>
              <span className="cursor-pointer">Privacy Policy</span>
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="font-semibold text-lg text-black">Available in</h1>
              <span className="cursor-pointer" >Bangalore</span>
              <span className="cursor-pointer">Gurgaon</span>
              <span className="cursor-pointer" >Hyderabad</span>
              <span className="cursor-pointer" >Delhi</span>
              <span className="cursor-pointer" >Mumbai</span>
              <span className="cursor-pointer">Pune</span>
              <button className="w-[120px] rounded-xl border border-gray-600 px-2 py-1 flex justify-start items-center flex-wrap gap-1">679 cities<RiArrowDropDownLine className="text-[30px] font-medium"/></button>

            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="font-semibold text-lg text-black">Life in swiggy</h1>
              <span className="cursor-pointer">Explore with Swiggy</span>
              <span className="cursor-pointer">Swiggy News</span>
              <span className="cursor-pointer">Snackables</span>
              <h1 className="font-semibold text-lg text-black mt-16">Social Links</h1>
              <ul className="flex items-center justify-center gap-3 font-medium text-[18px] text-wrap mx-auto">
                <li className="cursor-pointer"><FaLinkedin /></li>
                <li className="cursor-pointer"><FaSquareInstagram /></li>
                <li className="cursor-pointer"><FaFacebookF /></li>
                <li className="cursor-pointer"><FaPinterest /></li>
                <li className="cursor-pointer"><FaTwitter /></li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </footer>
      </>
  );
};

export default Footer;
