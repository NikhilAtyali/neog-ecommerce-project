import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";

import CartSummary from "../CartSummery/CartSummery"
import CartDetailCard from "../CartDetailCard/CartDetailCard"

function Cart() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-container">
      <div className="cart-items-container">
        {cartItems.map((item) => (
          <CartDetailCard {...item} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
}

export default Cart;