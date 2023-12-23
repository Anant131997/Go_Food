import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantItems from "./components/RestaurantItems";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";


// -----------------------------------------Other Names of Lazy Loading--------------------------------
// ------Chunking-------------
// ------Code Splitting-------
// ------Dynamic Bundling-----
// ------Lazy Loading---------
// ------On Demand Loading----
// ------Dynamic Import-------
// ----------------------------------------------------------------------------------------------------


const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name: "Anant"
        }
        setUserName(data.name);
    },[]);

    return(
        // Context.provider is used to chenge any value set in the webapp using createContext and UseContext method.
        // Suppose we wrap only <Header> inside <Context.provider value={{loggedInUser:userName}}> </Context.provider> then the 
        // changes happen only in the header and all the other part of the page will have the default falue as was coming earlier. 
    <UserContext.Provider value={{loggedInUser:userName}}>
    <div>
        <Header />
        <Outlet />  
    </div>
    </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}>
                            <Grocery />
                        </Suspense>
            },
            {
                path: "/restaurants/:id",
                element: <RestaurantItems />
            }
        ],
        errorElement: <Error />
    },
    
])

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<RouterProvider router={appRouter} />);