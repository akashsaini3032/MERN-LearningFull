import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";


const EditData = ()=>{
    // const [update,setUpdate] = useState([]);4
    const [myData,setmyData] = useState([]);
    const [image,setImage] = useState("");
    const {id} = useParams();
    const loadData = async()=>{
    let api = `http://localhost:9000/employee/editdataDisplay?id=${id}`
    const response = await axios.get(api);
    setmyData(response.data)
    }
    useEffect(()=>{
        loadData();
    },[])
    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setmyData(values=>({...values,[name]:value}))
        
    }
    const handleImage =(e)=>{
       
        setImage(e.target.files[0])
        console.log(image)
 
  }
 
  const handleSubmit=async(e)=>{
     e.preventDefault();
         const formData = new FormData(); // constructor made by Javasript 
         formData.append('file',image); // key value pair me Data jaata h
         formData.append('upload_preset', 'AaradhyaPhotos');
         formData.append('cloud_name','dazinmkxg');
         
         const response = await axios.post(' https://api.cloudinary.com/v1_1/dazinmkxg/image/upload',formData)
         console.log(response.data.url)
 
         let api = "http://localhost:9000/employee/editSave";
         let response1 = await axios.post(api,{...myData,imgname:response.data.url})
         console.log(response1)
  }



    return(
        <>
        <h1>Edit Data : </h1>
        Enter Employee Number : <input type="text" value={myData.empno} onChange={handleInput} name="empno"  /> <br/>
        Enter Employee Name : <input type="text" value={myData.name} onChange={handleInput} name="name"    /> <br />
        Enter Employee Designation : <input type="text" value={myData.designation} onChange={handleInput} name="designation"   /> <br />
        Enter Employee Salary : <input type="text" value={myData.salary} onChange={handleInput} name="salary"    /> <br />
        Images : <input type="file" onChange={handleImage}  /> <br />
        <button onClick={handleSubmit}>Save Changes</button>
        
        </>
    )
}

export default EditData;