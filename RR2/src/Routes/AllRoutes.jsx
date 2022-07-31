import { Route, Routes } from "react-router-dom";
import Edit from "../EditPage/Edit";
import ViewMore from "../EditPage/ViewMore";

import Home from "../Home/Home";
import LogIn from "../LogInPage/LogIn";

export default function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/LogIn" element={<LogIn/>}/>
            <Route path="/home/:id" element={<ViewMore/>}/>
            <Route path="/home/:id/edit" element={<Edit/>} />
        </Routes>
    )
}