import React, { useState } from "react";
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { filterList, filterList } from "../../data/filter";
const FilterMenu = ({ onClick }) => {
  const list = filterList;
  const [sort, setSort] = useState(false);
  const [veg, setVeg] = useState(false);
  const [filter, setfilter] = useState(false);
  const [delivery, setdelivery] = useState(false);
  const [rating, setrating] = useState(false);
  const filterContent = () => {
    setfilter(true);
  };
  const sortContent = () => {
    setSort(true);
  };
  const deliveryContent = () => {
    setdelivery(true);
  };
  const ratingContent = () => {
    setrating(true);
  };
  const vegContent = () => {
    setVeg(true);
  };
  return (
    <>
      <div>
        <div className="h-96 w-3/6 bg-[#fff] rounded-2xl z-50  mx-auto fixed top-2/4 left-2/4 transform translate-x-[-50%] translate-y-[-50%]">
          <div className="flex justify-between items-center px-5 py-7  pb-4  border-b-2 border-[#b0b0be] text-[#493c3c]">
            <h1 className="font-bold text-2xl">Filter</h1>
            <span
              className="close cursor-pointer rounded-[50%] p-2 shadow-md "
              onClick={onClick}
            >
              <IoCloseSharp size={20} />
            </span>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="col-span-1   border-r-2 border-[#b0b0be]">
              <ul className="flex flex-col cursor-pointer gap-5 text-lg font-semibold items-start justify-center text-[#584747] pl-7 pt-5 pb-3">
                <li onClick={filterContent}>Filter</li>
                <li onClick={sortContent}>Sort</li>
                <li onClick={deliveryContent}>Delivery</li>
                <li onClick={ratingContent}>Ratings</li>
                <li onClick={vegContent}>Veg</li>
              </ul>
            </div>
            <div className="col-span-2">
              {filter && <div>filterdata</div>}
              {sort && <div>sortdata</div>}
              {delivery && <div>deliveryada</div>}
              {rating && <div>ratings data</div>}
              {veg && <div>vag dada</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterMenu;
