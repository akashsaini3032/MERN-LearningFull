import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
const Home = ()=>{
    
    const handleSubmit = async()=>{
        let api = "http://localhost:9000/home";
        let res = await axios.get(api);
        console.log(res.data)
    }

    return(
        <>
           <h1>Welcome To the home Page</h1>
           <button onClick={handleSubmit}>Submit</button>
           
        </>
    )
}
export default Home;