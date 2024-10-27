import axios from 'axios';
import React from 'react';

const UploadProduct = () => {
const handleProduct = async (event) =>{
     event.preventDefault()
     console.log(event.target.foodName.value)
     const foodName = event.target.foodName.value;
     const foodCategory = event.target.foodCategory.value;
     const price = event.target.price.value;
     const description = event.target.description.value;
     const foodImage = event.target.foodImage.value;
     const foodData = {
          foodName,foodCategory,price,description,foodImage
     }
     console.log(foodData)
     try {
          const res = await axios.post('http://localhost:5000/api/products',foodData)
          console.log(res.data)
          if(res.data){
               alert('data added successfully')
          }
     } catch (error) {
          console.log(error)
     }
     
}
  return (
    <div className=" pt-24 p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold f text-3xl text-gray-600">add Product</h2>
       

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <form onSubmit={handleProduct} className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">foodName</label>
                    <input
                      type="text"
                      name="foodName"                      
                      id="foodName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">foodCategory</label>
                    <input
                      type="text"
                      name="foodCategory"
                      id="foodCategory"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="type here"
                      
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="address">description</label>
                    <input
                      type="text"
                      name="description"
                      id="description"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="address">price</label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="address">foodImage</label>
                    <input
                      type="text"
                      name="foodImage"
                      id="foodImage"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      
                    />
                  </div>

                  
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default UploadProduct;
