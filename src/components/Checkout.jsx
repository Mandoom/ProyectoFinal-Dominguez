import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import CheckoutItem from "./CheckoutItem";
import CheckoutForm from "./CheckoutForm";
import { writeOrder   } from "../firebase/database";

function Checkout () {

    const { cart, orderTotal } = useContext(cartContext)
    
    if (cart.length === 0) {
        return (
          <div>
            <h2>Your cart is empty.</h2>
            <p>You have no items in your shopping cart.</p>
            <Link to="/">Continue Shopping</Link>
          </div>
        );
      }


    return ( 
         <div className="">
           <div>
            <ul>
                {cart.map((product) => 
                    <CheckoutItem key={product.id} product={product} />
                )}
                </ul>
           </div>
            <div>
            <p>Total: ${orderTotal()}</p>
                <CheckoutForm />
            </div>
         </div>
    )
}

export default Checkout