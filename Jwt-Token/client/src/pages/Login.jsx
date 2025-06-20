import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
  const handleSubmit=async(e)=>{
       e.preventDefault();
        let api="http://localhost:8000/user/login";
        try {
             const response = await axios.post(api, {email, password});
             console.log(response.data);
             localStorage.setItem("token", response.data.Token);
             navigate("/");
        } catch (error) {
            console.log(error);
        }
  }

  return(
        <>
          <h1> User Login</h1>
          <Form style={{width:"400px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Login;