import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"



function App() {
 
  return (
    <>
    {/* <h2 className="bg-[#1E2832] text-['Roboto','sans-serif']">Hello boitenge</h2> */}
     
     
   <Navbar/>
     <Outlet/> 
    </>
  )
}

export default App
