import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Insert from "./Pages/Insert"
import Display from "./Pages/Display"
import Update from "./Pages/Update"
import Edit from "./Pages/Edit"
import Search from "./Pages/Search"
import Contact from "./Pages/Contact"
import Total from "./Pages/Total"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/display" element={<Display />} />
            <Route path="/update" element={<Update />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/total" element={<Total />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App