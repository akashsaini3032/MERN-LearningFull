import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios"
const Signup = () => {
  const [input, setInput] = useState({})
  const handleInput = async (e) => {
    let name = e.target.name
    let value = e.target.value
    setInput(values => ({ ...values, [name]: value }))
    console.log(input)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let api = "http://localhost:8000/user/usersave"
    try {
      const response = await axios.post(api, input)
      console.log(response.data)
     
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
          <Form.Label>Enter username</Form.Label>
          <Form.Control type="text" placeholder="Enter full username" name='username' value={input.username} onChange={handleInput} />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email id" name='email' value={input.email} onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Lastname</Form.Label>
          <Form.Control type="text" placeholder="Lastname" name='lastname' value={input.lastname} onChange={handleInput} />
        </Form.Group>


        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  )
}
export default Signup