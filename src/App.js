import React,{lazy, Suspense} from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import Help from "./component/Help";
import Contact from "./component/Contact";
import Error from './component/Error';
import RestaurantMenu from "./component/RestaurantMenu";

//Lazy Loading
const Grocery = lazy( () => import('./component/Grocery'));

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
              path:'/',
              element:<Main/>
            },
            {
                path:'/help',
                element:<Help/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);