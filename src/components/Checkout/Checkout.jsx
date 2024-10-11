import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import CheckoutItem from "./CheckoutItem";
import CheckoutForm from "./CheckoutForm";
import { writeOrder   } from "../../firebase/database";
import { Link } from "react-router-dom";

function Checkout ({ sectionTitle, sectionSubtitle }) {

    const { cart, orderTotal } = useContext(cartContext)
    
    if (cart.length === 0) {
        return (
          <div className="container checkout">
            <h2>Your cart is empty.</h2>
            <p>You have no items in your shopping cart.</p>
            <Link to="/">Continue Shopping</Link>
          </div>
        );
      }


    return ( 
         <div className="container checkout">

          <div className="sectionHeadings">
            <h2 className='sectionTitle'>{sectionTitle}</h2>
            <h3 className='sectionSubTitle'>{sectionSubtitle}</h3>
          </div>  
           <div className="checkoutCols">
            <div>
            <ul className="cartItems">
                {cart.map((product) => 
                    <CheckoutItem key={product.id} product={product} />
                )}
            </ul>
            <p>Total: ${orderTotal()}</p>
            </div>
        
          
            <div className="checkoutForm">
        
                <CheckoutForm />
            </div>
         </div>
         </div>
    )
}

export default Checkout