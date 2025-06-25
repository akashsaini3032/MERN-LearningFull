
import { useParams } from "react-router-dom";
import { useState } from "react";

import BackendUrl from "../Config/BackendUrl";

import axios from "axios";


import { useState } from "react";
import axios from "axios";
import BackendUrl from "../Config/BackendUrl";


const Insert=()=>{
    const [input,setInput]=useState([])
    const handleInput=async(e)=>{
        let name=e.target.name 
        let value=e.target.value 
        setInput(values=>({...values,[name]:value}))
    }


    const handleSubmit=async(e)=>{
        e.preventDefault()
        let api=`${BackendUrl}save`
        const response=await axios.post(api,input)
        console.log(response)
        alert(response.data.msg)
    }
}