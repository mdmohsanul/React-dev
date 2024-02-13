import React, { useEffect, useState } from "react";

// It is a custom hook to fetch the swiggy home page api

const useRestaurant = () => {
  const [circleCarouselCards, setCircleCarouselCards] = useState([]);
  const [carouselCards, setCarouselCards] = useState([]);
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchRestro();
  }, []);

  const fetchRestro = async () => {
    const list = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await list.json();
    //console.log(json)
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCircleCarouselCards(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setCarouselCards(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // // console.log(
    // //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.info.badges.includes(
    // //     "pureveg"
    // //   )
    // );
  };
  return {
    resList,
    filteredList,
    setFilteredList,
    circleCarouselCards,
    carouselCards,
  };
};

export default useRestaurant;
