


import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"

import Registration from "./Pages/Registration"
import Dashboard from "./Pages/Dashboard"
// import Middleware from "./Pages/middleware"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/register" element={<Registration />} />
            
            

          </Route>
        </Routes>

        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;