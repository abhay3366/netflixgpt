import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Header2 from '@/components/Header2'

const MainLayout = () => {
   const location=useLocation();
  return (
    <div>
      {location.pathname=="/"?<Header/>:<Header2/>}
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
