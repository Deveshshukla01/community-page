import { Link } from "react-router-dom";

export default function Navbar({ user }) {
  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <h1>LangConnect</h1>

      {user ? (
        <Link to="/dashboard">Dashboard</Link>
      ) : (
        <>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
}