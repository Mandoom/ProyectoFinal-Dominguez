import { Link } from "react-router-dom";

function Item( {product, categories}) {


    return (
        <div className="productCard">
            <img className="productImage" src={product.image} alt="" />
            <div>
                <p className="productName">{product.name}</p>
                <p>Category: <span className="categoryTag">{product.category}</span></p>
                <Link className="productDetailButton" to={`/product/${product.id}`}> More information</Link>
                </div>
                
          </div>
    )
}

export default Item;