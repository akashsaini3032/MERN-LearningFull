// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Children, useState } from 'react';
// import axios from "axios"
// import BackendUrl from "../Config/BackendUrl"

// const Insert = () => {
//     const [input, setInput] = useState([])
//     const [uploadImage, setUploadImage]=useState("");
//     const handleInput = async (e) => {
//         let name = e.target.name
//         let value = e.target.value
//         setInput(values => ({ ...values, [name]: value }))
//         console.log(input)
//     }


//     const handleImage=(e)=>{

        
//         setUploadImage(e.target.files[0]);
//         console.log(uploadImage);

//     }

//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         const formData=new FormData();
//         formData.append('file',uploadImage);
//         formData.append('upload_preset','AkashSaini');
//         formData.append('cloud_name','dlyyumwhi');

//         const response= await axios.post('https://api.cloudinary.com/v1_1/dlyyumwhi/image/upload',formData);
//         console.log(response.data.url);
//         // Insert.jsx


//         let api=`${BackendUrl}/save`;
//         const response1=await axios.post(api,{...input,imgname:response.data.url})
//         console.log(response1);
        
//     }
//     // const handleSubmit = async (e) => {
//     //     e.preventDefault()
//     //     let api = `${BackendUrl}save`
//     //     const response = await axios.post(api, input)
//     //     console.log(response)
//     //     alert(response.data.msg)
//     // }
//     return (
//         <>
//             <div className='myForm'>
//                 <Form>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Enter Roll NO. :</Form.Label>
//                         <Form.Control type="text" name='rollno' onChange={handleInput} />

//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Enter Name :</Form.Label>
//                         <Form.Control type="text" name='name' onChange={handleInput} />

//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Enter City :</Form.Label>
//                         <Form.Control type="text" name='city' onChange={handleInput} />

//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Enter Fees :</Form.Label>
//                         <Form.Control type="text" name='fees' onChange={handleInput} />

//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Upload Images :</Form.Label>
//                         <Form.Control type="file"  onChange={handleImage} />

//                     </Form.Group>


//                     {/* <Button variant="primary" type="submit" onClick={handleSubmit}>
//                         Submit
//                     </Button> */}
//                     <Button variant="primary" type="submit" onClick={handleSubmit} >
//                         Submit
//                     </Button>
//                 </Form>
//             </div>
//         </>
//     )
// }
// export default Insert






import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Children, useState } from 'react';
import axios from "axios"
import BackendUrl from "../Config/BackendUrl"

const Insert = () => {
    const [input, setInput] = useState([])
    const [uploadimg, setUploadimg] = useState("")
    const handleInput = async (e) => {
        let name = e.target.name
        let value = e.target.value
        setInput(values => ({ ...values, [name]: value }))
        console.log(input)
    }
    const handleImg = (e) => {
        console.log(e.target.files[0])
        setUploadimg(e.target.files[0])
        console.log(uploadimg)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', uploadimg)
        formData.append('upload_preset', 'AkashSaini')
        formData.append('cloud_name', 'dlyyumwhi')
        const response = await axios.post("https://api.cloudinary.com/v1_1/dlyyumwhi/image/upload",formData)
        // console.log(response)
        let api=`${BackendUrl}save`
        console.log(response.data.url)
        const response1=await axios.post(api,{...input,img:response.data.url})
    }
 return (
        <>
            <div className='myForm'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Roll NO. :</Form.Label>
                        <Form.Control type="text" name='rollno' onChange={handleInput} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Name :</Form.Label>
                        <Form.Control type="text" name='name' onChange={handleInput} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter City :</Form.Label>
                        <Form.Control type="text" name='city' onChange={handleInput} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Fees :</Form.Label>
                        <Form.Control type="text" name='fees' onChange={handleInput} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>upload image :</Form.Label>
                        <Form.Control type="file" onChange={handleImg} />

                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}
export default Insert
