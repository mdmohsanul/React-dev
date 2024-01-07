import React from 'react';
import { useEffect,useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { Menu_API } from '../utils/constants';
import useRestaurantMenu from '../utils/hooks/useRestaurantMenu';

const RestaurantMenu = () => {
   const {resId} = useParams()
  // console.log(params)
  
    const resInfo = useRestaurantMenu(resId);

 if (resInfo === null) return <Shimmer/>
        const {name,cuisines} = resInfo.cards[0].card.card.info;
        const {itemCards} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        //console.log(itemCards)
        const category = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
        return  c.card?.card?.["@type"] ==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        })
        console.log(category)
        console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
  return (
    <div className='w-full'>
        <div className='max-w-screen-lg mx-auto'>
               <div>
                  <h1>{name}</h1>
                  <h2>
                  {cuisines.join(',')}
                  </h2>
                  <ul>
                  {itemCards.map(items => <li key={items.card.info.id}>{items.card.info.name}</li>)}
                    <li></li>
                  </ul>
               </div>
        </div>
    </div>
  )
}

export default RestaurantMenu