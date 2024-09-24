import React from 'react'
import image from '../../../assets/who-we.png'
import { ChefHat } from 'lucide-react'

export default function Services() {
    const items = [
        {
            icon: <ChefHat />,
            title:"Online Ordering"
        },
        {
            icon: <ChefHat />,
            title:"24/7 Availability"
        },
        {
            icon: <ChefHat />,
            title:"Advanced Reservations"
        },
        {
            icon: <ChefHat />,
            title:"Curated Dining Spaces"
        },
        {
            icon: <ChefHat />,
            title:"Top Chefs"
        },
        {
            icon: <ChefHat />,
            title:"Immaculate Kitchens"
        },
    ]
  return (
    <div className='grid grid-cols-2 gap-14 items-center my-14'>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2 className='text-4xl font-bold'>We are <span className='text-primary'>more</span> than <span className='text-secondary'>multiple</span> service</h2>
        <p className='text-secondary'>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>
        <div className='grid grid-cols-2 gap-5 mt-5'>
            {
                items.map((item,index) => <div key={index} className='flex items-center gap-2'>
                    <span className='text-primary'>{item.icon}</span>
                    <h2 className='text-lg font-semibold'>{item.title}</h2>
                </div>)
            }
        </div>
      </div>
    </div>
  )
}
