import { useEffect, useState } from "react";
import { RES_URL } from "../utils/constants";


const useRestaurantMenu = (id) => {

    const [ resName, setResName] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        const data = await fetch(RES_URL+id);
        console.log(data.url);
        const json = await data.json();
        setResName(json.data);
    }

    return resName;
}

export default useRestaurantMenu;