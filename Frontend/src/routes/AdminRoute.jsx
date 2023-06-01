import { useSelector } from "react-redux";
import Admin from "../pages/Admin";
import HomePage from "../pages/HomePage";

export default function AdminRoute({children}){

    const {role} = useSelector((state)=>state)

    if(role!="admin"){
        return <HomePage></HomePage>
    }

    return <Admin></Admin>
}