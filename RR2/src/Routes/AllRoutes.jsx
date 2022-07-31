import { Route, Routes } from "react-router-dom";
import Edit from "../EditPage/Edit";
import ViewMore from "../EditPage/ViewMore";

import Home from "../Home/Home";
import LogIn from "../LogIn&OutPage/LogIn";
import LogOut from "../LogIn&OutPage/LogOutPage";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={<PrivateRoute> <Home/> </PrivateRoute>}/>
            <Route path="/LogIn" element={<LogIn/>}/>
            <Route path="/home/:id" element={<ViewMore/>}/>
            <Route path="/home/:id/edit" element={<Edit/>} />
            <Route path="/logOut" element={<LogOut/>} />
        </Routes>
    )
}