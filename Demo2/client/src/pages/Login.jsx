// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';

// const Login=()=>{
//     const navigate=useNavigate();
//     return(
//         <>
         
//            <Form style={{width:"300px", margin:"auto"}}>
//              <h1> User Login</h1>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password"/>
//       </Form.Group>
//       If you Don't have Account  
//       <span style={{cursor:"pointer", color:"blue", fontWeight:"bold"}} onClick={()=>{navigate("/registration")}}> SignUp </span> now
//       <Button variant="primary" type="submit">
//         Submit!!
//       </Button>
//     </Form>
//         </>
//     )
// }

// export default Login;


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './userSlice'; // Make sure this path matches your project

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token to localStorage
        localStorage.setItem('token', data.token);

        // Dispatch to Redux
        dispatch(loginSuccess(data.user));

        // Redirect
        navigate('/');
      } else {
        setErrorMsg(data.message || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      setErrorMsg('Something went wrong');
    }
  };

  return (
    <Form style={{ width: '300px', margin: 'auto' }} onSubmit={handleLogin}>
      <h1>User Login</h1>

      {errorMsg && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>{errorMsg}</p>
      )}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <p>
        If you don't have an account,{' '}
        <span
          style={{ cursor: 'pointer', color: 'blue', fontWeight: 'bold' }}
          onClick={() => navigate('/registration')}
        >
          Sign up
        </span>{' '}
        now
      </p>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
