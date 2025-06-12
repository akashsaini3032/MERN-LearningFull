



import {useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import BackendUrl from "../Config/BackendUrl";

import axios from "axios";


const Edit=()=>{

    const {id}= useParams();
    const [mydata, setMyData]= useState({});


    const loadData=async()=>{


        let api=`${BackendUrl}editdatashow/?id=${id}`;

        const response= await axios.get(api);
        console.log(response.data);
        setMyData(response.data);
    }


    useEffect(()=>{
        loadData();
    }, [])


    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMyData(values=>({...values,[name]:value}))
        console.log(mydata);
    }

    const handleSubmit=async()=>{

        let api=`${BackendUrl}editdatasave`;
        const response= await axios.put(api, mydata);
        alert(response.data.msg);


    }


    return(

        <>
        <h1>Edit Data: {id}</h1>

        Edit Rollno <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput}/>
        <br />
        Edit Name <input type="text" name="name" value={mydata.name} onChange={handleInput}/>
        <br />
        Edit City <input type="text" name="city" value={mydata.city} onChange={handleInput}/>
        <br />
        Edit Fees <input type="text" name="fees" value={mydata.fees} onChange={handleInput}/>
        <br />
        <button onClick={handleSubmit}>Edit save</button>
        
        </>
    )



}


export default Edit;