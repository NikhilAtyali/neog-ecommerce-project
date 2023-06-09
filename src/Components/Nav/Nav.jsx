import { Link , NavLink} from "react-router-dom";
import Search from "../Search/Search"
import { ProductContext } from "../../context/ProductContext"
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { dispatch } = useContext(ProductContext);
  const { isLoggedIn } = useContext(AuthContext)
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
          {/* Nav for screen width <=1024px */}
          <div	
            onClick={() => setShowMobileNav(!showMobileNav)}	
            className="mobile-menu-icon"	
          >	
            <MenuIcon sx={{ color: "white" }} />	
          </div>	
          {showMobileNav && (	
            <div className="mobile-nav-links">	
              <CloseIcon	
                className="mobile-close"	
                onClick={() => setShowMobileNav(false)}	
                sx={{ color: "white" }}	
                fontSize="large"	
              />	
              <ul>	
                <div className="mobile-search-container">	
                  <input type="text" />	
                  <button>SEARCH</button>	
                </div>	
                <NavLink onClick={() => setShowMobileNav(false)} to="/products">	
                  Products	
                </NavLink>	
                <NavLink onClick={() => setShowMobileNav(false)} to="/wishlist">	
                  Wishlist	
                </NavLink>	
                <NavLink onClick={() => setShowMobileNav(false)} to="/cart">	
                  My Cart	
                </NavLink>	
                {isLoggedIn ? (	
                  <NavLink	
                    onClick={() => setShowMobileNav(false)}	
                    to="/account"	
                  >	
                    Account	
                  </NavLink>	
                ) : (	
                  <NavLink onClick={() => setShowMobileNav(false)} to="/login">	
                    Login	
                  </NavLink>	
                )}	
              </ul>	
            </div>	
          )}
        </div>
      </nav>
    </div>
  );
}