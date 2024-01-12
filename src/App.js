import React,{lazy, Suspense,useEffect,useState} from "react";
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import Help from "./component/Help";
import Contact from "./component/Contact";
import Error from './component/Error';
import RestaurantMenu from "./component/RestaurantMenu";
import userContext from "./utils/context/userContext";
import Cart from "./component/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/Redux/appStore";

//Lazy Loading
const Grocery = lazy( () => import('./component/Grocery'));

 

const AppLayout = () => {

    //changing the value of userContext
    const [userName ,setUserName] = useState()
    useEffect(() => {
        const data ={name:'Mosam'};
       setUserName(data.name)
    },[])

    return (
       //we can also pass setUserName function from here and change it in any other component
       //we are set this user name from main.js file
       //its like we are tight our userContext from state variable whenever our state variable changes usercontext will change
       <Provider store={appStore}>
       <userContext.Provider value={{loggedInUser:userName,setUserName}}>
        <>
            <Header />
            <Outlet />
            </>
            </userContext.Provider>
      
            </Provider>
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
            },
            {
                path:'/cart',
                element:<Cart/>
            }

        ],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);