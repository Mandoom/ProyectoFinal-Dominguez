
import Item from "./Item";


function ItemList( { items, }) {

    return (
        <div className="product-grid">
            {items.map((product) => (
                <Item key={product.id} product={product} /> // pass each product to item pcomponent
            ))}
        </div>
    )
}

export default ItemList;    