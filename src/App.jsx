import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
import InventoryListContainer from './components/InventoryListContainer';
import ItemDetail from './components/itemDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const paddings = '20px'; // Padding value
  const pokeFont = "'Pokemon Solid', sans-serif"; // Font value

  return (
    <>
      <BrowserRouter>
        <NavBar
          bg="red"
          pageTitle="PokeStore"
          pad={paddings}
          brandfont={pokeFont}
        />
        <Routes>
          {/* Route for the home page, displays all products */}
          <Route
            path="/"
            element={
              <ItemListContainer sectionTitle="Selected Products For Your Adventures" />
            }
          />
          {/* Route for products filtered by category */}
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer sectionTitle="Selected Products For Your Adventures" />
            }
          />
          {/* Other routes */}
          <Route path="/inventory" element={<InventoryListContainer />} />
          <Route path="/product/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
