import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ProductCard.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { WishlistContext } from "../../../context/WishListContext";
function ProductCard({ product }) {
  const { _id, image, productName, rating, price, oldPrice, discount } =
    product;
  const { cartItems, addItemToCart } = useContext(CartContext);
  const { wishlistItems, addItemToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const productExistInCart = cartItems.some((item) => item._id === _id);
  const productExistInWishlist = wishlistItems.some((item) => item._id === _id);
  return (
    <div className="product-card">
      {productExistInWishlist ? (
        <button
          onClick={() => addItemToWishlist(product)}
          className="add-to-wishlist-btn"
        >
          <FavoriteIcon
            sx={{
              color: "red",
            }}
          />
        </button>
      ) : (
        <button
          onClick={() => removeFromWishlist(_id)}
          className="add-to-wishlist-btn"
        >
          <FavoriteIcon
            sx={{
              color: "grey",

              "&:hover": { color: "red" },
            }}
          />
        </button>
      )}

      <NavLink to={`product-details/${_id}`}>
        <img className="product-card__img" src={image} alt="" />
        <div className="heading-rating-container">
          <h4 className="product-name">{productName}</h4>
          <div className="rating-star">
            <span className="rating-num">{rating}</span>
            <StarIcon fontSize="1rem" />
          </div>
        </div>
        <div className="price-discount-container">
          <div className="prices">
            <span className="current-price">₹{+price}</span>
            <span className="old-price">₹{+oldPrice}</span>
          </div>
          <p className="discount">{discount}% OFF</p>
        </div>
      </NavLink>
      {productExistInCart ? (
        <NavLink to="/cart">
          <button className="add-to-cart-btn">GO TO CART</button>
        </NavLink>
      ) : (
        <button
          className="add-to-cart-btn"
          onClick={() => addItemToCart(product)}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
}
export default ProductCard;
