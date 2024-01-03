// import NoResFound from "./NoResFound.jsx";
import ResturantCard from "./ResturantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { ALL_RES_URL } from "../utils/constants";
import  cancel  from "../images/cancel.png";
import offline from "../images/offline.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import NoResFound from "./NoResFound";


const Body = () => {

    const [resturantList, setResturantList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredCards, setFilteredCards] = useState([]);
    const [showCrossIcon, setShowCrossIcon] = useState(false);
   
    useEffect(()=>{
        fetchdata();
    }, []);
   
    const fetchdata = async () => {
        try{
            const api_data = await fetch(ALL_RES_URL);
            const json = await api_data.json();
            console.log(json);
            setResturantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredCards(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }catch(error){
            console.error("Error fetching data:", error);
        }
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return(
            <div className="min-h-[66vh] flex flex-col justify-center items-center">
                <img className="w-40 m-2" src={offline} />
                <h3 className="font-bold">
                    Looks like you are offline. Please check your internet connection !!
                </h3>
            </div>
        )
    }

    const handleSearch = () => {
        if(searchInput.length === 0){
          alert("Please enter something in search box");
        } else {
            const searchedCard = resturantList.filter((resturant) =>
            resturant.info.name.toLowerCase().includes(searchInput.toLowerCase())
          );
          setFilteredCards(searchedCard);
          setShowCrossIcon(true);
          setSearchInput("");
       };
        }
        
    {console.log(resturantList)}
    // resturantList.length === 0 ? <Shimmer /> :
    return resturantList.length === 0 ? <Shimmer /> : (
    <div className="bg-pink-50 min-h-[200vh] flex flex-col">
        <div className="filter flex items-center ml-24 mr-0 my-1">
            <div className="search flex mx-2 my-4 pl-4 w-[420px]">
                <div>
                <input className="border border-solid border-black pl-2 pr-2 py-2 rounded-lg" type="text" value={searchInput} onChange={(event)=>{
                    return(
                    setSearchInput(event.target.value)

                    )
                }}/>

                <button className="button px-4 py-2 bg-green-600 m-4 mr-0 rounded-lg text-white font-medium shadow-green-500/50 hover:bg-green-700" 
                onClick={()=>{
                    handleSearch();
                }}>Search</button>
                </div>
                <div className="py-4 ml-0">
                    {showCrossIcon && (
                    <img className="mx-2 my-0 h-10 cursor-pointer" src={cancel} 
                    onClick={() => {
                        // Reset the filtered cards and hide the cross icon
                        setFilteredCards(resturantList);
                        setShowCrossIcon(false);
                      }}
                    />
                )}
                </div>
            </div>
            
            
            <div className="flex ml-4 items-center">
                <button className="button px-4 py-2 bg-gray-500 rounded-lg text-white font-medium shadow-gray-500/50 hover:bg-gray-700"
                onClick={()=>{
                    const filteredList = resturantList.filter(
                        (resturant) => resturant.info.avgRating >= 4.2
                    );
                    console.log(filteredList);
                    setFilteredCards(filteredList);
                    setShowCrossIcon(true);
                }}>Top Rated Restaurants</button>
                {/* <div className="py-4 ml-0">
                    {showCrossIcon && (
                    <img className="mx-2 my-0 h-10 cursor-pointer" src={cancel} 
                    onClick={() => {
                        // Reset the filtered cards and hide the cross icon
                        setFilteredCards(resturantList);
                        setShowCrossIcon(false);
                      }}
                    />
                )}
            </div> */}
            </div>
        </div>
        {/* {filteredCards.length === 0 ? <NoResFound /> : */}
        <div className="flex flex-wrap mx-24 h-80">
        {/* filteredCards.length === 0 ? <NoResFound /> : */}
            {filteredCards.length === 0 ? <NoResFound /> : (filteredCards.map((resturant) =>(
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