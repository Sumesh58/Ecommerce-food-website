import React from 'react'

const HeadLinesCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*card*/}
        <div className='rounded-xl relative'>
            {/*overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out,BOGO's Out</p>
                <p className='px-2'>Throgh 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now </button>

            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

        </div>
        {/*card*/}
        <div className='rounded-xl relative'>
            {/*overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daliy</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now </button>

            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

        </div>
        {/*card*/}
        <div className='rounded-xl relative'>
            {/*overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-rounded bg-white text-black mx-2 absolute bottom-4'>Order Now </button>

            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600`" alt="" />

        </div>
      
    </div>
  )
}

export default HeadLinesCard
