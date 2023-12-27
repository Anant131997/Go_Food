// import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/UserContext";
import { useContext } from "react";


const ResturantCard = (props) => {
    const { resInfo } = props;
    const {loggedInUser} = useContext(userContext);

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } = resInfo?.info;

    const {
        deliveryTime
    } = resInfo?.info?.sla;

    return(
    <div className="p-3 m-4 w-72 h-[400px] rounded-lg bg-white hover:shadow-md hover:scale-95 hover:transform origin-center transition-all duration-100 ease-in cursor-pointer">
        <img className="mb-4 w-72 h-[200px] rounded-lg" src={CDN_URL+cloudinaryImageId} />
        <h2 className="font-bold py-1 text-lg truncate">{name}</h2>
        <h4 className="truncate">{cuisines.join(", ")}</h4>
        <h5>⭐{avgRating} stars</h5>
        <h5>{costForTwo}</h5>
        <h5>{deliveryTime} minutes</h5>
        {/* <h5 className="font-bold">{loggedInUser}</h5> */}
    </div>
    )
}

export default ResturantCard;