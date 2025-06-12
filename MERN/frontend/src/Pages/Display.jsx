
import { useState, useEffect } from "react";
import BackendUrl from "../Config/BackendUrl"

import axios from "axios";

import Table from 'react-bootstrap/Table';

const Display=()=>{

    const [mydata, setMyData]=useState([]);

    const loadData=async()=>{

        let api=`${BackendUrl}display`;

        const response= await axios.get(api);
        console.log(response.data);
        setMyData(response.data);
    }

    useEffect(()=>{
        loadData();
    }, []);

    const ans=mydata.map((key)=>{
        return(
            <>
            
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>My Display Page</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </Table>

        </>
    )
}
export default Display