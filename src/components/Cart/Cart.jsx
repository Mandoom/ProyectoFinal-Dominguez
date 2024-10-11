import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import CartItem from "./CartItem";
import {  Link } from 'react-router-dom'


function Cart ({ sectionTitle, sectionSubtitle }) {
    
    const {cart, orderTotal} = useContext(cartContext)
    
   
  // Check if the cart is empty
  if (cart.length === 0) {
    return (
      <div className="container cart ">
         <h2 className='sectionTitle'>{sectionTitle}</h2>
         <h3 className='sectionSubitle'>Your cart is empty</h3>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  // If the cart is not empty, display the cart items and total
  return (
    <div className="container cart">
          <div className="sectionHeadings">
            <h2 className='sectionTitle'>{sectionTitle}</h2>
            <h3 className='sectionSubTitle'>{sectionSubtitle}</h3>
          </div>
      <ul className="cartItems">
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <p>Total: ${orderTotal()}</p>
        <div className="cartButtons">
          <Link to="/checkout">Checkout</Link>
          <Link to="/">Continue Shopping</Link>
        </div>
    </div>
  );
}



export default Cart