// import axios from "axios";
// import { useState, useEffect } from "react";
// import BackEndUrl from "../config/BackendUrl";
// import Table from 'react-bootstrap/Table';
// import right from "../images/right.png";
// import wrong from "../images/wrong.jpeg";
// import Button from "react-bootstrap/esm/Button";
// const TaskDetail=()=>{
//     const [mydata, setMydata] = useState([]);

//     const loadData=async()=>{
//           let api=`${BackEndUrl}/admin/taskdetail`
//           try {
//               const response= await axios.get(api);
//               console.log(response.data);
//               setMydata(response.data);
//           } catch (error) {
//              console.log(error);
//           }
//     }

//     useEffect(()=>{
//         loadData();
//     }, [])

//    const changeTaskStatus=async(id)=>{
//     let api=`${BackEndUrl}/admin/changetaskstatus/?id=${id}`;
//     try {
//           const response = await axios.get(api);
//           console.log(response);
//     } catch (error) {
//         console.log(error);
//     }

//     loadData();
//    }

//     let no=0
//     const ans= mydata.map((key)=>{
//          no++;
//         return(
//             <>
//               <tr>
//                 <td>

//                {key.taskstatus ? (<>
//                  <img src={right }  width="30" height="30"/>
//                </>) :(
//                 <>
//                     <img src={wrong } width="30" height="30" />
//                 </>
//                )}

//                 </td>
//                 <td>{no}</td>
//                 <td>{key.userid.name}</td>
//                 <td>{key.userid.email}</td>
//                 <td>{key.title}</td>
//                 <td>{key.description}</td>
//                 <td> 

                      
//                       {key.taskstatus ? (<>
//                         <Button variant="success" size="sm" onClick={()=>{changeTaskStatus(key._id)}}> ReAssign </Button>
                      
//                       </>) :(<>
                      
//                        <Button variant="danger" size="sm"> Pending... </Button></>)}
                   
                     
//                 </td>
//               </tr>
//             </>
//         )
//     })
//     return(
//         <>
//           <h2> Task Detail List</h2>
//            <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th></th>
//           <th>#</th>
//           <th>Employee Name</th>
//           <th>Email</th>
//           <th>Task Title</th>
//           <th>Description</th>
//           <th> Action</th>
//         </tr>
//       </thead>
//       <tbody>
//      {ans}
//       </tbody>
//   </Table>
//         </>
//     )
// }

// export default TaskDetail;


// Add Pagination







// import axios from "axios";
// import { useState, useEffect } from "react";
// import BackEndUrl from "../config/BackendUrl";
// import Table from 'react-bootstrap/Table';
// import right from "../images/right.png";
// import wrong from "../images/wrong.jpeg";
// import Button from "react-bootstrap/esm/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

// const TaskDetail = () => {
//   const [mydata, setMydata] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [tasksPerPage, setTasksPerPage] = useState(5);

//   const loadData = async () => {
//     const api = `${BackEndUrl}/admin/taskdetail`;
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

//   const changeTaskStatus = async (id) => {
//     const api = `${BackEndUrl}/admin/changetaskstatus/?id=${id}`;
//     try {
//       await axios.get(api);
//     } catch (error) {
//       console.log(error);
//     }
//     loadData();
//   };

//   // Filtered data based on search
//   const filteredData = mydata.filter(task =>
//     task.userid.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = filteredData.slice(indexOfFirstTask, indexOfLastTask);
//   const totalPages = Math.ceil(filteredData.length / tasksPerPage);

//   let no = indexOfFirstTask;

//   return (
//     <>
//       <h2>Task Detail List</h2>

//       {/* Search Bar */}
//       <InputGroup className="mb-3 w-50">
//         <InputGroup.Text>🔍</InputGroup.Text>
//         <Form.Control
//           placeholder="Search by employee name"
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setCurrentPage(1); // reset to page 1 on new search
//           }}
//         />
//       </InputGroup>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th></th>
//             <th>#</th>
//             <th>Employee Name</th>
//             <th>Email</th>
//             <th>Task Title</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentTasks.map((key) => {
//             no++;
//             return (
//               <tr key={key._id}>
//                 <td>
//                   {key.taskstatus ? (
//                     <img src={right} width="30" height="30" />
//                   ) : (
//                     <img src={wrong} width="30" height="30" />
//                   )}
//                 </td>
//                 <td>{no}</td>
//                 <td>{key.userid.name}</td>
//                 <td>{key.userid.email}</td>
//                 <td>{key.title}</td>
//                 <td>{key.description}</td>
//                 <td>
//                   {key.taskstatus ? (
//                     <Button variant="success" size="sm" onClick={() => changeTaskStatus(key._id)}>
//                       ReAssign
//                     </Button>
//                   ) : (
//                     <Button variant="danger" size="sm">Pending...</Button>
//                   )}
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>

