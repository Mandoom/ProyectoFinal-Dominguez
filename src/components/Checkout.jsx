import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import CheckoutItem from "./CheckoutItem";
import CheckoutForm from "./CheckoutForm";
import { writeOrder   } from "../firebase/database";

function Checkout () {

    const { cart } = useContext(cartContext)
    
    return ( 
         <div>
            <ul>
            {cart.map((product) => 
                <CheckoutItem key={product.id} product={product} />
            )}
            </ul>
            <div>
                <CheckoutForm />
            </div>
         </div>
    )
}

export default Checkout