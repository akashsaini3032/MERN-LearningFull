// import axios from "axios";
// import { useState , useEffect} from "react";
// import BackEndUrl from "../config/BackendUrl";
// import Table from 'react-bootstrap/Table';
// import Button from "react-bootstrap/esm/Button";

// const MyTask=()=>{
//     const [mydata, setMydata] = useState([]);
//     const loadData=async()=>{
//          let api=`${BackEndUrl}/user/mytask/?id=${localStorage.getItem("userid")}`;
//          try {
//                const response = await axios.get(api);
//                console.log(response.data);
//                setMydata(response.data);
//          } catch (error) {
//              console.log(error);
//          }
//     }

// useEffect(()=>{
//     loadData();
// }, [])

// const submitTask=(id)=>{
    
// }


// const ans= mydata.map((key)=>{
//     return(
//         <>
//          <tr>
//             <td>{key.title}</td>
//              <td>{key.description}</td>
//               <td>{key.compday}</td>
//               <td>
//                 <Button onClick={()=>{submitTask(key._id)}}>Submit Task</Button>
//               </td>
//          </tr>
        
//         </>
//     )
// })

//     return(
//         <>
//           <h3>  Task List Given By Admin</h3>
//            <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Title#</th>
//           <th>Description</th>
//           <th>Compelition Time</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//          {ans}
//       </tbody>
//       </Table>
//         </>
//     )
// }

// export default MyTask


// import axios from "axios";
// import { useState, useEffect } from "react";
// import BackEndUrl from "../config/BackendUrl";
// import Table from 'react-bootstrap/Table';
// import Button from "react-bootstrap/esm/Button";
// import Form from 'react-bootstrap/Form';

// const MyTask = () => {
//   const [mydata, setMydata] = useState([]);
//   const [activeTask, setActiveTask] = useState(null); // to track which task is in edit mode
//   const [daysInput, setDaysInput] = useState(""); // input for days

//   const loadData = async () => {
//     let api = `${BackEndUrl}/user/mytask/?id=${localStorage.getItem("userid")}`;
//     try {
//       const response = await axios.get(api);
//       setMydata(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const submitTask = (id) => {
//     // Toggle state to allow entering days
//     setActiveTask(id);
//   };

//   const confirmDays = async (id) => {
//     try {
//       await axios.patch(`${BackEndUrl}/user/update-days/${id}`, {
//         days: parseInt(daysInput)
//       });
//       alert("Days to complete submitted!");
//       setActiveTask(null);
//       setDaysInput("");
//       loadData(); // reload updated data
//     } catch (error) {
//       console.error("Failed to update days:", error);
//     }
//   };

//   const ans = mydata.map((key) => (
//     <tr key={key._id}>
//       <td>{key.title}</td>
//       <td>{key.description}</td>
//       <td>{key.compday ?? "Not Provided"}</td>
//       <td>
//         {activeTask === key._id ? (
//           <>
//             ✅
//             <Form.Control
//               type="number"
//               placeholder="Enter days"
//               value={daysInput}
//               onChange={(e) => setDaysInput(e.target.value)}
//               style={{ width: "120px", display: "inline", marginLeft: "10px", marginRight: "10px" }}
//             />
//             <Button variant="success" onClick={() => confirmDays(key._id)}>
//               Confirm
//             </Button>
//           </>
//         ) : (
//           <>
//             ❌ <Button onClick={() => submitTask(key._id)}>Submit Task</Button>
//           </>
//         )}
//       </td>
//     </tr>
//   ));

//   return (
//     <>
//       <h3>Task List Given By Admin</h3>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Title#</th>
//             <th>Description</th>
//             <th>Completion Time</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>{ans}</tbody>
//       </Table>
//     </>
//   );
// };

// export default MyTask;






import axios from "axios";
import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackendUrl";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

const MyTask = () => {
  const [mydata, setMydata] = useState([]);
  const [activeTask, setActiveTask] = useState(null);
  const [daysInput, setDaysInput] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]); // ✅ local completed task IDs

  const loadData = async () => {
    let api = `${BackEndUrl}/user/mytask/?id=${localStorage.getItem("userid")}`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitTask = (id) => {
    setActiveTask(id);
  };

  const confirmDays = async (id) => {
    try {
      await axios.patch(`${BackEndUrl}/user/update-days/${id}`, {
        days: parseInt(daysInput)
      });
      alert("Days to complete submitted!");
      setActiveTask(null);
      setDaysInput("");
      setCompletedTasks([...completedTasks, id]); // ✅ mark this task as completed
    } catch (error) {
      console.error("Failed to update days:", error);
    }
  };

  const ans = mydata.map((key) => {
    const isCompleted = completedTasks.includes(key._id); // ✅ use local state

    return (
      <tr key={key._id}>
        <td>{key.title}</td>
        <td>{key.description}</td>
        <td>{key.compday ?? "Not Provided"}</td>
        <td>
          {isCompleted ? (
            "✅"
          ) : activeTask === key._id ? (
            <>
              ❌
              <Form.Control
                type="number"
                placeholder="Enter days"
                value={daysInput}
                onChange={(e) => setDaysInput(e.target.value)}
                style={{
                  width: "120px",
                  display: "inline",
                  marginLeft: "10px",
                  marginRight: "10px"
                }}
              />
              <Button variant="success" onClick={() => confirmDays(key._id)}>
                Confirm
              </Button>
            </>
          ) : (
            <>
              ❌{" "}
              <Button variant="primary" onClick={() => submitTask(key._id)}>
                Submit Task
              </Button>
            </>
          )}
        </td>
      </tr>
    );
  });

  return (
    <>
      <h3>Task List Given By Admin</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title#</th>
            <th>Description</th>
            <th>Completion Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};

export default MyTask;
