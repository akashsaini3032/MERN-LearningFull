import { useState,useEffect } from "react";
import axios from 'axios';
const Display = ()=>{
    const [myData,setmyData] = useState([]);
    const loadData = async()=>{
        let api = "http://localhost:9000/employee/display";
        let response = await axios.get(api);
        setmyData(response.data)
        // console.log(response.data)

    }


    useEffect(()=>{
       loadData();
    },[])

    const ans = myData.map((key)=>{
        return(
            <>
            {/* Key is a kind of index of the array, so we can use it to access the data of the array. 
            
               And it can be always used inside an child element so that we can used inside a map function
            */}
             <tr>
                <td><img src = {`http://localhost:9000/${key.image}`} alt="image" style={{height:"200px",width:"200px"}}/></td>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
             </tr>
            </>
        )
    })
    return(
        <>
        <h1>Welcome to Display page</h1>
        {/* <table> */}
            <tr>
                <th>Image</th>

                <th>Empno</th>
                <th>Name</th>
                <th>Designation</th>
                <th>salary</th>
            </tr>
            {ans}
        {/* </table> */}
        </>
    )
}
export default Display;4