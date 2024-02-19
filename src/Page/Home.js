import React from "react";
import Header from "../component/Header";
import CarouselCard from "../component/CarouselCard";
import Main from "./Main";
import useRestaurant from "../utils/hooks/useRestaurant";
import Shimmer from "../component/Shimmer";

const Home = () => {
  const { circleCarouselCards, carouselCards, resList } = useRestaurant();
  return circleCarouselCards.length === 0 || carouselCards.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="h-auto w-full bg-white mt-24 ">
        <div className="max-w-screen-lg mx-auto">
          <Header circleCarouselCards={circleCarouselCards} />
          <CarouselCard carouselCards={carouselCards} />

          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
