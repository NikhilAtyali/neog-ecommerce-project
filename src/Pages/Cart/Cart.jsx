import { useContext } from "react";
import { CartContext } from "../../context";
import CartDetailCard from "../CartDetailCard/CartDetailCard"
import PriceDetail from "../PriceDetail/PriceDetail";
import "./Cart.css";
export function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
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