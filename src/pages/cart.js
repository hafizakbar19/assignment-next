import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
    </div>
  );
}