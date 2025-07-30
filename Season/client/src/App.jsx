
// import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Insert from './Pages/insert';
import Layout from './layout';
import Home from './Pages/home';
import Display from './Pages/display';
import Search from './Pages/search';
import Update from './Pages/update';
import EditData from './Pages/editData';
const App = ()=> {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/display" element={<Display />} />
          <Route path="/search" element={<Search />} />
          <Route path='/update' element={<Update/>}/>
          <Route path='/editdata/:id' element={<EditData/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
