import { ADD_TOKEN, DELETE_TOKEN } from "./auth.types"

export const Login =(token)=>(distpatch)=>{

    distpatch({type:ADD_TOKEN,payload:token})

}


export const Logout =()=>(distpatch)=>{

    distpatch({type:DELETE_TOKEN})

}