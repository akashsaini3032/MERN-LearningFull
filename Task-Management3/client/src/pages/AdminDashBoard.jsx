const AdminDashBoard=()=>{
    return(
         <>
           <div id="dashboard">
                <h1 align="center"> Welcome To Admin DashBorad</h1>            
            </div> 
             <div>
                     <h5> Welcome : {localStorage.getItem("adminuser")} Logout</h5>
                </div>   
            <div id="admindata">
                <div id="adminleftmenu">
                  
                    Create New User
                </div>
               
                <div id="rightdata">
                    dfgdfg
                </div>
                
            </div>  
        </>
    )
}

export default AdminDashBoard;