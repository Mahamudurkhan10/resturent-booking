import React, { useEffect, useState } from 'react'
import FoodCard from '../../components/shared/FoodCard';
import ExploreHeading from '../../components/shared/ExploreHeading';
import { Search } from 'lucide-react';

export default function Foods() {
  const [foods,setFoods] = useState([])

  useEffect(()=>{
     const getFoods = async () =>{
          const res = await fetch("./fack.json");
          const data = await res.json();

          setFoods(data.foods)
     }
     getFoods();
  },[])

  return (
    <div className=''>
      <div className='flex items-center justify-between gap-14 pt-12 '>
        <ExploreHeading /> 
        <div className='border flex items-center w-1/3 p-1 rounded-full'>
                <input type="text" className='outline-none px-2 w-full py-1 bg-transparent' name="" id="" placeholder='Search Food' />
                <button className='bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full'><Search /></button>
            </div>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-10'>
            {
                foods.map((item,index)=> <FoodCard key={item.id} item={item}  />)
            }
        </div>
    </div>
  )
}
