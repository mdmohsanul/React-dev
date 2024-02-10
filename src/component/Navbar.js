import logo from "../assets/images/logo-nav.png";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import userContext from "../utils/context/userContext";
import { useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";
import { LuBadgePercent } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { IoHelpBuoyOutline } from "react-icons/io5";

const Header = () => {
  const [btnStatus, setBtnStatus] = useState("Sign In");
  const onlineStatus = useOnlineStatus();
  //recieving context api
  const loggedInData = useContext(userContext);
  //it returns a object so we have to destructure it
  const { loggedInUser } = loggedInData;

  //subscribing our store using useselector hook which is given bu react-redux
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <div className=" bg-white w-full  fixed top-0 z-10 boxShadow	">
        <div className="max-w-[1350px]  mx-auto ">
          <div className="flex items-center justify-between ">
            <div className="bg-slate-300 ">
              <Link to="/">
                <img src={logo} alt="" className="bg-white h-20   w-fit " />
              </Link>
            </div>
            <div>
              <ul className="flex gap-12 items-center justify-center cursor-pointer text-[#3d4152] text-lg ">
                <li>{onlineStatus ? "🔴 online" : "🟤 offline"}</li>

                <Link to="/search">
                  <li className="flex items-center justify-center gap-2">
                    <IoMdSearch size={22} />
                    <span>
                      <span className="font-semibold">S</span>earch
                    </span>
                  </li>
                </Link>
                <Link to="/offers">
                  <li className="flex items-center justify-center gap-2">
                    <LuBadgePercent size={22} />

                    <span>
                      <span className="font-semibold">O</span>ffers
                    </span>
                  </li>
                </Link>
                <Link to="help">
                  <li className=" flex items-center justify-center gap-2">
                    <IoHelpBuoyOutline size={22} />
                    <span>
                      <span className="font-semibold">H</span>elp
                    </span>
                  </li>
                </Link>

                <Link to="/cart">
                  <li className="relative">
                    <span>
                      <span className="font-semibold">C</span>art
                    </span>

                    <span className="absolute top-[-10px] right-[-12px] text-lg ">
                      {cartItems.length}
                    </span>
                  </li>
                </Link>
                <li className="flex items-center justify-center gap-2">
                  <FaRegUser size={22} />
                  <button
                    className=""
                    onClick={() => {
                      btnStatus === "Sign In"
                        ? setBtnStatus("Sign Out")
                        : setBtnStatus("Sign In");
                    }}
                  >
                    {btnStatus}
                  </button>
                </li>
                <li className="font-bold">{loggedInUser}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
