import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./Page/Home";
import Search from "./Page/Search";
import Help from "./Page/Help";
import Offers from "./Page/Offers";
import Cart from "./Page/Cart";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import userContext from "./utils/context/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/Redux/appStore";

//Lazy Loading (help)
//const Help = lazy(() => import("./Page/Help"));

const AppLayout = () => {
  //changing the value of userContext
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = { name: "Mosam" };
    setUserName(data.name);
  }, []);

  return (
    //we can also pass setUserName function from here and change it in any other component
    //we are set this user name from main.js file
    //its like we are tight our userContext from state variable whenever our state variable changes usercontext will change
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <>
          <Navbar />
          <Outlet />
        </>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
