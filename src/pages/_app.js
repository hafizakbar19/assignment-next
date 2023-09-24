import { BrowserRouter as Router } from 'react-router-dom';
import { CartContext } from "../components/CartContext";
import '../styles/globals.css';
import { useState } from 'react';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <Router>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <a>Cart ({cart.length})</a>
                </Link>
              </li>
            </ul>
          </nav>
          <Component {...pageProps} />
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default MyApp;