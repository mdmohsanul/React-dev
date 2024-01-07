import React from 'react'
import { useState,useEffect } from 'react'
import RestaurantCard,{cardWithDiscount} from './RestaurantCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/hooks/useOnlineStatus'


const Main = () => {
    const [resList,setResList] = useState([]);
    const [filteredList,setFilteredList] = useState([])
    const [searchText, setSearchText] = useState('')
    
    const RestaurantCardPromoted = cardWithDiscount(RestaurantCard)

  //   const [filteredArray, setFilteredArray] = useState([]);
  // const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() =>{
        fetchRestro()
  },[])
 

const fetchRestro = async() =>{
    const list = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const json = await list.json();
      //console.log(json)
      setResList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
     // setFilteredArray(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
      //console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
}
const handleToggle = () =>{
  const filteredRestro = resList.filter((res) => res.info.avgRating > 4.4);
  setFilteredList(filteredRestro);
}

const onlineStatus = useOnlineStatus()
if(onlineStatus === false){
  return (
    <h1>You're Offline</h1>
  )
}
// const handleToggle = () => {
//   if (isFiltered) {
//     // If currently filtered, switch to the original array
//     setFilteredArray(null);
//   } else {
//     // If not filtered, apply your filter condition here
//     // For example, let's filter out items with a specific property
//     const filteredItems = resList.filter(item => item.info.avgRating > 4.4);
//     setFilteredArray(filteredItems);
//   }

//   // Toggle the filter state
//   setIsFiltered(!isFiltered);
// };
    
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
              
                 <button onClick={handleToggle} className='border border-black p-3 m-3 active:bg-slate-400 hover:bg-slate-400'>Top Rated</button>
             </div>
             <div className='flex flex-wrap gap-5 '>
               {/* isFiltered ?
                 filteredArray.map((lists) => (
           <Link key={lists.info.id} to={'/restaurant' + lists.info.id}> <RestaurantCard  resData={lists}/></Link>
             )): */}
              {filteredList.map((lists) => (
              <Link key={lists.info.id} to={'/restaurants/' + lists.info.id}> 
              {lists.info.aggregatedDiscountInfoV3 ? <RestaurantCardPromoted resData={lists}/>: <RestaurantCard  resData={lists}/>}
              </Link>
             ))}
             </div>
        </div>
    </div>
  )
}

export default Main