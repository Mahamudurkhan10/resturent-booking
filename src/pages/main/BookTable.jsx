import { MapPin, TableOfContents, User2Icon, Users } from 'lucide-react';
import React from 'react';

const BookTable = () => {
  return (
    <div className='pt-28 mb-12'>
      <div className="  bg-white rounded-lg ">
        <div className="space-y-4">
          <img
            src="https://i.ibb.co/mG3qXGS/villagio1.jpg"
            alt="Villagio Restaurant"
            className="w-full  object-cover rounded-md"
          />

          <h1 className="text-2xl font-bold text-gray-800"> <span className='text-2xl font-bold text-primary'>Villagio </span> Restaurant & Bar</h1>
          <div className="w-full h-px bg-gray"></div>

          <div className='flex gap-6'>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="text-primary mr-2" />
                <span>360 San Lorenzo Avenue, Suite 1430 Coral Gables, FL 33146-1865</span>
              </div>

              <h2 className="text-lg font-semibold text-gray-700">Book a Table</h2>
              <form className="flex flex-col sm:flex-row sm:space-x-2 gap-3 space-y-2 sm:space-y-0">
                <input type="date" className="p-2 rounded-xl border-2 border-primary text-gray-700" />
                <input type="time" className="p-2 rounded-xl border-2 border-primary text-gray-700" />

                <div className='flex items-center gap-2'>
                  <Users></Users>
                  <input type="number" placeholder="Persons" min="1" className="p-2 rounded-xl border-2 border-primary text-gray-700" />
                </div>
              </form>
            </div>
            <div className='flex gap-2'>
              <h1> <TableOfContents className='text-primary'></TableOfContents> </h1>
              <p className='pt-2'>Villagio restaurant and bar has one mission: to provide guests with a fine and fresh seafood experience. Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. to provide guests with a fine  <span className='font-semibold text-primary'>Read More...</span></p>
            </div>

          </div>
          <div className='flex justify-center pt-3 '>
            <button className='btn  w-2/3  btn-outline text-xl font-semibold text-primary '> Book Now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
