

import Form from 'react-bootstrap/Form';


import { FaRegUserCircle } from "react-icons/fa";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Header = ()=>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
        <div id="header">
            <h1> MERN Task Management System</h1>
            <FaRegUserCircle onClick={handleShow} />

        </div>


         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>


           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
     
      <Button variant="primary" type="submit">
       Login
      </Button>
    </Form>

        </Modal.Body>
       
      </Modal>
        
        
        </>
    )
}
export default Header;





