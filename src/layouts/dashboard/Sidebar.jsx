import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='col-span-2 bg-secondary h-[calc(100vh-40px)] rounded'>

      <div className='flex flex-col  pt-12 p-9'>
        <h1 className='text-3xl font-semibold  text-white' > User Dashboard </h1>
        <div className='pt-8 flex flex-col space-y-4'>
          <Link to="/dashboard" className='btn text-primary btn-outline  font-semibold text-lg'> Dashboard Home </Link>
          <Link to="/dashboard/earnings" className='btn text-primary btn-outline  font-semibold text-lg'>Earnings</Link>

        </div>

      </div>
       
      <div className='p-2 lg:pt-44'>
      <div className="divider divider-success"></div>
        <Link to="/" className='btn text-primary hover:btn-warning w-full font-semibold text-lg  '>Home</Link>
      </div>
    </div>
  )
}
