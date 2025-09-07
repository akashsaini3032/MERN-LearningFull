Edit

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
const MyEdit=()=>{
  const {id} = useParams();
   const [mydata, setMydata]=useState({});
   const loadData=async()=>{
    let api=`http://localhost:3000/employee/${id}`;
    const resposne = await axios.get(api);
    console.log(resposne.data);
    setMydata(resposne.data);
   }
   useEffect(()=>{
    loadData();
   }, []);
   const handleInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
      setMydata(values=>({...values, [name]:value}));
      console.log(mydata);
   }
   
   const handleSubmit=async()=>{
    let api=`http://localhost:3000/employee/${id}`;
    const response = await axios.put(api, mydata);
    toast.warning("Data succesfully Updated!", {
        position: "top-left"
      });
   }

    return(
        <>
          <h1> Edit Employee Data {id}</h1>  
          Edit Employee No : <input type="text" name="empno" value={mydata.empno} onChange={handleInput} />
          <br />
          Edit Name : <input type="text" name="name" value={mydata.name}
          onChange={handleInput} />
          <br />
          Edit Designation : <input type="text" name="designation" value={mydata.designation} onChange={handleInput} />
          <br />
          Edit Salary : <input type="text" name="salary" value={mydata.salary} onChange={handleInput} />
          <br />
          <button onClick={handleSubmit}> Edit Save!</button> 
          <ToastContainer />     
        </>

    )
}
export default MyEdit;