//       {/* Pagination */}
//       <div className="d-flex flex-column align-items-center mt-4">
//         <div className="mb-2">
//           <strong>Page {currentPage} of {totalPages}</strong>
//         </div>

//         <nav>
//           <ul className="pagination flex-wrap justify-content-center">
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(1)}>« First</button>
//             </li>
//             <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}>‹ Prev</button>
//             </li>

//             {Array.from({ length: totalPages }, (_, i) => i + 1)
//               .filter(page => Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages)
//               .map((page, i, arr) => (
//                 <>
//                   {i > 0 && page - arr[i - 1] > 1 && (
//                     <li className="page-item disabled" key={`ellipsis-${page}`}>
//                       <span className="page-link">...</span>
//                     </li>
//                   )}
//                   <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
//                     <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
//                   </li>
//                 </>
//               ))}

//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}>Next ›</button>
//             </li>
//             <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//               <button className="page-link" onClick={() => setCurrentPage(totalPages)}>Last »</button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default TaskDetail;



// search code


import axios from "axios";
import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackendUrl";
import Table from 'react-bootstrap/Table';
import right from "../images/right.png";
import wrong from "../images/wrong.jpeg";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

const TaskDetail = () => {
  const [mydata, setMydata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMode, setSearchMode] = useState("name"); // "name" or "all"
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(5);

  const loadData = async () => {
    const api = `${BackEndUrl}/admin/taskdetail`;
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

  const changeTaskStatus = async (id) => {
    const api = `${BackEndUrl}/admin/changetaskstatus/?id=${id}`;
    try {
      await axios.get(api);
    } catch (error) {
      console.log(error);
    }
    loadData();
  };

  // Smart Filter Logic
  const filteredData = mydata.filter(task => {
    const term = searchTerm.toLowerCase();
    const name = task.userid.name?.toLowerCase() || "";
    const email = task.userid.email?.toLowerCase() || "";
    const title = task.title?.toLowerCase() || "";
    const description = task.description?.toLowerCase() || "";

    if (searchMode === "name") {
      return name.includes(term);
    } else {
      return (
        name.includes(term) ||
        email.includes(term) ||
        title.includes(term) ||
        description.includes(term)
      );
    }
  });

  // Pagination logic
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredData.slice(indexOfFirstTask, indexOfLastTask);
  const totalPages = Math.ceil(filteredData.length / tasksPerPage);
  let no = indexOfFirstTask;

  return (
    <>
      <h2>Task Detail List</h2>

      {/* Search Bar with Filter Mode */}
      <div className="d-flex gap-3 align-items-center mb-3 flex-wrap">
        <InputGroup className="w-auto">
          <InputGroup.Text>🔍</InputGroup.Text>
          <Form.Control
            placeholder={`Search by ${searchMode === "name" ? "employee name" : "any field"}`}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </InputGroup>

        <Dropdown onSelect={(mode) => setSearchMode(mode)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
            Search In: {searchMode === "name" ? "Name" : "All Fields"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="name">Name</Dropdown.Item>
            <Dropdown.Item eventKey="all">All Fields</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>Task Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map((key) => {
            no++;
            return (
              <tr key={key._id}>
                <td>
                  {key.taskstatus ? (
                    <img src={right} width="30" height="30" alt="done" />
                  ) : (
                    <img src={wrong} width="30" height="30" alt="pending" />
                  )}
                </td>
                <td>{no}</td>
                <td>{key.userid.name}</td>
                <td>{key.userid.email}</td>
                <td>{key.title}</td>
                <td>{key.description}</td>
                <td>
                  {key.taskstatus ? (
                    <Button variant="success" size="sm" onClick={() => changeTaskStatus(key._id)}>
                      ReAssign
                    </Button>
                  ) : (
                    <Button variant="danger" size="sm">Pending...</Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <div className="d-flex flex-column align-items-center mt-4">
        <div className="mb-2">
          <strong>Page {currentPage} of {totalPages}</strong>
        </div>

        <nav>
          <ul className="pagination flex-wrap justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(1)}>« First</button>
            </li>
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}>‹ Prev</button>
            </li>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages)
              .map((page, i, arr) => (
                <>
                  {i > 0 && page - arr[i - 1] > 1 && (
                    <li className="page-item disabled" key={`ellipsis-${page}`}>
                      <span className="page-link">...</span>
                    </li>
                  )}
                  <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
                  </li>
                </>
              ))}

            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}>Next ›</button>
            </li>
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(totalPages)}>Last »</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TaskDetail;

