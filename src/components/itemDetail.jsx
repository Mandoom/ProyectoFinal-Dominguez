import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function ItemDetail () {


    const [detail, setDetail] = useState(null)
    const {id} = useParams()
    const url = "https://pokeapi.co/api/v2/item/"
 
   
    useEffect(() => {
        async function fetchProductDetail() {
          try {
            const response = await fetch(url + id);
            if (!response.ok) {
              throw new Error("Failed to fetch product details");
            }
            const productData = await response.json();
            setDetail(productData);
          } catch (error) {
            console.error("Error fetching product detail:", error);
          }
        }
        
        fetchProductDetail();
      }, [id, url]);

  
         // Conditional rendering to handle loading state
  if (!detail) {
    return <div>Loading...</div>; // Render loading state while waiting for data
  }

  return (
    <div>
      {detail.sprites?.default && (
        <img src={detail.sprites.default} alt={detail.name} />
      )}
      <p>{detail.name}</p>
    </div>
  );

   
   
}

export default ItemDetail;