import React, { useRef, useState, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import useRestaurant from "../utils/hooks/useRestaurant";
import { CDN_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const CarouselCard = ({ carouselCards }) => {
  const carousel = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const moveNext = () => {
    setMaxIndex(
      Math.floor(carousel.current.scrollWidth / carousel.current.offsetWidth) -
        1
    );
    if (currentIndex <= maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  console.log(carouselCards);
  return (
    <>
      <div className="border-b-[3px] border-[#f0f0f5] pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold spacing tracking-[-0.4px] py-6">
            Top restaurant chains in Bangalore
          </h1>
          <span className="flex items-center gap-3">
            <button
              onClick={movePrev}
              className="h-10 w-10 text-center rounded-full text-[#2e3137] bg-[#e1e1e6] flex items-center justify-center cursor-pointer hover:scale-90 transition-all duration-200 drop-shadow-xl  active:scale-105 disabled:opacity-25 "
              disabled={currentIndex === 0}
            >
              <IoMdArrowBack size={24} />
            </button>
            <button
              onClick={moveNext}
              className="h-10 w-10 text-center rounded-full bg-[#e1e1e6] text-[#2e3137] flex items-center justify-center cursor-pointer hover:scale-90 transition-all duration-200 drop-shadow-xl  active:scale-105 disabled:opacity-25 "
              disabled={currentIndex > maxIndex}
            >
              <IoMdArrowForward size={24} />
            </button>
          </span>
        </div>
        <div
          ref={carousel}
          className="flex gap-8 overflow-hidden scroll-smooth "
        >
          {carouselCards.map((item) => (
            <RestaurantCard
              key={item.info.id}
              resData={item}
              className="bg-black"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
