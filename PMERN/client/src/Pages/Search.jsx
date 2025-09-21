// import { useState, useEffect } from "react";
// import axios from "axios";


// import BackendUrl from "../Config/BackendUrl";


// const Search=()=>{

//     const [rno, setRno] =useState("");
//     const [mydata, setMyData]=useState([]);

//     const handleSubmit=async()=>{

//         let api=`${BackendUrl}getsearchdata/?rno=${rno}`;
//         const response= await axios.get(api);

//         setMyData(response.data);
//     }

//     const ans=mydata.map((key)=>{

//         return(
//             <>

//             <h1>Student Rollno:{key.rollno}</h1>
//             <h1>Name:{key.name}</h1>
//              <h1>City:{key.city}</h1>
//               <h1>Fees:{key.fees}</h1>
            
//             </>
//         )
//     })


//     return(

//         <>
//         <h1>Search Data</h1>
//         Enter Rollno: <input type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}} />
//         <button onClick={{handleSubmit}} >Search</button>
//         <hr />
//         {ans}
//         </>
//     )
// }

// export default Search;



import { useState } from "react";
import axios from "axios";

import BackendUrl from "../Config/BackendUrl";

const Search = () => {
  const [rno, setRno] = useState("");
  const [mydata, setMyData] = useState([]);

  const handleSubmit = async () => {
    try {
      let api = `${BackendUrl}getsearchdata/?rno=${rno}`;
      const response = await axios.get(api);
      setMyData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const ans = mydata.map((key) => {
    return (
      <div key={key.rollno}>
        <h1>Student Rollno: {key.rollno}</h1>
        <h1>Name: {key.name}</h1>
        <h1>City: {key.city}</h1>
        <h1>Fees: {key.fees}</h1>
      </div>
    );
  });

  return (
    <>
      <h1>Search Data</h1>
      Enter Rollno:{" "}
      <input type="text" value={rno} onChange={(e) => setRno(e.target.value)} />
      <button onClick={handleSubmit}>Search</button>
      <hr />
      {ans}
    </>
  );
};

export default Search;
