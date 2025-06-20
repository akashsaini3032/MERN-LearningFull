import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Registration from "./Pages/Registration"
import UserSave from "./Pages/UserSave"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="registration" element={<Registration />} />
            <Route path="usersave" element={<UserSave />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App