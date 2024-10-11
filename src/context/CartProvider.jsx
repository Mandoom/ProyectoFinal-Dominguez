import { cartContext } from "./cartContext"
import { useState } from "react"

function CartProvider ({ children }) {
   const [cart, setCart] = useState( [ ])

   const addToCart = (newItem) => {

    setCart( (prevCart) => {
        //check if item exists
        const existingItemIndex = prevCart.findIndex(
            (item) => item.id === newItem.id
        );

        if (existingItemIndex >= 0) {
            const updatedCart = [...prevCart];
            updatedCart[existingItemIndex] = {
                ...updatedCart[existingItemIndex],
                 qty: updatedCart[existingItemIndex].qty + newItem.qty,
        };
        return updatedCart;
        } else {
             // If item doesn't exist, add it to the cart
          return [...prevCart, newItem];
        }
    } ); 


   }

   const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const orderTotal = () => {
    const prices = cart.map((product) => {return product.price * product.qty})
    const total = prices.reduce( (acum , current) => acum + current, 0);
    return total
  }

  const clearCart = () => {
    setCart([])
    console.log('cart clear attempt')
  }

    return (
        <cartContext.Provider value={ {cart, addToCart, removeFromCart, orderTotal, clearCart } }> 
           {children} {/* we use children as we know that cart provider will be wrapping something/everything */}
           
        </cartContext.Provider>
    )
}

export default CartProvider

