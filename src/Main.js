import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

export default (() =>{
    return(
        <div className="App">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
})