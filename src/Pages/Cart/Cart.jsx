import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";

import CartSummary from "../CartSummery/CartSummery"
import CartDetailCard from "../CartDetailCard/CartDetailCard"
import PriceDetail from "../PriceDetail/PriceDetail";
function Cart() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-container">
      {cartItems.length < 1 ? (
        <h1>You haven't added anything in the cart yet.</h1>
      ) : (
        <>
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <CartDetailCard key={item._id} {...item} />
            ))}
          </div>
          <PriceDetail />
        </>
      )}
    </div>
  );
}

export default Cart;