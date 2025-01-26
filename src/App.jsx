import Footer from "./components/Footer"
import Header from "./components/Header"
import InYourMind from "./components/InYourMind"
import Onlinestore from "./components/OnlineDil"
import ResData from "./components/ResData"

const App = () => {
  return (
    <div className="w-full">
    <Header/>
    <InYourMind/>
    <ResData/>
    <Onlinestore/>
    <Footer/>
    </div>
  )
}

export default App
