// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import BackEndUrl from '../backendUrlConfig/BackendUrl';
// import axios from "axios";



// const Home =()=>{
//   const [adminid, setAdminid]=useState("");
//   const [password, setPassword]= useState("");


//   const handleSubmit =async (e)=>{
//     e.preventDefault()
//     let api = `${BackEndUrl}/admin/logincheck`;
//     const response = await axios.post(api, {adminid:adminid, password:password});
//     console.log(response);
    
//   }
//     return(
//         <>
        
//         <h2 id='adminwrite'>Adimin Login Form</h2>
//           <Form id='homeform'>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter ID</Form.Label>
//         <Form.Control type="text" value={adminid} onChange={(e)=>{setAdminid(e.target.value)}} placeholder="Enter id" />
       
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
//       </Form.Group>
     
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         LOGIN!!!!
//       </Button>
//     </Form>
        
//         </>
//     )
// }

// export default Home;


// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import BackEndUrl from '../backendUrlConfig/BackendUrl';
// import axios from "axios";


// const Home = () => {
//   const [adminid, setAdminid] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     //  Comment out API call if not needed
//     // let api = `${BackEndUrl}/admin/logincheck`;
//     // try {
//     //   const response = await axios.post(api, {
//     //     adminid: adminid,
//     //     password: password
//     //   });

//     // Always navigate no matter what
//     navigate("/dashboard");

//     // } catch (error) {
//     //   console.error(error);
//     // }
//   };

//   return (
//     <>
//       <h2 id='adminwrite'>Admin Login Form</h2>
//       <Form id='homeform'>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Enter ID</Form.Label>
//           <Form.Control
//             type="text"
//             value={adminid}
//             onChange={(e) => setAdminid(e.target.value)}
//             placeholder="Enter ID"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit" onClick={handleSubmit}>
//           LOGIN!!!! ADMIN
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default Home;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import { FiUser, FiLock } from 'react-icons/fi';

const Home = () => {
  const [adminid, setAdminid] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form-panel">
          <span className="close-btn">&times;</span>
          <h2>Admin Login</h2>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <FiUser className="input-icon" />
              <input
                type="text"
                placeholder="Username or email"
                value={adminid}
                onChange={(e) => setAdminid(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <FiLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁
              </span>
            </div>

            <div className="form-options">
              <label><input type="checkbox" /> Remember me</label>
              <button type="submit" className="login-btn">Login</button>
            </div>

            <div className="extra-options">
              <a href="#">Register now</a>
              <a href="#">Forgot password?</a>
            </div>

            <div className="divider"><span>or</span></div>

            <div className="social-login">
              <button className="facebook"><FaFacebookF /> LOGIN WITH FACEBOOK</button>
              <button className="twitter"><FaTwitter /> LOGIN WITH TWITTER</button>
              <button className="google"><FaGoogle /> LOGIN WITH GOOGLE</button>
            </div>
          </form>
        </div>

        <div className="login-image-panel">
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
            alt="login-bg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
