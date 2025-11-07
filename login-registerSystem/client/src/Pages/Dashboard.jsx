

// import { useNavigate } from "react-router-dom";

// function Dashboard() {
//   const navigate = useNavigate();
//   const logout = () => {
//     localStorage.clear();
//     navigate("/");
//   }
//   return (
//     <>
//       <div id="dashboard">
//         Welcome {localStorage.getItem("user")} Email:{" "}
//         {localStorage.getItem("email")}
//         <a href="#" className="btn btn-dash" onClick={logout}>
//           Logout
//         </a>
//       </div>
//       <center className="title">User Dashboard</center>
//     </>
//   )
// }

// export default Dashboard;



import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Make sure to import the CSS

function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div id="dashboard-container">
      <div className="dashboard-card">
        <h2 className="dashboard-title">User Dashboard</h2>
        <p className="dashboard-welcome">
          Welcome <strong>{localStorage.getItem("user")}</strong><br />
          Email: <strong>{localStorage.getItem("email")}</strong>
        </p>
        <button className="dashboard-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
