import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let api = "http://localhost:8000/usr/login"
    try {
      const response = await axios.post(api, { email, password })
      console.log(response.data)
      localStorage.setItem("Token", response.data.Token)
      navigate("/")
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h4>User Login</h4>
      <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email id" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Strong Password" />

        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

    </>
  )
}
export default Login