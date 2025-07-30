import { useState,useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Update = ()=>{
    const [myData,setMydata] = useState([])
   
    const navigate = useNavigate();
    const loadData = async()=>{
        let api = `http://localhost:9000/employee/update`;
        const response  = await axios.get(api);
        // console.log(response.data)
        setMydata(response.data)
    }
    useEffect(()=>{
        loadData();
    },[])
    const recDel = async(id)=>{
        let api = `http://localhost:9000/employee/delete?id=${id}`;
        const response = await axios.get(api);
        console.log(response.data)
        loadData();
        alert("Data Deleted")
      
    }
    const recEdit = (id )=>{
        navigate(`/editdata/${id}`)

    }

    let ans  = myData.map((key)=>{
        return(
            <>

              <tr>
              <td><img src={key.image} alt="" style={{height:"200px",width:"200px"}}/></td>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
                <td>
                    <button onClick={()=>{recDel(key._id)}}>delete</button> 
                    {/* we use _id  to delete the data from the database 
                         we can take empno ( Employee Number) but empno cuz i have taken emon0 as a Keym in my empModel whicjn is the basic structure
                    */}
                    
                </td>
                <td>
                    <button onClick={()=>{recEdit(key._id)}}>Update</button>
                </td>
              </tr>
            
            </>
        )
    })
    
  return(
    <>
    
    <h1> Update data</h1>
    <table> 
        <tr>
            <th>Image</th>
            <th>Employee NO </th>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Salary</th>
        </tr>
        {ans}
    </table>


    </>
  )
}

export default Update