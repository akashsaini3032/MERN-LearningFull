


import { useNavigate } from "react-router-dom";

import { useState } from "react";


import axios from "axios";


const Registration=()=>{

  const [input,setInput]=useState({});


  const navigate=useNavigate();

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;


    setInput(values=>({...values,[name]:value}));
    console.log(input);
  }


  const handleSubmit=async(e)=>{
    e.preventDefault();


    let api="";

    try{
      const response=await axios.post(api,input);

      console.log(response);
      toast.sucess(response.data);
      navigate("/");
    }catch(error){
      console.log(error);
    }
  }

}
