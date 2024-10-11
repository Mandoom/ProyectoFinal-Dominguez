import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './components/Store/ItemListContainer';
import InventoryListContainer from './components/InventoryListContainer';
import ItemDetail from './components/Store/itemDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/footer';

function App() {
  const paddings = '20px'; // Padding value
  const pokeFont = "'Pokemon Solid', sans-serif"; // Font value

  return (
    <>
      <BrowserRouter>
        <NavBar
          bg="#316ab1"
          pageTitle="PokeStore"
          pad={paddings}
          brandfont={pokeFont}
        />
        <Routes>
          {/* Route for the home page, displays all products */}
          <Route
            path="/"
            element={
              <ItemListContainer sectionTitle="Selected Products For Your Adventures"  sectionSubtitle="Filter products by category"/>
            }
          />
          {/* Route for products filtered by category */}
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer  sectionTitle="Selected Products For Your Adventures"  sectionSubtitle="Filter products by category"/>
            }
          />
          {/* Other routes */}
          <Route path="/inventory" element={<InventoryListContainer />} />
          <Route path="/product/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart sectionTitle="Your products" sectionSubtitle="Verify your product selection"/>} />
          <Route path="/checkout" element={<Checkout sectionTitle="Checkout" sectionSubtitle="Procced filling the form to complete your order"/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
