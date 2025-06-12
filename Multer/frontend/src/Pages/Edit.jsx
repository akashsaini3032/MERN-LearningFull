// import {useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// import BackendUrl from "../Config/BackendUrl";

// import axios from "axios";


// const Edit=()=>{

//     const {id}= useParams();
//     const [mydata, setMyData]= useState({});
//       const [uploadimg, setUploadimg] = useState("")
      

//     const loadData=async()=>{


//         let api=`${BackendUrl}edit/?id=${id}`;

//         const response= await axios.get(api);
//         console.log(response.data);
//         setMyData(response.data);
//     }


//     useEffect(()=>{
//         loadData();
//     }, [])

//   const handleImg = (e) => {
//         console.log(e.target.files[0])
//         setUploadimg(e.target.files[0])
//         console.log(uploadimg)
//     }
//     const handleInput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setMyData(values=>({...values,[name]:value}))
//         console.log(mydata);
//     }

//     // const handleSubmit=async()=>{

//     //     let api=`${BackendUrl}editdatasave`;
//     //     const response= await axios.put(api,{...mydata,img:uploadimg});
//     //     alert(response.data.msg);


//     // }
//      const handleSubmit = async (e) => {
//         e.preventDefault()
//         const formData = new FormData()
//         formData.append('file', uploadimg)
//         formData.append('upload_preset', 'rajeshSir')
//         formData.append('cloud_name', 'dlmqodsiq')
//         const response = await axios.put("https://api.cloudinary.com/v1_1/dlmqodsiq/image/upload",formData)
//         // console.log(response)
//         let api=`${BackendUrl}editdatasave`
//         console.log(response.data.url)
//         const response1=await axios.put(api,{...mydata,img:response.data.url})
//     }


//     return(

//         <>
//         <h1>Edit Data: {id}</h1>

//         Edit Rollno <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput}/>
//         <br />
//         Edit Name <input type="text" name="name" value={mydata.name} onChange={handleInput}/>
//         <br />
//         Edit City <input type="text" name="city" value={mydata.city} onChange={handleInput}/>
//         <br />
//         Edit Fees <input type="text" name="fees" value={mydata.fees} onChange={handleInput}/>
//         <br />
//         Edit Img <input type="file"   onChange={handleImg}/>
//         <button onClick={handleSubmit}>Edit save</button>
        
//         </>
//     )



// }


// export default Edit;



import {useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackendUrl from "../Config/BackendUrl";
import axios from "axios";


const Edit=()=>{

    const {id}= useParams();
    const [mydata, setMyData]= useState({});
      const [uploadimg, setUploadimg] = useState(null)
      

    const loadData=async()=>{


        let api=`${BackendUrl}edit/?id=${id}`;

        const response= await axios.get(api);
        console.log(response.data);
        setMyData(response.data);
    }


    useEffect(()=>{
        loadData();
    }, [])

  const handleImg = (e) => {
        console.log(e.target.files[0])
        setUploadimg(e.target.files[0])
        console.log(uploadimg)
    }
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMyData(values=>({...values,[name]:value}))
        console.log(mydata);
    }

    // const handleSubmit=async()=>{

    //     let api=`${BackendUrl}editdatasave`;
    //     const response= await axios.put(api,{...mydata,img:uploadimg});
    //     alert(response.data.msg);


    // }
     const handleSubmit = async (e) => {
        e.preventDefault()
        let imageUrl=mydata.image
        if(uploadimg){
  const formData = new FormData()
        formData.append('file', uploadimg)
        formData.append('upload_preset', 'rajeshSir')
        formData.append('cloud_name', 'dlmqodsiq')
        const response = await axios.post("https://api.cloudinary.com/v1_1/dlmqodsiq/image/upload",formData)
        // console.log(response)
        imageUrl=response.data.url
        }
        
      
        let api=`${BackendUrl}editdatasave`
        const response1=await axios.put(api,{...mydata,image:imageUrl})   
        console.log(response1.data) 
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
        Edit Img <img src={mydata.image} height={70} width={100}/><input type="file"   onChange={handleImg}/>
        <button onClick={handleSubmit}>Edit save</button>
        
        </>
    )



}


export default Edit;