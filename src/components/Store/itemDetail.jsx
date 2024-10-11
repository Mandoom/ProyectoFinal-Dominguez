import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore"; // Correct Firestore import
import { db, getProductDetail } from '../../firebase/database'; // Firestore instance
import ItemCounter from "./ItemCounter";

function ItemDetail () { 


    const [detail, setDetail] = useState(null)
    const {id} = useParams()
    const [ isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const product = await getProductDetail(id)
          setDetail(product)
          setIsLoading(false)
          
        } catch (error) {
          console.log('Error fetching product data, error')
          
        }
        
      };

      fetchData()
    }, [id]); // removed "url" as its not really needed

  
         // Conditional rendering to handle loading state
  if (isLoading == true) {
    return <div className="container">Loading...</div>; // Render loading state while waiting for data
  }

  return (
    <div className="container">
     <div className="detailCard">
      {detail.image && (
          <img className="productImage" src={detail.image} alt={detail.name + ' illustration'} />
        )}
        <p className="productName">{detail.name}</p>
        <p className="productPrice">Price: ${detail.price}</p>
        <div className="productEffectContainer">
          <h4>Effetc</h4>
          <p className="productEffect">{detail.effect}</p>
        </div>
       
        <p>Category: <span className="categoryTag">{detail.category}</span></p>
        <ItemCounter item={detail}></ItemCounter>
     </div>
    </div>
  );

   
   
}

export default ItemDetail;