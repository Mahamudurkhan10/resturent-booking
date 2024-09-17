import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between container'>
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className='flex items-center gap-10 text-xl'>
          <li>Home</li>
          <li>Foods</li>
          <li>About</li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/auth/login">Login</Link></li>
        </ul>
    </nav>
  )
}
