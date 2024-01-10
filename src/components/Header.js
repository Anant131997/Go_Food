import logo from "../images/logo.png";
import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    const [status, setStatus] = useState("Login");
    return(
    <div className="flex justify-between bg-pink-50 shadow-lg mb-1 px-14">
        <div id="logo-component">
            <Link to="/"><img className="w-44" src={logo} /></Link>
        </div>
        <div className="flex items-center">
            <ul className="flex m-4 items-center">
                <li className="px-4 font-semibold text-slate-800">{onlineStatus ? "Online : ✅" : "Offline : 🔴"}</li>
                <li className="px-4 font-semibold text-slate-800"><Link to="/">Home</Link></li>
                <li className="px-4 font-semibold text-slate-800"><Link to="/about">About Us</Link></li>
                <li className="px-4 font-semibold text-slate-800"><Link to="/contact">Contact</Link></li>
                <li className="px-4 font-semibold text-slate-800"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4 font-bold text-lg text-slate-800"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                <button className="px-4 py-2 m-4 mr-8 w-[100px] rounded-lg bg-green-600 text-white font-medium shadow-green-500/50 hover:bg-green-700" onClick={()=>{
                    status === "Login" ? 
                    setStatus("Logout") : setStatus("Login")
                    }}>{status}
                </button>
                {/* <p className="text-lg font-bold">{loggedInUser}</p> */}
            </ul>
        </div>
    </div>
    )
};

export default Header;

