import React from 'react';
import { CDN_URL } from '../utils/constants';
import food from '../assets/images/food-img.avif'

const RestaurantCard = (props) => {

    const {resData} = props;
    //console.log(resData)
    const {name,avgRating,areaName,cloudinaryImageId,cuisines} = resData?.info;

  return (
    <div className='w-60  p-2  hover:cursor-pointer '>
        <div className=''> 
             <img src={CDN_URL+cloudinaryImageId} 
             alt="" className='w-full h-32 rounded-lg'/>
        </div>
        <div className='p-2'>
              <h2 className='font-bold text-lg truncate'>{name}</h2>
              <h3 className='font-bold'>⭐ {avgRating} <span>. 36min</span></h3>
              <p className='truncate'>{cuisines.join(',')}</p>
              <p className='truncate'>{areaName}</p>
             
        </div>
    </div>
  )
}

//Higher Order Function
// input -- Restaurant Card ==> restaurantCardWithDiscount
export const cardWithDiscount = (RestaurantCard) =>{

  return (props) =>{
      return (
        <div>
          <label className="absolute p-1 bg-black text-white">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
  }
}

export default RestaurantCard