import { useContext } from "react";
import { cartContext } from "../context/cartContext";

function CartItem ( {product} ) {

    const { cart } = useContext(cartContext);
    const { removeFromCart } = useContext(cartContext)

    const handleRemove = () => {
        removeFromCart(product.id);
      };

    return (
        <li>
          <p>{product.name} x {product.qty}</p> <button onClick={handleRemove}>Remove from Cart</button>
        </li>
    )
}

export default CartItem