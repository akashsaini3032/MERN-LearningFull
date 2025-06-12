import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './Home.css';






const Home=()=>{
    const [email, setEmail] =useState("");
    const [password, setPassword]= useState("");
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
     
        let api = "http://localhost:8080/users/userlogin";
        try{
          const response= await axios.post(api, {email:email,
            password:password});
            toast.success(response.data.msg)
            console.log(response);
            localStorage.setItem("user",response.data.User.name);
            localStorage.setItem("email",response.data.User.email);
            navigate("/dashboard");
      

        }
        catch(error){
          toast.error(error.response.data.msg)
        }

    }
    
    return(
        <>
        <div id='userform'>
            <h2>User Login</h2>

            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login!!!!!!
      </Button>
    </Form>

       If you are not Registered yet! <a href="#" onClick={()=>{navigate("register")}}> Register Now</a>


        </div>
        <ToastContainer/>
        
        </>
    )
}
export default Home;