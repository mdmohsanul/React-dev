import React,{useState} from "react";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import ItemList from "./ItemList";

const RestaurantCategory = ({itemsList,showList,setShowIndex}) => {

//const[showList,setShowList]= useState(false)
const handleClick = () =>{
  // setShowList(!showList)
    setShowIndex()
}
//console.log(itemsList)
const {title} = itemsList?.card?.card;
    return (
        <div className="pt=7">
        <div className=" bg-gray-50 shadow-lg my-4 p-4">
        <div className="flex justify-between pb-6 cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-xl">{title}</span>
            <span>{showList?<IoIosArrowUp />:<IoIosArrowDown />}</span>
        </div>
        
           {showList && <ItemList items={itemsList.card.card.itemCards}/>} 
        </div>
        </div>
    )
}

export default RestaurantCategory