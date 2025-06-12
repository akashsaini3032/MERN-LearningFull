// import {Link, Outlet} from "react-router-dom"

// const AdminDashBoard=()=>{
//     return(
//          <>
//            <div id="dashboard">
//                 <h1 align="center"> Welcome To Admin DashBorad</h1>            
//             </div> 
//              <div>
//                      <h5> Welcome : {localStorage.getItem("adminuser")} Logout</h5>
//                 </div>   
//             <div id="admindata">
//                 <div id="adminleftmenu">
//                  <Link to="createuser" className="adminmenu">
                 
//                   Create New User

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


import { Link, Outlet } from "react-router-dom";


const AdminDashBoard = () => {
  return (
    <>
      <div id="dashboard" className="admindashboard-header">
        <h1 align="center">Welcome To Admin DashBorad</h1>
      </div>
      <div className="admindashboard-welcome">
        <h5>Welcome: {localStorage.getItem("adminuser")} Logout</h5>
      </div>
      <div id="admindata" className="admindashboard-container">
        <div id="adminleftmenu" className="admindashboard-sidebar">
          <Link to="createuser" className="adminmenu">
            Create New User
          </Link>
        </div>
        <div id="rightdata" className="admindashboard-right">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
