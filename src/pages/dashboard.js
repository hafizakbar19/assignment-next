import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard.</p>
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
    </div>
  );
}