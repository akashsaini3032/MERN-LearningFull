import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Children, useState } from 'react';
import axios from "axios"
import BackendUrl from "../Config/BackendUrl"

const Insert = () => {
    const [input, setInput] = useState([])
    const handleInput = async (e) => {
        let name = e.target.name
        let value = e.target.value
        setInput(values => ({ ...values, [name]: value }))
        console.log(input)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let api = `${BackendUrl}save`
        const response = await axios.post(api, input)
        console.log(response)
        alert(response.data.msg)
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


                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}
export default Insert