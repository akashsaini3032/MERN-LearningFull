// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// const Home=()=>{
//   const navigate=useNavigate();
//   const userAuthentication=async()=>{
//      const token=localStorage.getItem("token");
//      if (!token)
//      {
//        navigate("/login");
//      }
//         let api="http://localhost:8000/user/authentication";
//         const response = await axios.post(api, null, {headers: { "auth-token": token } });
//         console.log(response.data);
//          localStorage.setItem("username", response.data.name);
//          localStorage.setItem("email", response.data.email);
//          navigate("/dashboard");
//   }
//   useEffect(()=>{
//     userAuthentication();
//   }, [])
//     return(
//         <>
//           <h1> Welcome To Home Page</h1>
//         </>
//     )
// }
// export default Home;