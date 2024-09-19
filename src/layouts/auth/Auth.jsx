import React from 'react'
import { Outlet } from 'react-router-dom'
import image from "../../assets/auth-page.png"

export default function Auth() {
  return (
    <div className='grid grid-cols-2 items-center container h-screen border'>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
