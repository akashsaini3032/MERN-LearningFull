import  {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminLogin from "./admin/adminlogin";
import AdminDashBoard from "./admin/AdminDashBoard";
import UploadProduct from "./admin/UploadProduct";
const App=()=>{
  return(
    <>
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
           <Route path="/admin" element={<AdminLogin/>}></Route>
          </Route>
         </Routes>
        
         <Routes>
             <Route path="/admindashboard" element={<AdminDashBoard/>}>
             <Route path="uploadproduct" element={<UploadProduct/>} />
              
             </Route>
         </Routes>

       </BrowserRouter>
    </>
  )
}
export default App;