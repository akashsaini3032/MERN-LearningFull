import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
const Registration = () => {
    const [input , setInput]= useState({});


    const handleinput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setInput(values=>({...values , [name]: value}))
        console.log(input)

    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api = "http://localhost:8080/users/registration"
        try {
            const response = await axios.post(api,input)
            console.log(response.data);
        } catch (error) {
           console.log(error)  
        }
    }
  return (
    <>
      <h1>Welcome to registration page</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleinput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Contact</Form.Label>
          <Form.Control
            type="text"
            name="contact"
            placeholder="Enter Contact"
            onChange={handleinput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleinput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleinput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Registration;
