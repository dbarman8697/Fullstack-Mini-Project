import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import Admin from "../pages/Admin";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export default function Allroutes(){


    return <Routes>
        <Route path="/" element={<PrivateRoute><HomePage></HomePage></PrivateRoute>}></Route>
        <Route path="/about" element={<PrivateRoute><AboutPage></AboutPage></PrivateRoute>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path="/admin" element={<AdminRoute><Admin></Admin></AdminRoute>}></Route>

    </Routes>
}