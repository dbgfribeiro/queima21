import { useState } from 'react';
import './App.css';
import Products from './Products.jsx'
import Cart from './Cart.jsx'

function App() {

  const [page, setPage] = useState('products');
  const [cart, setCart] = useState([]);

  const PAGE_PRODUCTS = 'products';
  const PAGE_CART = 'cart';
  const navigateTo = (displayPage) => {
    setPage(displayPage);
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product}]);
  };
  const removeFromCart = (productToRemove) => { 
    setCart(cart.filter(product => product !== productToRemove));
  };

 
  return (
    <div className="App">
    <header>
      {page === PAGE_PRODUCTS ? (
        <button onClick={() => navigateTo(PAGE_CART)}>CART ({cart.length})</button>
      ) : (
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>VIEW PRODUCTS</button>
      )}
    </header>

    {page === PAGE_PRODUCTS && <Products addToCart={addToCart}/>}
    {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart}/>}

    </div>
  );
}

export default App;
