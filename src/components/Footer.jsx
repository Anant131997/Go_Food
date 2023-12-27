import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Footer = () => {

    const {loggedInUser} = useContext(UserContext);

    return(
        <div className="bg-green-600 mt-auto flex text-center justify-center flex-col py-4">
            <h2 className="text-white text-lg font-semibold">Made with 💖 in React</h2>
            <p className="text-slate-100">© {loggedInUser}@2023</p>
        </div>
    )
}

export default Footer;