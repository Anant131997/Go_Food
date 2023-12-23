import { useState, useEffect } from "react";
import { ALL_RES_URL } from "./constants";

const useAllRestaurants = () => {

    const [allRestaurant, setAllRestaurant] = useState("");
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(ALL_RES_URL);
        const json = await data.json();
        // console.log(json);
        setAllRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log(allRestaurant);
    return allRestaurant;
}

export default useAllRestaurants;