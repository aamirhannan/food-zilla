import React from 'react'
import { Image, Shimmer } from 'react-shimmer'

const ShimmerUI = () => {
  return (
    <div className='restaurant-list'>
      {Array(20)
        .fill("")
        .map((e, index)=>(
        <div key={index}className="shimmer-card"></div>
        ))}
    </div>
  )
}

export default ShimmerUI