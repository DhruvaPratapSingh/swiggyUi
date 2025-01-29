import { data1,rest,restaurants } from "../constants/footerdata"

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto mt-10">
      <div>
      <h1 className="font-bold text-[30px] mx-auto mb-5">Best Places to Eat Across Cities</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 mb-16">
      {data1.map((item,idx)=>{
        return <span className="text-wrap flex items-center justify-center border border-gray-400  rounded-2xl w-[100%] h-14 text-center font-medium text-[15px] " key={idx}>{item}</span>
      })}
    </div>
      </div>
      <div>
      <h1 className="font-bold text-[30px] mx-auto mb-5">Best Cuisines Near Me</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 mb-16">
      {restaurants.map((item,idx)=>{
        return <span className="text-wrap flex items-center justify-center border border-gray-400  rounded-2xl w-[100%] h-14 text-center font-medium text-[15px] " key={idx}>{item.name}</span>
      })}
    </div>
      </div>
      <div>
      <h1 className="font-bold text-[30px] mx-auto mb-5">
      Explore Every Restaurants Near Me</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5 mb-16">
      {rest.map((item,idx)=>{
        return <span className="text-wrap flex items-center justify-center border border-gray-400  rounded-2xl w-[100%] h-14 text-center font-medium text-[15px] " key={idx}>{item.name}</span>
      })}
    </div>
      </div>
      <footer className="w-[100%] h-[600px] bg-slate-200">
      <div>
        <h1>For better experience,download the Swiggy app now</h1>
        <button>Google Play</button>
        <button>App Store</button>
      </div>
      </footer>
    </footer>
  )
}

export default Footer
