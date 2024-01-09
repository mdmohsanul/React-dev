import React,{useState} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';
import useRestaurantMenu from '../utils/hooks/useRestaurantMenu';
import { RiStarSFill } from "react-icons/ri";

const RestaurantMenu = () => {

  // useparams id used to get the restro id
   const {resId} = useParams()
  // console.log(params)
  
  //useRestaurantMenu is custom hook
    const resInfo = useRestaurantMenu(resId);

    //
    const [showIndex, setShowIndex] = useState(null)

 if (resInfo === null) return <Shimmer/>
        const {name,cuisines,avgRating,totalRatingsString,areaName,city} = resInfo.cards[0].card.card.info;
       // console.log(resInfo.cards[0].card.card.info)
        const {itemCards} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        //console.log(itemCards)
        const category = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
        return  c.card?.card?.["@type"] ==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        })
        //console.log(category)
        
  return (
    <div className='w-full'>
        <div className='max-w-screen-md mx-auto pt-10'>
               <div className='flex justify-between border-b border-dashed border-gray-500 pb-5'>
                  <div className=''>
                    <h1 className='text-lg font-bold text-gray-700'>{name}</h1>
                    <p className='text-gray-500'>{cuisines.join(', ')}</p>
                    <p className='text-gray-500'>{areaName+', '+city}</p>
                  </div>
                  <div className='border border-gray-400 rounded-md px-3 py-2 '>
                  <div className='flex items-center justify-center gap-2'>
                          <RiStarSFill className=' h-6 w-6'/>
                   <h1>{avgRating}</h1>
                  </div>
                  <p className='border-t border-gray-400 pt-1 text-gray-700'> {totalRatingsString}</p>
                  </div>
               </div>
               <div className='pt-8'>
                  {category.map((items,index) => {
                    return <RestaurantCategory key={items.card.card.title} itemsList={items} showList={index === showIndex? true:false}
                      setShowIndex = {() => setShowIndex(index)}
                    />
                  })}
               </div>
        </div>
    </div>
  )
}

export default RestaurantMenu