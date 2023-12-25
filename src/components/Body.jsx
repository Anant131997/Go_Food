// import NoResFound from "./NoResFound.jsx";
import ResturantCard from "./ResturantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { ALL_RES_URL } from "../utils/constants";
import  cancel  from "../images/cancel.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import NoResFound from "./NoResFound";


const Body = () => {

    const [resturantList, setResturantList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredCards, setFilteredCards] = useState([]);
    const [showCrossIcon, setShowCrossIcon] = useState(false);
    console.log(resturantList);
   
    useEffect(()=>{
        fetchdata();
    }, []);
   
    const fetchdata = async () => {
        try{
            const api_data = await fetch(ALL_RES_URL);
            
            const json = await api_data.json();
            setResturantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredCards(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log(json);
        }catch(error){
            console.error("Error fetching data:", error);
        }
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return(
            <h3 className="m-8 font-bold">
                Looks like you are offline. Please check your internet connection !!
            </h3>
        )
    }

    const handleSearch = () => {
        const searchedCard = resturantList.filter((resturant) =>
          resturant.info.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredCards(searchedCard);
        setShowCrossIcon(true);
        setSearchInput("");
    };
    
    return resturantList.length === 0 ? <Shimmer /> : (
    <div className="bg-pink-50 min-h-[210vh] flex flex-col">
        <div className="filter flex items-center mx-24 my-1">
            <div className="search p-4 m-4">
                <input className="border border-solid border-black pl-2 pr-2 py-2 rounded-lg" type="text" value={searchInput} onChange={(event)=>{
                    return(
                    setSearchInput(event.target.value)

                    )
                }}/>

                <button className="button px-4 py-2 bg-green-600 m-4 mr-8 rounded-lg text-white font-medium shadow-green-500/50 hover:bg-green-700" 
                onClick={()=>{
                    handleSearch();
                }}>Search</button>

            </div>
            <div className="flex items-center">
                <button className="button px-4 py-2 bg-gray-500 rounded-lg text-white font-medium shadow-gray-500/50 hover:bg-gray-700"
                onClick={()=>{
                    const filteredList = resturantList.filter(
                        (resturant) => resturant.info.avgRating >= 4.2
                    );
                    console.log(filteredList);
                    setFilteredCards(filteredList);
                    setShowCrossIcon(true);
                }}>Top Rated Restaurants</button>
                {showCrossIcon && (
                    <img className="mx-2 h-10 cursor-pointer" src={cancel} 
                    onClick={() => {
                        // Reset the filtered cards and hide the cross icon
                        setFilteredCards(resturantList);
                        setShowCrossIcon(false);
                      }}
                    />
                )}
            </div>
        </div>
        {/* {filteredCards.length === 0 ? <NoResFound /> : */}
        <div className="flex flex-wrap mx-24 h-80">
        {/* filteredCards.length === 0 ? <NoResFound /> : */}
        {console.log(filteredCards.length)}
            {filteredCards.length === 0 ? (<NoResFound />) : (filteredCards.map((resturant) =>(
                <Link key={resturant.info.id} to={"/restaurants/"+ resturant.info.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ResturantCard resInfo={resturant}/>
                </Link>
            )) 
            )}
        </div>
        {/* }  */}
    </div>
    )
};

export default Body;