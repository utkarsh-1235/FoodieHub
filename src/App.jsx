import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import LoginPage from './Pages/LoginPage'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import About from './Pages/About'
import CatagoryMenu from './Components/CatagoryMenu'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login'element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/food' element={<CatagoryMenu/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App