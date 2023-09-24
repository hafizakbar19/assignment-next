import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to our store!</p>
      <Link href="/product/1">
        <a>View Product 1</a>
      </Link>
    </div>
  );
}


