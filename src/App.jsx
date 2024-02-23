import React from 'react'
import Number from './components/Number'
import Catogories from './components/Catogories'
import Popular from './components/Popular'
import Star from './components/Star'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Navbarfinal from './components/Navbarfinal'

const App = () => {
  return <>
    <Number/>
    <Catogories/> 
    <Popular/>
    <Star />
    <Footer/>
    <Navbar/>
    <Navbar2/> 
    {/* <Navbarfinal/> */}
  </>
}

export default App

// .card:hover{
//   cursor:pointer;
//   transform: translateY(-5%);
// 
//  parent var deych trasnsion:all0.2s}
// heifht width sathi padding: 5rem 2rem; use kryach