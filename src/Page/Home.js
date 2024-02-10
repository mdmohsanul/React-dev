import React from "react";
import Header from "../component/Header";
import Main from "./Main";

const Home = () => {
  return (
    <>
      <div className="h-auto w-full bg-white mt-24">
        <div className="max-w-screen-lg mx-auto">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
