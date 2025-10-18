import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Registration=()=>{
    const [input, setInput] = useState({});
    const navigate = useNavigate();
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
       setInput(values=>({...values, [name]:value}));
       console.log(input);
    }
  const   handleSubmit=async(e)=>{
        e.preventDefault();
        let api="http://localhost:8000/user/registration";
        try {
            const response = await axios.post(api, input);
            console.log(response);
            navigate("/");
        } catch (error) {
             console.log(error);
        }
  }
    return(
        <>
        <h1> User Registration</h1>
          <Form style={{width:"400px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name="email" value={input.email} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter password</Form.Label>
        <Form.Control type="password" name="password" value={input.password} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Registration;