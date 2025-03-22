// import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import LoginPage from './Pages/LoginPage'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import About from './Pages/About'
import CatagoryMenu from './Components/CatagoryMenu'
// import { useSelector } from 'react-redux'
import PaymentPage from './Pages/PaymentPage'
import RestaurantList from './Components/RestaurantList'
import AddRestaurant from './Components/AddRestaurant'
import GetOrders from './Components/getOrders'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login'element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/payment' element={<PaymentPage/>}/>
      <Route path='/food' element={<CatagoryMenu/>}/>
      <Route path='/restaurant' element={<RestaurantList/>}/>
      <Route path='/add' element={<AddRestaurant/>}/>
      <Route path='/user/orders' element ={<GetOrders/>}/>
      
      </Routes>
      </BrowserRouter>
  )
}

export default App