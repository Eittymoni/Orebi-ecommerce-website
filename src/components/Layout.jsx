import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from "./Footer"
const Layout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
