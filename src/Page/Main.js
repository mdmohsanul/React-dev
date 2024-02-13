import React, { useState, useContext, useRef } from "react";
import RestaurantCard, { cardWithDiscount } from "../component/RestaurantCard";
import Shimmer from "../component/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import userContext from "../utils/context/userContext";
import useRestaurant from "../utils/hooks/useRestaurant";
import Button from "../component/Button";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Main = () => {
  //calling custom hook for api call
  const { resList, filteredList, setFilteredList } = useRestaurant();
  //search bar
  const [searchText, setSearchText] = useState("");
  // useContext api usage
  const { loggedInUser, setUserName } = useContext(userContext);

  //higher order component usage
  const RestaurantCardPromoted = cardWithDiscount(RestaurantCard);

  // State to manage modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You're Offline</h1>;
  }
  const topRatedFilter = () => {
    const topRestro = resList.filter((res) => res?.info?.avgRating > 4.4);
    setFilteredList(topRestro);
  };

  // veg filter
  const vegFilter = () => {
    const veg = resList.filter((res) => res?.info?.veg === true);
    setFilteredList(veg);
  };

  //fast Delivery filter
  const fastDeliveryFilter = () => {
    const fast = resList.filter((list) => list?.info?.sla?.deliveryTime <= 20);
    setFilteredList(fast);
  };
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="h-full ">
      <div>
        <h1 className="text-2xl font-bold spacing tracking-[-0.4px] py-6">
          Restaurants with online food delivery in Bangalore
        </h1>

        <div className="flex items-center gap-3">
          <Button
            name="Filter"
            icon=<PiSlidersHorizontalDuotone />
            onClick={toggleModal}
          />
          <Button name="Sort" icon=<MdOutlineKeyboardArrowDown /> />
          <Button name="Fast Delivery" onClick={fastDeliveryFilter} />
          <Button name="Rating 4.0+" onClick={topRatedFilter} />
          <Button name="Offers" />
          <Button name="Pure Veg" onClick={vegFilter} />
        </div>
        {/* Modal */}
        {isModalVisible && (
          <div>
            <div className="h-96 w-2/6 bg-red-500  z-20  mx-auto fixed top-1/4 left-1/4">
              <div className="flex justify-between px-3 border-[#f0f0f5] pb-4">
                <h1>Filter</h1>
                <span className="close cursor-pointer" onClick={toggleModal}>
                  &times;
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="h-20 flex items-center justify-around pt-4">
        <div>
          <input
            type="text"
            className="py-3 pr-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="ml-3"
            onClick={() => {
              const searchedRestro = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(searchedRestro);
            }}
          >
            Search
          </button>
        </div>

        <span className=" px-2 py-1">
          <label>UserName : </label>
          <input
            className="px-2 y-1"
            type="search"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </span>
      </div>
      <div className="flex flex-wrap gap-5 pt-11">
        {/* isFiltered ?
                 filteredArray.map((lists) => (
           <Link key={lists.info.id} to={'/restaurant' + lists.info.id}> <RestaurantCard  resData={lists}/></Link>
             )): */}
        {filteredList.map((lists) => (
          <Link key={lists.info.id} to={"/restaurants/" + lists.info.id}>
            {lists.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardPromoted resData={lists} />
            ) : (
              <RestaurantCard resData={lists} />
            )}
          </Link>
        ))}
      </div>
      {isModalVisible && (
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] opacity-80 z-10"></div>
      )}
    </div>
  );
};

export default Main;
