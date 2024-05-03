import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/list-categories">
        <button>Categories</button>
      </Link>
      <Link to="/list-items">
        <button>List all items</button>
      </Link>
      <Link to="/sell-item">
        <button>Sell your item</button>
      </Link>
      <button>Your basket</button>
      <button>Your order</button>
      <button>User</button>
    </div>
  );
}
