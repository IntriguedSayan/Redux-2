import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import LogIn from "../LogInPage/LogIn";

export default function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/LogIn" element={<LogIn/>}/>
        </Routes>
    )
}