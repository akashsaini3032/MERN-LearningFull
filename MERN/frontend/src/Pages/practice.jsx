

import { useState, useEffect } from "react";
import BackEndUrl from "../Config/BackendUrl";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Table from "react-bootstrap/Table";

const Update = () => {
  const [mydata, setMyData] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    let api = `${BackEndUrl}updateshowdata`;
    const response = await axios.get(api);
    console.log(response.data);
    setMyData(response.data);
  };

  const recDel = async (id) => {
    let api = `${BackEndUrl}datadelete/?myid=${id}`;
    const response = await axios.delete(api);
    console.log(response.data);
    loadData();
  };
  useEffect(() => {
    loadData();
  }, []);

  const recEdit=async(id)=>{
    navigate(`/edit/${id}`)
  }

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.rollno}</td>
          <td>{key.name}</td>
          <td>{key.city}</td>
          <td>{key.fees}</td>
          <td>
            <a href="#" onClick={()=>{recDel(key._id)}}>Delete</a>
          </td>
          <td>
            <button onClick={() => recEdit(key._id)}>Edit</button>

           
          </td>
        </tr>
      </>
    )
  });

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
           
            <th>Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};

export default Update;



