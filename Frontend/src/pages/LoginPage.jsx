import { Box, Button, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../redux/auth.actions";
import "./style.css"

export default function LoginPage(){

    let [username,setUsername]=useState("")
    let [password,setPassword]=useState("")
    let nav = useNavigate()
     const {auth,token,role,username:user} = useSelector((state)=>state)
    const distpatch = useDispatch()
    // console.log(auth,token,role,user)

    if(auth){
        nav("/")
        return
    }
    
    
    return <Box mt="60px">


<Flex gap={6} alignItems={"center"} direction={"column"} w="40%" m="auto">
        <Input value={username} placeholder="username" onChange={(e)=>setUsername(e.target.value)}></Input>
        
        <Input type={"password"} value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}></Input>
       
        <Button onClick={async()=>{


            let user = {
                username:username,
                password:password,
              
            }

            let data = await axios.post("http://localhost:4000/user/login",user)
            if(data.data.message=="Login successful"){
            
                distpatch(Login({
                   token:data.data.token,
                   username:data.data.userDetails.username,
                   role:data.data.userDetails.role
                }))
            }else{
                alert(data.data.message)
            }

            console.log(data)


        }}>Login</Button>
        </Flex>

       

    </Box>
}