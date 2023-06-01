import { useSelector } from "react-redux"
import LoginPage from "../pages/LoginPage"

export default function PrivateRoute({children}){
    const {auth,token,role,username:user} = useSelector((state)=>state)
    if(!auth){
        return <LoginPage></LoginPage>
        }
    return children
}