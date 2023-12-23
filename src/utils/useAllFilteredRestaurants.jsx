import { useState, useEffect } from "react";
import { ALL_RES_URL } from "./constants";

const useAllRestaurants = () => {

    const [filteredCards, setFilteredCards] = useState("");
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(ALL_RES_URL);
        const json = data.json();
        setFilteredCards(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return filteredCards;
}

export default useAllRestaurants;