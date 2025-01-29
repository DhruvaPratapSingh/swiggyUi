import { data1,rest,restaurants } from "../constants/footerdata"
import SwiggyImg from "./SwiggyImg"

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto mt-10">
      <div>
      <h1 className="font-bold text-[30px] mx-auto mb-5">Best Places to Eat Across Cities</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 mb-16">
      {data1.map((item,idx)=>{
        return <span className="text-wrap flex items-center justify-center border border-gray-400  rounded-2xl w-[100%] h-14 text-center font-medium text-[15px] cursor-pointer" key={idx}>{item}</span>
      })}
    </div>
      </div>
      <div>
      <h1 className="font-bold text-[30px] mx-auto mb-5">Best Cuisines Near Me</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 mb-16">
      {restaurants.map((item,idx)=>{
        return <span className="cursor-pointer text-wrap flex items-center justify-center border border-gray-400  rounded-2xl w-[100%] h-14 text-center font-medium text-[15px] " key={idx}>{item.name}</span>
      })}
    </div>
      </div>
      <div>
      <h1 className="font-bold text-[30px] mx-auto mb-5">
      Explore Every Restaurants Near Me</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 mb-16">
      {rest.map((item,idx)=>{
        return <span className="cursor-pointer text-wrap flex items-center justify-center border border-gray-400  rounded-2xl w-[100%] h-14 text-center font-medium text-[15px] " key={idx}>{item.name}</span>
      })}
    </div>
      </div>
      <footer className="w-[100%] h-[600px] bg-slate-200">
      <div className="flex justify-start items-center gap-5 m-6 border border-green-500 h-[20%]">
        <h1 className="font-bold text-[20px] text-wrap items-center" >For better experience,download the Swiggy app now</h1>
        <button className="w-24 h-16 bg-slate-400 rounded-xl">Google Play</button>
        <button className="w-24 h-16 bg-slate-400 rounded-xl">App Store</button>
      </div>
      <div className="flex bg-green-300 w-full h-[80%]">
        <div className="bg-yellow-100 w-[30%] flex justify-center items-center flex-col">
       <div className="w-full flex justify-center items-center ">
       <img className="w-[100px] h-14"src="/slogo.png" alt="Logo" />
       <span className="text-orange-500 font-bold text-[20px] -ml-6">swiggy</span>
       </div>
       <span>© 2025 Swiggy Limited</span>
        </div>
        <div className="bg-red-100 w-[70%]"></div>
      </div>
      </footer>
    </footer>
  )
}

export default Footer
