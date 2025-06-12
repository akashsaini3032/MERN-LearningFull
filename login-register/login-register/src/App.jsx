import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Pages/Layout";
import Registration from "./Pages/Registration";


const App=()=>{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="register" element={<Registration/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
export default App;
