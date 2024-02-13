import React from "react";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "./Button";
import useRestaurant from "../utils/hooks/useRestaurant";

const FilterButtons = () => {
  //calling custom hook for api call
  const { resList, filteredList, setFilteredList } = useRestaurant();

  const topRatedFilter = () => {
    const topRestro = resList.filter((res) => res.info.avgRating > 4.4);
    setFilteredList(topRestro);
  };

  return (
    <>
      <div>
        <div>
          <h1 className="text-2xl font-bold spacing tracking-[-0.4px] py-6">
            Restaurants with online food delivery in Bangalore
          </h1>
        </div>
        <div className="flex items-center gap-3">
          {/* <Button
            btnIcon={faStar}
            onClick={topRatedFilter}
            btnText="Top Rated"
          /> */}
          <Button name="Filter" icon=<PiSlidersHorizontalDuotone /> />
          <Button name="Sort" icon=<MdOutlineKeyboardArrowDown /> />
          <Button name="Fast Delivery" />
          <Button name="Rating 4.0+" onClick={topRatedFilter} />
          <Button name="Offers" />
          <Button name="Pure Veg" />
        </div>
      </div>
    </>
  );
};

export default FilterButtons;
