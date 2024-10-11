import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import CartItem from "./CartItem";
import {  Link } from 'react-router-dom'


function Cart () {
    
    const {cart, orderTotal} = useContext(cartContext)
    
   
  // Check if the cart is empty
  if (cart.length === 0) {
    return (
      <div>
        <h2>Your cart is empty.</h2>
        <p>You have no items in your shopping cart.</p>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  // If the cart is not empty, display the cart items and total
  return (
    <div>
      <ul>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <p>Total: ${orderTotal().toFixed(2)}</p>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}



export default Cart