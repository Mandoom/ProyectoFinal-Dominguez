import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CheckoutItem ({product}) {

    const { cart } = useContext(cartContext)
     
    return (
        <li className="cartProductItem">
          <img className="cartProductImage" src={product.image} alt={product.name + ' illustration'} />
          <p>{product.name} x {product.qty} <span>Subtotal = ${product.price * product.qty}</span></p> 
          
        </li>
    ) 
}

export default CheckoutItem