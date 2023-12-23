import logo from "../images/logo.png";
import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const [status, setStatus] = useState("Login");
    return(
    <div className="flex justify-between bg-pink-50 shadow-lg mb-1 px-12">
        <div id="logo-component">
            <Link to="/"><img className="w-56" src={logo} /></Link>
        </div>
        <div className="flex items-center">
            <ul className="flex p-12 m-4 items-center">
                <li className="px-4 font-semibold text-slate-800">{onlineStatus ? "Online : ✅" : "Offline : 🔴"}</li>
                <li className="px-4 font-semibold text-slate-800"><Link to="/">Home</Link></li>
                <li className="px-4 font-semibold text-slate-800"><Link to="/about">About Us</Link></li>
                <li className="px-4 font-semibold text-slate-800"><Link to="/contact">Contact</Link></li>
                <li className="px-4 font-semibold text-slate-800"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4 font-semibold text-slate-800">Cart</li>
                <button className="px-4 py-2 m-4 mr-8 w-[100px] rounded-lg bg-green-600 text-white font-medium shadow-green-500/50" onClick={()=>{
                    status === "Login" ? 
                    setStatus("Log Out") : setStatus("Login")
                    }}>{status}
                </button>
                <p className="text-lg font-bold">{loggedInUser}</p>
            </ul>
        </div>
    </div>
    )
};

export default Header;

