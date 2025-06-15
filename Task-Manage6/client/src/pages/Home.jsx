import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../config/BackendUrl';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Home=()=>{
    const [adminid, setAdminid]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            let api=`${BackEndUrl}/admin/logincheck`;
           const response = await axios.post(api, {adminid:adminid, password:password});
           console.log(response);
           localStorage.setItem("adminuser", response.data.admin.name);
           navigate("admindashboard");
        } catch (error) {
          alert(error.response.data.msg);
        }

       
    }

    return(
        <>
          
          <h2 align="center">Admin Login Form</h2>
           <Form style={{width:"400px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter ID</Form.Label>
        <Form.Control type="text" value={adminid} onChange={(e)=>{setAdminid(e.target.value)}} placeholder="Enter ID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
        </>
    )
}

export default Home;