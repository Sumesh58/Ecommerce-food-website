import React from 'react'
import {categories} from '../data/data.js'

const Category = () => {
  return (
    <div className='max-w-[1640px] px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>top Rated Items</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-4'>
            {categories.map((item,index)=>(
                <div key={index}>
                    <h2>{item.name}</h2>
                    <img src={item.image} alt={item.name} />
                </div>

                
            ))}

        </div>
      
    </div>
  )
}

export default Category
