import React from 'react'
//import { ITEM_CDN_URL } from '../utils/constants'
import { CDN_URL } from '../utils/constants';
import { TbCurrencyRupee } from "react-icons/tb";

const ItemList = ({items}) => {
  console.log(items)

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className='grid grid-cols-3 content-between justify-between border-b border-gray-400 py-6 gap-3'>
                <div className='flex flex-col col-span-2'>
                    <h1 className='text-lg font-bold text-gray-800'>{item.card.info.name}</h1>
                    <p className='text-gray-700 '>{item.card.info.price/100 ||item.card.info.defaultPrice/100}</p>
                    <p className='text-gray-400'>{item.card.info.description}</p>
                </div>
                <div className=' w-36 h-24 justify-self-end relative '>
                <div className='absolute bottom-[-9px] left-5'>
                <button className='shadow-lg px-7 py-1 text-red-600 font-bold bg-white rounded-md'>ADD +</button>
                </div>
                
                    <img src={CDN_URL + item.card.info.imageId} alt="Not Available"
                        className=' w-36 h-24 rounded-md'
                    />
                  
                </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList