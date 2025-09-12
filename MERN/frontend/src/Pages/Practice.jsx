import { useEffect, useState } from "react";
import BackendUrl from "../Config/BackendUrl";



const Edit=()=>{

    const {id}=useParams();
    const [mydata, setMyData]=useState({});

    const loadData=async()=>{

        let api=`${BackendUrl}editdatashow/?id=${id}`;

        const response=await axios.get(api);
        console.log(response.data);
        setMyData(response.data);
    }


    useEffect(()=>{
        loadData();
    },[])


    const handleInput=(e)=>{
        let name=e.target.name; 
        let value=e.target.value;

        setMyData(values=>({...values,[name]:value}))
        console.log(mydata);
    }

    const handleSubmit=async()=>{

        let api=`${BackendUrl}editdatasave`
        const response=await axios.put(api,mydata);
        alert(response.data.msg);
    }
}