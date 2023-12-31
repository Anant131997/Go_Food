import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const RestaurantItems = () => {

    const { id } = useParams();

    let counter = 0;
    const [showIndex, setShowIndex] = useState(null);    
    
    const restaurantItems = useRestaurantMenu(id);
    

    const restaurantData = restaurantItems?.cards[0]?.card?.card?.info;
    const resMenu2 =  restaurantItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
   
    const categories = restaurantItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
            c.card?.card?.["@type"] === 
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    if (restaurantItems === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage, feeDetails, avgRating, sla, cloudinaryImageId} = restaurantData;
  
    return(
        <div className="bg-pink-50 py-8 min-h-[65.5vh]">
        <div className="mx-60">
            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold my-6 text-2xl">{name}</h1>  
                    <h3 className="font-medium text-lg my-2">{cuisines.join(", ")}</h3>
                    <h2 className="text-sm my-1 font-medium">{costForTwoMessage}</h2>
                    
                    <p className="text-sm my-1">{feeDetails?.message}</p>
                    <p className="text-sm my-1">⭐{avgRating}</p>
                    <p className="text-sm my-1 mb-14">{sla?.maxDeliveryTime ? sla?.maxDeliveryTime +" Mins" : "Non Deliverable, only self service available"}</p>
                </div>
                <div>
                    <img className="w-52 rounded-lg mb-10" src={CDN_URL+cloudinaryImageId} />
                </div>
            </div>
            {/* Categories Accordian*/}
            {categories.map((category, index)=>{
                return(
                <MenuCategory 
                    key={category.card.card.title} 
                    data={category.card.card} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex = {()=>setShowIndex(index)}
                />)
            })}
        </div>
        </div>
    )
}

export default RestaurantItems;