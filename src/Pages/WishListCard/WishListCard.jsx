import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishListContext"
import { CartContext } from "../../context/CartContext"
import { toast } from "react-toastify";
import { useState } from "react";

function WishlistCard({ product }) {
  const { _id, image, productName, rating, price, oldPrice, discount } =
    product;
  console.log(product);
  const { cartItems, addItemToCart, increaseQuantity } =
    useContext(CartContext);
  const { wishlistItems, addItemToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const productExistInCart = cartItems.some((item) => item._id === _id);
  const productExistInWishlist = wishlistItems.some((item) => item._id === _id);
  const [disableCursor, setDisableCursor] = useState(false);
  const disableCursorHandler = () => {
    setDisableCursor(true);
    setTimeout(() => {
      setDisableCursor(false);
    }, 1000);
  };
  return (
    <div className="product-card">
      {productExistInWishlist ? (
        <>
          <button className="add-to-wishlist-btn">
            <FavoriteIcon
              onClick={() => removeFromWishlist(_id)}
              sx={{
                color: "red",
              }}
            />
          </button>
        </>
      ) : (
        <button className="add-to-wishlist-btn">
          <FavoriteIcon
            onClick={() => addItemToWishlist(product)}
            sx={{
              color: "grey",
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
        <button
        onClick={() => {
          increaseQuantity(_id);
        }}
          className="add-to-cart-btn"
        >
          Increase Quantity
        </button>
      ) : (
        <button
          className="add-to-cart-btn"
          id={`${disableCursor ? "disable-cursor" : ""}`}
          onClick={() => {
            disableCursorHandler();
            addItemToCart(product);
          }}
        >
          Move TO CART
        </button>
      )}
    </div>
  );
}

export default WishlistCard;