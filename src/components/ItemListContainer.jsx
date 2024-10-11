import { useEffect, useState, useContext } from 'react';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import CategoryNavigation from './CategoryNavigation';
import { cartContext } from '../context/cartContext';
import { getProducts} from '../firebase/database'


function ItemListContainer({ sectionTitle, sectionSubtitle, pad, children }) {
  const { categoryId } = useParams(); // Get categoryId from URL params

  const [stockProducts, setStockProducts] = useState([]); // Store all products
 // const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [categories, setCategories] = useState([]); // Store categories
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { cart } = useContext(cartContext);

  useEffect(() => {
    // Fetch products from Firestore
    getProducts()
      .then((products) => {
        //console.log('Fetched Products:', products);
        // Extract unique categories
        const uniqueCategories = []; 
        //iterate over products to get categories
        products.forEach((product) => { 
          if (!uniqueCategories.includes(product.category)) {
            uniqueCategories.push(product.category);
          }
        });
        //console.log('Unique Categories:', uniqueCategories);

        // map categories to objects
        const categoryObjects = uniqueCategories.map((category) => ({
          id: category, // Use category name as id
          name: category,
        }));
        setCategories(categoryObjects);
        // console.log('Categories:', categoryObjects);

      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError(err);
        setIsLoading(false);
      });
  }, []); // Run once on component mount



   // useEffect to fetch products whenever categoryId changes

  useEffect(() => {

    setIsLoading(true) // show loading before betch by category
    getProducts(categoryId)
      .then((products)=> {
        setStockProducts(products)
        setIsLoading(false)
      })
      .catch( (err) => {
        setError(err)
        console.log(err)
        setIsLoading(false)
      })
    
  }, [categoryId]); // Run when categoryId changes

  // Conditional Render logic
  //if (isLoading) return <div>Loading...</div>;
 // if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
    {/* Always render the section title and subtitle */}
    <h1>{sectionTitle}</h1>
    <h2>{sectionSubtitle}</h2>


    <CategoryNavigation categories={categories} />


    {error && <div>Error: {error.message}</div>}


    {isLoading ? (
      <div>Loading products...</div> // Placeholder while products load
    ) : (
      <ItemList items={stockProducts} />
    )}
  </div>
  );
}

export default ItemListContainer;