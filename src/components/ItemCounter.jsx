import React, {useState, useContext} from "react";
import { cartContext } from "../context/cartContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function ItemCounter ({item}) {
    const { cart } = useContext(cartContext)
    const [count, setCount] = useState(1) 

    const increaseCount = () => {
        setCount(count + 1)
        console.log('Current cart:', cart);

    };

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count -1 )
            console.log('Current cart:', cart);

        };
    };

    const {addToCart} = useContext(cartContext)

    const handleAddToCart = () =>  {
        addToCart({...item, qty : count})
        setCount(1)

        MySwal.fire({
            title: 'Added to Cart!',
            text: `${item.name} x ${count} has been added to your cart.`,
            icon: 'success',
            confirmButtonText: 'OK',
          });


    }

    return (
        <div>   
            <div>
                <button onClick={decreaseCount}>-</button>
                <span>{count}</span>
                <button onClick={increaseCount}>+</button>
            </div>
            <button onClick={handleAddToCart}>add to cart</button>
            
        </div>
    );

};

export default ItemCounter