import React from 'react'

export default function FoodCard({item}) {
  return (
    <div className=''>
        <img src={item.image} alt="" />
        <div className='space-y-2 mt-2'>
            <h2 className='text-2xl text-secondary font-semibold'>{item.name}</h2>
            <p className='text-secondary text-lg'>{item.description}</p>
            <h2 className='text-2xl font-semibold text-secondary'>${item.price}</h2>
            <button className='bg-secondary px-8 py-2 text-white rounded-full'>Order Now</button>
        </div>
    </div>
  )
}
