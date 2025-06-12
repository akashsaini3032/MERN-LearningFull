import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";


const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>} >
    <Route index element={<Home/>}/>
     <Route path="dashboard" element={<Dashboard/>} ></Route>

    
    
    
    
    
    
    
    </Route>
    </Routes>
  </BrowserRouter>
    
    </>
  )
}


export default App;