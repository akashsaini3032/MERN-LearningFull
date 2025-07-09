// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import BackEndUrl from '../config/BackEndUrl';
// import axios from 'axios';
// const Registration=()=>{
//     const [input, setInput] = useState({});

//     const handleInput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setInput(values=>({...values, [name]:value}));
//        console.log(input);         
//     }


//    const handleSubmit=async(e)=>{
//       e.preventDefault();
//        let api=`${BackEndUrl}/user/registration`;
//        const response = await axios.post(api, input);
//       console.log(response.data);
//       alert("You are Succesfully Registered!!");
//    }

//     return(
//         <>
          
//             <Form style={{width:"300px", margin:"auto"}}>
//              <h1> User Register </h1>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Name</Form.Label>
//         <Form.Control type="text" name="name" onChange={handleInput} />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter City</Form.Label>
//         <Form.Control type="text" name="city" onChange={handleInput}  />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Address</Form.Label>
//         <Form.Control type="text" name="address" onChange={handleInput}  />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Pin code</Form.Label>
//         <Form.Control type="number" name='pincode' onChange={handleInput}  />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Email</Form.Label>
//         <Form.Control type="email" name='email' onChange={handleInput}  />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Password</Form.Label>
//         <Form.Control type="password" name="password" onChange={handleInput}  />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit!
//       </Button>
//     </Form>      
//         </>
//     )
// }

// export default Registration;



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './userSlice'; // ✅ Make sure path is correct
import axios from 'axios';
import BackEndUrl from '../config/BackEndUrl';

const Registration = () => {
  const [input, setInput] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const api = `${BackEndUrl}/user/registration`;
      const res = await axios.post(api, input);

      if (res.data.token) {
        // Save JWT
        localStorage.setItem('token', res.data.token);

        // Dispatch user to Redux
        dispatch(loginSuccess(res.data.user));

        alert('Registration successful!');
        navigate('/');
      } else {
        setErrorMsg(res.data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error(error);
      setErrorMsg('Something went wrong during registration.');
    }
  };

  return (
    <>
      <Form style={{ width: '300px', margin: 'auto' }} onSubmit={handleSubmit}>
        <h1>User Register</h1>

        {errorMsg && (
          <p style={{ color: 'red', fontWeight: 'bold' }}>{errorMsg}</p>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleInput} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter City</Form.Label>
          <Form.Control type="text" name="city" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control type="text" name="address" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Pin Code</Form.Label>
          <Form.Control type="number" name="pincode" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleInput} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" name="password" onChange={handleInput} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit!
        </Button>
      </Form>
    </>
  );
};

export default Registration;
