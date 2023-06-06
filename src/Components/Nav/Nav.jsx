import { Link , NavLink} from "react-router-dom";
import Search from "../Search/Search"
import { ProductContext } from "../../context/ProductContext"
import { useContext } from "react";
import "./Nav.css";
export default function Nav() {
  const { dispatch } = useContext(ProductContext);
  return (
    <div className="nav-container">
      <nav className="nav">
      <NavLink to="/" onClick={() => dispatch({ type: "RESET" })}>
        <h1 className="nav__logo">COMMERCE</h1>
        </NavLink>
        <Search />

        <div>
          <ul className="nav-links">
            <Link to="/products">Products</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">My Cart</Link>
            <Link to="/account">My Account</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}