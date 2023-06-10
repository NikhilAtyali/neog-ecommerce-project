import "./ProductDetails.css";
import { useContext } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishListContext";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function ProductDetails() {
  const {cartItems, addItemToCart } = useContext(CartContext);
  const { wishlistItems,addItemToWishlist } = useContext(WishlistContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);
  const { id } = useParams();

  const productExistInCart = cartItems.some((item) => item._id === id);	
  const productExistInWishlist = wishlistItems.some((item) => item._id === id);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        console.log(response, "////////////////////////////////////");
        setSelectedProduct(() => response.data.product);	
      } catch (e) {
        console.log(e);
      }
    })();
  }, [id]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch(`/api/products/${id}`);
  //       if (response.ok) {
  //         const data = await response.json();
  //         setSelectedProduct(data.product);
  //       } else {
  //         console.log("Error:", response.status);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, [id]);
  
  return (
    selectedProduct && (
      <div key={selectedProduct?._id} className="product-details-container">
        <img src={selectedProduct?.image} alt={selectedProduct?.alt} />
        <div>
          <h2 className="product-details__heading">
            {selectedProduct?.productName}
          </h2>
          <p className="product-details__rating-star">
            {Array(5)
              .fill(" ")
              .map((arr, index) =>
                index < selectedProduct.rating ? (
                  <StarIcon key={index} sx={{ color: "yellow" }} />
                ) : (
                  <StarIcon key={index} sx={{ color: "grey" }} />
                )
              )}
          </p>
          <div className="product-details__price-discount-container">
            <div className="product-details__prices">
              <span className="product-details__current-price">
                ₹{+selectedProduct?.price}
              </span>
              <span className="product-details__old-price">
                ₹{+selectedProduct?.oldPrice}
              </span>
            </div>
            <p className="product-details__discount">
              {selectedProduct?.discount}% OFF
            </p>
          </div>
          <div className="action-buttons">
          {productExistInCart && isLoggedIn ? (	
              <button className="product-details__add-to-cart-btn">	
                <Link to="/cart">GO TO CART</Link>	
              </button>	
            ) : (	
              <button	
                className="product-details__add-to-cart-btn"	
                onClick={() => {
                  addItemToCart(selectedProduct);
                }}	
              >	
                ADD TO CART	
              </button>	
            )}	
            {productExistInWishlist ? (	
              <button className="product-details__add-to-wishlist-btn">	
                <Link to="/wishlist">GO TO WISHLIST</Link>	
              </button>	
            ) : (	
              <button	
                className="product-details__add-to-wishlist-btn"	
                onClick={() => {
                  addItemToWishlist(selectedProduct);
                }}
              >	
                ADD TO WISHLIST	
              </button>	
            )}
          </div>

          <hr />
          <p>
            <b>Brand: </b>
            {selectedProduct?.brand}
          </p>
          <p>
            <b>Description: </b>
            {selectedProduct?.description}
          </p>
          <p>
            <b>Type: </b>
            {selectedProduct?.type}
          </p>
          <p>
            <b>Added In Year: </b>
            {selectedProduct?.addedInYear}
          </p>
        </div>
      </div>
    )
  );
}

export default ProductDetails;
