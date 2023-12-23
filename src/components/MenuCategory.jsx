import CategoryItemsList from "./CategoryItemsList";
import { useState } from "react";

const MenuCategory = ({data, showItems, setShowIndex}) => {

    let counter = 0;
    const [showAndCollapse, setShowAndCollapse] = useState(false);

    const handleClick = () =>{
        setShowIndex();
        setShowAndCollapse(!showAndCollapse);
    }
    
    return (
        <div className="w-8/12 m-auto my-4 shadow-xl rounded-lg cursor-pointer text-center">
            <div>
                <div className="bg-slate-200 rounded-lg p-4 w-auto flex justify-between" onClick={handleClick}>
                    <span className="font-bold">{data.title} - ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {/* Accordian Body */}
                <div className="bg-slate-100 rounded-lg p-4">
                    {showAndCollapse && showItems && <CategoryItemsList items={data.itemCards}/>}
                </div>
            </div>
        </div>
    )
}

export default MenuCategory;