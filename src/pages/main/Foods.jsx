import React, { useEffect, useState } from 'react'
import FoodCard from '../../components/shared/FoodCard';
import ExploreHeading from '../../components/shared/ExploreHeading';
import { Search } from 'lucide-react';

export default function Foods() {
  const [foods, setFoods] = useState([])
  const [selectedPlace, setSelectedPlace] = useState('');

  useEffect(() => {
    const getFoods = async () => {
      const res = await fetch("./fack.json");
      const data = await res.json();
     
      setFoods(data.foods)
    }
    getFoods();
  }, [])
   
  const hanldeChange = (e) => {
    e.preventDefault();
    setSelectedPlace(e.target.value);

  };

  return (
    <div className='pt-24 mb-12'>
      <div >
        <div className="p-4 w-1/2 pb-12 mx-auto lg:col-span-2 xl:flex grid grid-cols-4  gap-3 ">
          {["", "Pizza", "Rice", "Kabab", "Rice", "Sushi", "Chicken"].map((place) => (
            <button
              key={place}
              onClick={hanldeChange}
              value={place}
              className={` ${selectedPlace === place ? 'btn btn-warning' : 'btn text-white bg-primary btn-outline'}`}
            >
              {place || "ALL"}
            </button>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-between gap-14  '>
        <ExploreHeading />
        <div className='border flex items-center w-1/3 p-1 rounded-full'>
          <input type="text" className='outline-none px-2 w-full py-1 bg-transparent' name="" id="" placeholder='Search Food' />
          <button className='bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full'><Search /></button>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-10'>
        {
          foods.map((item, index) => <FoodCard key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}
