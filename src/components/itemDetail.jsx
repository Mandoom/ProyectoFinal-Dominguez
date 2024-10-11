import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore"; // Correct Firestore import
import { db, getProductDetail } from '../firebase/database'; // Firestore instance
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
    return <div>Loading...</div>; // Render loading state while waiting for data
  }

  return (
    <div>
      {detail.image && (
        <img src={detail.image} alt={detail.name + ' illustration'} />
      )}
      <p>{detail.name}</p>
      <p>Price: ${detail.price}</p>
      <p>{detail.effect}</p>
      <p>Category: {detail.category}</p>
      <ItemCounter item={detail}></ItemCounter>
    </div>
  );

   
   
}

export default ItemDetail;