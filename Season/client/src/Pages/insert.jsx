import { useState } from "react";
import axios from "axios";
const Insert = ()=>{
    const [input,setInput] = useState({});
    const [image,setImage] = useState("");
    const handleInput =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)
    }
   
 const handleImage =(e)=>{
       
       setImage(e.target.files[0])
       console.log(image)

 }


//  MULTER WAY OF ULOADING AND IMAGE INTO LOCAL STORAGE

 const handleSubmit=async(e)=>{
    e.preventDefault();
       
    //     formData.append('file',image); // key value pair me Data jaata h
    //     formData.append('upload_preset', 'AaradhyaPhotos');
    //     formData.append('cloud_name','dazinmkxg');
        
    //     const response = await axios.post(' https://api.cloudinary.com/v1_1/dazinmkxg/image/upload',formData)
    //     console.log(response.data.url)

        let api = "http://localhost:9000/employee/save";
        const formData = new FormData(); // constructor made by Javasript 
        formData.append("empno",input.empno);
        formData.append("name",input.name)
        formData.append("designation",input.designation);
        formData.append("salary",input.salary);
        formData.append("image",image);

    //     let response1 = await axios.post(api,{...input,imgname:response.data.url})
    //     console.log(response1)

      const response = await axios.post(api,formData);
      console.log(response.data)


 }

    return(
        <>
        <h1>Welcome to Insert page</h1>
        Enter Employee no : <input type="text" name="empno" onChange={handleInput} /><br />
        Enter Employee Name : <input type="text" name="name" onChange={handleInput} /><br />
        Enter Employee Designation : <input type="text" name="designation" onChange={handleInput} /><br />
        Enter Employee Salary : <input type="text"  name="salary" onChange={handleInput} /><br />
        Upload Images : <input type="file" onChange={handleImage}  /> <br />
        <button onClick={handleSubmit}>Save</button>


        </>
    )
}
export default Insert;