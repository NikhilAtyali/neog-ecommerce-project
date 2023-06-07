import { Link , NavLink} from "react-router-dom";
import Search from "../Search/Search"
import { ProductContext } from "../../context/ProductContext"
import { useContext } from "react";
import "./Nav.css";
export default function Nav() {
  const { dispatch } = useContext(ProductContext);
  const isLoggedIn = false;
  return (
    <div className="nav-container">
      <nav className="nav">
      <NavLink to="/" onClick={() => dispatch({ type: "RESET" })}>
        <h1 className="nav__logo">Sound Wave</h1>
        </NavLink>
        <Search />

        <div>
          <ul className="nav-links">
            <Link to="/products">Products</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">My Cart</Link>
            {isLoggedIn ? (	
              <NavLink to="/account">Account</NavLink>	
            ) : (	
              <NavLink to="/login">Login</NavLink>	
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}