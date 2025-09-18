import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Registration=()=>{
    const [input, setInput] = useState({});
    const navigate=useNavigate();
     const handleInput=(e)=>{
          let name= e.target.name;
          let value=e.target.value;
          setInput(values=>({...values, [name]:value}));
          console.log(input);
     }
     const handleSubmit=async(e)=>{
        e.preventDefault();
          let api="http://localhost:8080/users/registration";
          try {
                const response = await axios.post(api, input);
                console.log(response);
                toast.success(response.data); 
                 navigate("/");
          } catch (error) {
              console.log(error);
          }
     }

    return(
        <>
         <div id='userform'>
          <h2> User Registration</h2>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} placeholder="Enter name" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter contact no</Form.Label>
        <Form.Control type="text"  name="contact" onChange={handleInput} placeholder="Enter contact" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name="email" onChange={handleInput} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name="password" onChange={handleInput} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
       Submit
      </Button>
    </Form>
        </div>
        <ToastContainer />
        </>
    )
}
export default Registration;