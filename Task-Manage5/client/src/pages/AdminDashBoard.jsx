// import {Link, Outlet} from "react-router-dom"
// import { useNavigate } from "react-router-dom";

// const AdminDashBoard=()=>{

//     const navigate= useNavigate();

//   const logout=()=>{
//      localStorage.clear();
//       navigate("/");
//   }


//     return(
//          <>
//            <div id="dashboard">
//                 <h1 align="center"> Welcome To Admin DashBorad</h1>            
//             </div> 
//              <div>
//                      <h5> Welcome : {localStorage.getItem("adminuser")} 
//                         <a href="#" onClick={logout}>Logout</a></h5>
//                 </div>   
//             <div id="admindata">
//                 <div id="adminleftmenu">
//                  <Link to="createuser" className="adminmenu">
                 
//                   Create New User

//                  </Link> 
//                   <br/> <br />

//                   <Link to="assigntask" className="adminmenu">
                 
//                   Assign Task

//                  </Link> 
                   
//                 </div>
               
//                 <div id="rightdata">
                  
//                         <Outlet/>

//                 </div>
                
//             </div>  
//         </>
//     )
// }

// export default AdminDashBoard;




// import { Link, Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const AdminDashBoard = () => {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

//   return (
//     <>
//       <div className="admin-dashboard">
//         <h1 className="admin-dashboard-title">Welcome To Admin Dashboard</h1>

//         <div className="admin-dashboard-header">
//           <h5>
//             Welcome: {localStorage.getItem("adminuser")}
//             <a href="#" onClick={logout} className="admin-dashboard-logout">Logout</a>
//           </h5>
//         </div>

//         <div className="admin-dashboard-container">
//           <div className="admin-dashboard-sidebar">
//             <Link to="createuser" className="admin-dashboard-menu">Create New User</Link>
//             <Link to="assigntask" className="admin-dashboard-menu">Assign Task</Link>
//           </div>

//           <div className="admin-dashboard-content">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminDashBoard;




import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminDashBoard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="admin-dashboard">
        <h1 className="admin-dashboard-title">Welcome To Admin Dashboard</h1>

        <div className="admin-dashboard-header">
          <h5>
            Welcome: {localStorage.getItem("adminuser")}
            <a href="#" onClick={logout} className="admin-dashboard-logout">Logout</a>
          </h5>
        </div>

        <div className="admin-dashboard-container">
          <div className="admin-dashboard-sidebar">
            <Link to="createuser" className="admin-dashboard-menu">Create New User</Link>
            <Link to="assigntask" className="admin-dashboard-menu">Assign Task</Link>
            {/* New Button Added Below */}
            <Link to="submittedtasks" className="admin-dashboard-menu">Completed Task</Link>
          </div>

          <div className="admin-dashboard-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
