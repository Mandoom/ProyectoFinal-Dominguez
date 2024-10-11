import { 
  getFirestore, 
  collection, 
  getDocs, 
  getDoc,
  addDoc, 
  query, 
  where, 
  doc 
} from "firebase/firestore";
import { app } from "./config";


export const db = getFirestore(app);
// single function produyct query fetch
export const getProducts = async (categoryId) => { // by optional category, single function for both cases, with an without category 

    try {
      const products = [];
      const productsRef = collection(db, 'products') // reference used for 'query'

      let q; // varyable to query . use let instead of const as this will be reassigned
      
      if(categoryId) { //if category exists, uses a category for the query
        q = query(productsRef, where('category', '==',categoryId))
      } else { // no category = fetch all products using the reference for the query
        q = productsRef
      }


      const querySnapshot = await getDocs(q); // execute the query 
      querySnapshot.forEach((doc) => { //iterate over each do in the snapshot to create and display the products
        products.push(doc.data());
      });
      //console.log('Fetched Products in getProducts:', products);
      return products; // Return the products array
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // 
    }
  };


  // get single product data

  export const getProductDetail = async (id) => {

    try {
      const docRef = doc(db, "products", id);
      const product = await getDoc(docRef);
      
      if (product.exists()) {
        //console.log("Document data:", product.data());
        return product.data()
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        return null
      }
      setDetail(product.data());
    } catch (error) {
      console.error("Error fetching product detail:", error);
      throw error;
    }

  }

export const writeOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);

    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.error("Error adding document: ", err);
  }
}