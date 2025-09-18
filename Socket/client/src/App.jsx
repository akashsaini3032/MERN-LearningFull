import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import DashBoard from "./pages/DashBoard";




const App=()=>{
  return(
    <>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="register" element={<Registration/>}/>
           </Route>
       </Routes>

      <Routes>
       <Route path="/dashboard" element={<DashBoard/>}>
         

       </Route>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App;