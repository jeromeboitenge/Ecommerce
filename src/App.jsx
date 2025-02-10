import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"



function App() {
 
  return (
    <>
    {/* <h2 className="bg-[#1E2832] text-['Roboto','sans-serif']">Hello boitenge</h2> */}
     
     
   <Navbar/>
     <Outlet/> 
     <Footer/>
    </>
  )
}

export default App
