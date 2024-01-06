import React from 'react'
import { useState,useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'

const Main = () => {
    const [resList,setResList] = useState([]);
    const [filteredList,setFilteredList] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() =>{
        fetchRestro()
  },[])
 

const fetchRestro = async() =>{
    const list = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const json = await list.json();
      //console.log(json)
      setResList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
      //console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
}
const filtered = () =>{
  const filteredRestro = resList.filter((res) => res.info.avgRating > 4.4);
  // !resList ? setResList(filteredRestro) :setResList(resList) 
  setFilteredList(filteredRestro);
}
    
  return resList.length === 0 ? <Shimmer/> : (
    <div className='h-auto w-full bg-slate-200'>
        <div className='max-w-screen-lg mx-auto'>
             <div className='h-20 flex items-center '>
            <div>
              <input type="text" className='py-3 pr-4' value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
              }}/>
              <button className='ml-3' onClick={() => {
                   const searchedRestro = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                   setFilteredList(searchedRestro);
              }}>Search</button>
             
            </div>
                 <button onClick={filtered} className='border border-black p-3 m-3 active:bg-slate-400 hover:bg-slate-400'>Top Rated</button>
             </div>
             <div className='flex flex-wrap gap-5 '>
             {filteredList.map((lists) => (
                <RestaurantCard resData={lists}/>
             ))}
             </div>
        </div>
    </div>
  )
}

export default Main