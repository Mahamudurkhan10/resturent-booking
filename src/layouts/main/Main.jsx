import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>
        <Navbar />
        <div className='min-h-screen container'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}
