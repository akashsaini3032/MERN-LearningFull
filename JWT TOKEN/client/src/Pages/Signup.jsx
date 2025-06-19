import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [input, setInput] = useState({})
  const navigate=useNavigate()
  const handleInput = async (e) => {
    let name = e.target.name
    let value = e.target.value
    setInput(values => ({ ...values, [name]: value }))
    console.log(input)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let api = "http://localhost:8000/usr/signup"
    try {
      const response = await axios.post(api, input)
      console.log(response.data)
      navigate("/")
     
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <h4>User Registration</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter name</Form.Label>
          <Form.Control type="text" placeholder="Enter full name" name='name' value={input.name} onChange={handleInput} />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email id" name='email' value={input.email} onChange={handleInput} />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" placeholder="Strong Password" name='password' value={input.password} onChange={handleInput} />

        </Form.Group>


        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  )
}
export default Signup