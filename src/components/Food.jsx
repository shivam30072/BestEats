import React, {useState} from 'react'
import {data} from '../Data/data'


const Food = () => {
  const [foods, setFoods] = useState(data)

  const filterType = (category) => {
    setFoods(
        data.filter((item) => {
            return item.category === category
        })
    )
  }

  const filterPrice = (price) => {
    setFoods(
        data.filter((item) => {
            return item.price === price
        })
    )
  }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Items</h1>

        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')}
                    className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={() => filterType('pizza')}
                    className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('salad')}
                    className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={() => filterType('chicken')}className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>

           
                <div className='flex justify-between max-w-[390px] w-full'>
                <p  className='font-bold text-gray-700 lg:flex-0'>Filter Price</p>
                    <button onClick={() => filterPrice('$')}
                    className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={() => filterPrice('$$')}className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={() => filterPrice('$$$')}className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={() => filterPrice('$$$$')}className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            <div>

            </div>
        </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
           {foods.map((food, index) => (
            <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                <img src={food.image} alt={food.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{food.name}</p>
                    <p>
                        <span className='text-white bg-orange-500 p-1 rounded-full'>{food.price}</span>
                    </p>
                </div>

            </div>
           ))}
          </div>

    </div>
  )
}

export default Food