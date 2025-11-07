import React from 'react'
import Navbar from './component/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Men from './pages/Men/Men'
import Women from './pages/Women/Women'
import Kids from './pages/Kids/Kids'
import YourCart from './pages/YourCart/YourCart'
import Footer from './component/Footer/Footer'
import ScrollToTop from './component/ScrollToTop/ScrollToTop'

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path='/men' element={<Men />} />
       <Route path='/women' element={<Women />} />
       <Route path='/kids' element={<Kids />} />
       <Route path='/cart' element={<YourCart />} />
       <Route path="/login" element={<Login />} />
       <Route path='/register' element={<Register />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App