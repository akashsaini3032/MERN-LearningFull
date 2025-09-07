


import {useParams} from 

import {useState, useEffect} from "react";

import axios from "axios";


const Myedit=()=>{
    const {id}=useParams();
    const loadData=async()=>{
        const response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    },[]);

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setMydata(values=>({...values,[name]:value}));
        console.log(mydata);
    }

    const handleSubmit=async()=>{

        const response=await axios.put(api,mydata);
        
    }

}
