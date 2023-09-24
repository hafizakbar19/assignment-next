import { useContext } from 'react';
import { Link, useRouter } from 'next/router';
import { CartContext } from '../../CartContext';

export default function Product() {
  const router = useRouter();
  const { cart, addToCart } = useContext(CartContext);
  const { id } = router.query;

  const handleAddToCart = () => {
    const product = {
      id: parseInt(id),
      name: `Product ${id}`,
      price: Math.floor(Math.random() * 100),
    };
    addToCart(product);
  };

  return (
    <div>
      <h1>Product {id}</h1>
      <p>This is product {id}.</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
    </div>
  );
}