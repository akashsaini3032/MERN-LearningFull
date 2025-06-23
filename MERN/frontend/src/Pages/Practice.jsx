

import { useState,useEffect } from "react";

import BackendUrl from "../Config/BackendUrl";

import axios from "axios";

import Table from "react-bootstrap/esm/Table";


const Display=()=>{
    const [mydata, setMyData]=useState([]);


    const loadData=async()=>{
        let api=`${BackendUrl}display`;

        const response=await axios.get(api);
        console.log(response.data);
        setMyData(response.data);
    }
}