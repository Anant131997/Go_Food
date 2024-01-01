import { useDispatch, useSelector } from "react-redux";
import CategoryItemsList from "./CategoryItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
        console.log("cleared");
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items)
    return(
        <div className="text-center m-4 p-4 min-h-[62vh]">
            <h1 className="text-2xl font-bold">CART</h1>
            {cartItems.length === 0 ? 
            <h1 className="m-8 font-semibold text-lg text-slate-700">Your CART is empty, that doesn't mean your stomach should also be empty. <br />
            Go! grab someting yummy to eat 😋</h1> :
            <button className="m-2 p-2 bg-red-500 text-white rounded-lg mr-auto" onClick={handleClearCart}>Clear Cart</button>
            }
             
            <div className="w-6/12 m-auto">
                <CategoryItemsList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;