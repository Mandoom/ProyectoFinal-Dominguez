import { Link } from "react-router-dom";

function Item( {product, categories}) {


    return (
        <div className="product-item">
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <Link to={`/product/${product.id}`}> More information</Link>
          </div>
    )
}

export default Item;