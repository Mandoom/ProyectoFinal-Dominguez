import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import CartItem from "./CartItem";
import {  Link } from 'react-router-dom'


function Cart () {
    
    const {cart} = useContext(cartContext)
    
    return(
    <div>
        <ul>
            {cart.map((product) => 
                <CartItem key={product.id} product={product}/>
            )}
        </ul>
        <Link to={'/checkout'}>Checkout</Link>
    </div>
    )
}


export default Cart