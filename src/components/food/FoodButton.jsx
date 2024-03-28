import React from 'react'

const FoodButton = ({item,filterType,i,setFoods,data}) => {
  return (
    <>
    <button onClick={i===0?()=>setFoods(data):()=>filterType(item)}   className='btn'>{item}</button></>
  )
}

export default FoodButton
