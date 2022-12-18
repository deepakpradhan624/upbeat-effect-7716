import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import Products from "../Pages/Products"
import About from "../Pages/About"

function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/about" element={<About/>}/>


            </Routes>
        </div>
    )
}
export default AllRoutes