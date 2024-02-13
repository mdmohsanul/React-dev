import React from "react";
import { CDN_URL } from "../utils/constants";
import { CiStar } from "react-icons/ci";
import { MdStars } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import food from "../assets/images/food-img.avif";

const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log(resData)
  const { name, avgRating, areaName, cloudinaryImageId, cuisines, sla } =
    resData?.info;

  return (
    <div className="w-60  p-2  hover:cursor-pointer ">
      <div className=" w-full object-cover ">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt=""
          className="w-full  h-32 rounded-lg"
        />
      </div>
      <div className="p-2">
        <h2 className="font-bold text-lg truncate text-[#414449]">{name}</h2>
        <h3 className="font-bold flex text-[#414449]">
          <span className=" text-red-600 pr-1">
            <MdStars size={24} />
          </span>
          {avgRating}
          <span className="flex items-center">
            <LuDot />
          </span>
          <span>{sla?.deliveryTime} mins</span>
        </h3>
        <p className="truncate text-[#986a6d]">{cuisines.join(",")}</p>
        <p className="truncate text-[#986a6d]">{areaName}</p>
      </div>
    </div>
  );
};

//Higher Order Function
// input -- Restaurant Card ==> restaurantCardWithDiscount
export const cardWithDiscount = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-1 bg-black text-white">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
