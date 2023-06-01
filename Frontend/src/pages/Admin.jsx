import { Box, Button, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Admin(){

    const {role} = useSelector((state)=>state)
    const [key,setKey] = useState("")
    const [value,setValue] = useState("")

    let [id,setId] = useState("")

    return <Box mt = "60px">
        <Flex direction={"column"} w="40%" m="auto" gap={6}>
        <Input value={id} placeholder="enter user id" onChange={(e)=>setId(e.target.value)}></Input>
        <select value={key} onChange={(e)=>setKey(e.target.value)}>
            <option value="">Select change</option>
            <option value="username">username</option>
            <option value="location">location</option>
            <option value="dob">dob</option>
            <option value="role">role</option>
            <option value="email">email</option>
            <option value="password">password</option>
        </select>
        <Input placeholder="Enter value" value={value} onChange={(e)=>setValue(e.target.value)}></Input>

        <Button onClick={async()=>{

            let data = await axios(`http://localhost:4000/user/${id}`,{
                method:"delete",
                headers:{
                    role:role
                }
            })

            alert(data.data.message)

        }}>Delete</Button>

        <Button onClick={async()=>{

            let obj={
                [key]:value
            }

            let data = await axios(`http://localhost:4000/user/${id}`,{
                method:"patch",
                data:obj,
                headers:{
                    role:role
                }
            })

            console.log(data.data.message)

        }}>Alter</Button>

        </Flex>

    </Box>
}