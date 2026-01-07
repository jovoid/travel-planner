import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">Travel Planner 🌍</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
