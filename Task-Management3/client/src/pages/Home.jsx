// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import BackEndUrl from '../config/BackendUrl';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';


// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Home=()=>{
//     const [adminid, setAdminid]= useState("");
//     const [password, setPassword]= useState("");
//     const navigate = useNavigate();

//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         try {
//             let api=`${BackEndUrl}/admin/logincheck`;
//            const response = await axios.post(api, {adminid:adminid, password:password});
//            console.log(response);
//            localStorage.setItem("adminuser", response.data.admin.name);
//            navigate("admindashboard");
//         } catch (error) {
//           // alert(error.response.data.msg);
//           toast.error(error.response.data.msg, {
//   position: "top-right",      // Same position as success toast
//   autoClose: 3000,            // Optional: Close automatically in 3 sec
//   hideProgressBar: false,     
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "colored",           // "colored", "dark", or "light"
// });

          
//         }

   
//     }

//     return(
//         <>
          
//           <h2 align="center">Admin Login Form</h2>
//            <Form style={{width:"400px", margin:"auto"}}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter ID</Form.Label>
//         <Form.Control type="text" value={adminid} onChange={(e)=>{setAdminid(e.target.value)}} placeholder="Enter ID" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
//       </Form.Group>
     
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Login
//       </Button>
//     </Form>

//      <ToastContainer />
//         </>
//     )
// }

// export default Home;



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../config/BackendUrl';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  const [adminid, setAdminid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = `${BackEndUrl}/admin/logincheck`;
      const response = await axios.post(api, { adminid: adminid, password: password });
      console.log(response);
      localStorage.setItem("adminuser", response.data.admin.name);
      navigate("admindashboard");
    } catch (error) {
      toast.error(error.response.data.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form-section">
          <span className="close-btn">×</span>
          <h2 align="center">Admin Login Form</h2>
          <Form className="custom-form">
            <Form.Group className="mb-3 input-icon" controlId="formBasicEmail">
              <span className="emoji-icon">👤</span>
              <Form.Control
                type="text"
                value={adminid}
                onChange={(e) => setAdminid(e.target.value)}
                placeholder="Username or Email"
              />
            </Form.Group>

            <Form.Group className="mb-3 input-icon" controlId="formBasicPassword">
              <span className="emoji-icon">🔒</span>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>

            <div className="options-row">
              <Form.Check type="checkbox" label="Remember me" />
              <a href="#">Forgot password?</a>
            </div>

            <Button variant="primary" type="submit" onClick={handleSubmit} className="login-btn">
              LOGIN
            </Button>

            <div className="register-link">
              <a href="#">Register now</a>
            </div>

            <div className="divider">or</div>

            <div className="social-login">
              <button className="facebook">📘 Login with Facebook</button>
              <button className="twitter">🐦 Login with Twitter</button>
              <button className="google">🟥 Login with Google</button>
            </div>
          </Form>
        </div>

        <div className="login-image-section">
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
            alt="Background"
          />
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Home;
