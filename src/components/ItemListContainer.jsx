import { useEffect, useState, useContext } from 'react';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import CategoryNavigation from './CategoryNavigation';


function ItemListContainer({ sectionTitle, sectionSubtitle, pad, children }) {

  const { categoryId } = useParams();
  const stockProductCategories = [2, 27, 30, 33, 34];
  const [stockProducts, setStockProducts] = useState([]);
  const [categories, setCategories] = useState([]); // Store categories
  const [categoriesLoading, setCategoriesLoading] = useState(true)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 
  

    useEffect(() => {
      // setTimeout(() =>{
              console.log("timeout start")
      async function fetchCategories() {
        try {
          // Fetch all item categories
          const response = await fetch('https://pokeapi.co/api/v2/item-category/?limit=60');
          if (!response.ok) {
            throw new Error('Failed to fetch item categories');
          }
          const data = await response.json();
    
          // Fetch individual category information
          const fetchCategoryDetails = data.results.map(async (itemCat) => {
            try {
              const categoryResponse = await fetch(itemCat.url);
              if (!categoryResponse.ok) {
                throw new Error(`Failed to fetch category: ${itemCat.name}`);
              }
              const categoryData = await categoryResponse.json();
    
              // Ensure that the names array exists and contains the correct structure
              const englishNameEntry = categoryData.names && categoryData.names.find(
                (name) => name.language.name === 'en'
              );
    
              const englishName = englishNameEntry ? englishNameEntry.name : 'Unknown Name';
    
              return {
                ...categoryData,
                name: englishName // Store the English name
              };
            } catch (err) {
              console.error(err);
              return null; // Return null if any fetch fails
            }
          });
    
          const categoryData = await Promise.all(fetchCategoryDetails);
    
          // Filter out null values in case some fetch requests failed
          const validCategoryData = categoryData.filter(Boolean);
    
          // Filter categories based on stockProductCategories
          const filteredCategories = validCategoryData.filter((category) =>
            stockProductCategories.includes(category.id)
          );
    
          setCategories(filteredCategories);
        } catch (error) {
          console.error('Error fetching categories:', error);
          setError(error);
        } finally {
          console.log("categoriesfetched")
      
        }
      }
    
      fetchCategories();

      // }, 5000)
    }, []);
    
      useEffect(() => {
        async function fetchProducts() {
          try {
            if (categories.length === 0) {
              return; // Categories not yet fetched
            }
      
            let categoriesToUse = categories;
      
            if (categoryId) {
              categoriesToUse = categories.filter(
                (category) => category.id === parseInt(categoryId)
              );
            }
      
            const products = categoriesToUse.flatMap((category) => category.items);
      
            const fetchProductDetails = products.map(async (product) => {
              const productResponse = await fetch(product.url);
              const productData = await productResponse.json()
              console.log(productData)
    
                  // Extract the English name from the product data
                  const englishName = productData.names.find(
                    (name) => name.language.name === 'en'
                  ).name;
        
                  // Return the product details with the English name
                  return {
                    ...productData,
                    name: englishName, // Override the default name with the English name
                  };
            });
      
    
            
    
            const detailedProducts = await Promise.all(fetchProductDetails);
            setStockProducts(detailedProducts);
          } catch (error) {
            console.error('Error fetching products:', error);
            setError(error);
          } finally {
            setIsLoading(false);
          }
        }
      
        fetchProducts();
      }, [categories, categoryId]);







  // Render logic
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{sectionTitle}</h1>
      <h2>{sectionSubtitle}</h2>

      <CategoryNavigation categories={categories} />
      <ItemList items={stockProducts}  />
      {/* {stockProducts.map(product => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        ))
    } */}
    </div>
  );
}

export default ItemListContainer;
