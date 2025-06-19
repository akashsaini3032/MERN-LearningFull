import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App