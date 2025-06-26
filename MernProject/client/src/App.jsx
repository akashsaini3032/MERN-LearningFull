import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";



import Search from "./pages/Search";
import Laptop from "./pages/Laptop";
import Mobile from "./pages/Mobile";
import Earphone from "./pages/Earphone";
import Speaker from "./pages/Speaker";
const App=()=>{
  return(
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path="home" element={<Home/>}/>
           <Route path="mycart" element={<MyCart/>}/>
           <Route path="laptop" element={<Laptop/>}/>
           <Route path="mobile" element={<Mobile/>}/>
           <Route path="earphone" element={<Earphone/>}/>
            <Route path="speaker" element={<Speaker/>}/>
           <Route path="search" element={<Search/>}/>
          </Route> 
        </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;