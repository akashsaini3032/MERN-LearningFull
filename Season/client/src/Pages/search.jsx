
import axios from "axios";
import { useState } from "react";

const Search = ()=>{
    const [empno,setEmpno] = useState("");
    const [eno,setNo] = useState([])
    const handleSubmit = async()=>{
          let api = `http://localhost:9000/employee/search?eno=${empno}`; // we can create a query byb our own and this is known as Query String
        //  a Query6 string can be get by using req.query in express js
          const response = await axios.get(api);
          console.log(response.data);
          setNo(response.data)
          alert("Here is your data");
    }
    const ans = eno.map((key)=>{
        return(
             <>
               <h1>Employee No : {key.empno}</h1>
               <h1>Employee Name : {key.name}</h1>
               <h1>Employee designation : {key.designation}</h1>
               <h1>Employee Salary : {key.salary}</h1>
             
             </>

        )
    })
    return(
        <>

        <h1>Employee Data</h1>
        Enter Employeem idm : <input type="text" id="search" value={empno} onChange={(e)=>{setEmpno(e.target.value)}} />
        <button onClick={handleSubmit}>Search Data</button>

        {ans}
        
        
        
        </>
    )
}
export default Search;