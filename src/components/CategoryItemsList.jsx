import { CDN_URL } from "../utils/constants";
import Image_not_available from "../images/Image_not_available.png";

const CategoryItemsList = ({items}) => {
    console.log(items);
    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12 mr-4">
                        <div className="py-2">
                            <span className="text-lg">{item.card.info.name}</span>
                            <span className="text-lg"> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-sm text-slate-700 mb-2">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 ml-4 my-2">
                        <div className="absolute ml-10 mt-[100px]">
                            <button className="text-white shadow-lg px-4 py-2 rounded-md font-semibold bg-sky-700 hover:shadow-md hover:scale-95 hover:transform origin-center transition-all duration-100 ease-in active:bg-blue-800">Add +</button>
                        </div>
                        <img src={item.card.info.imageId !== undefined ? CDN_URL+item.card.info.imageId : Image_not_available} className="w-40 h-32 rounded-lg mb-2"/> 
                    </div> 
                </div>
                
            ))}
        </div>
        )
    }

export default CategoryItemsList;