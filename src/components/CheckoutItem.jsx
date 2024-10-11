import { useContext } from "react";
import { cartContext } from "../context/cartContext";

function CheckoutItem ({product}) {

    const { cart } = useContext(cartContext)
     
    return (
        <li>
             <p>{ product.name + ' X '  + product.qty + ' subtotal = $'   +product.price*product.qty}</p>  
        </li>
    ) 
}

export default CheckoutItem