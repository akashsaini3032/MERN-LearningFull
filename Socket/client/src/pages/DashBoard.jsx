import { useNavigate } from "react-router-dom";
const DashBoard=()=>{
 const navigate = useNavigate();
  const logout=()=>{
      localStorage.clear();
      navigate("/");
  }
    return(
        <>
         <div id="dashborad">
           Welcome {localStorage.getItem("user")} Email : {localStorage.getItem("email")} <a href="#" onClick={logout}>Logout!</a> 
         </div>
          <h1> User Dashboard </h1>
        </>
    )
}
export default DashBoard;