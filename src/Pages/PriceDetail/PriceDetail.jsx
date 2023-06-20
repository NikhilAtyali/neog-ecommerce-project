import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import "../CartSummery/CartSummery2.css";
import { NavLink } from "react-router-dom";

function PriceDetail() {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-summary-container">
      <h4>PRICE DETAILS</h4>
      <hr />
      {cartItems.map(({ id, productName, price, qty }) => (
        <div className="summary-item" key={id}>
          <span>
            {productName} ({qty})
          </span>
          <span>₹{price * qty}</span>
        </div>
      ))}

      <div className="total-amount">
        <span>Total Amount</span>
        <span>₹{totalPrice }</span>
      </div>
      <NavLink to="/checkout">
        <button className="checkout-btn">PLACE ORDER</button>
      </NavLink>
    </div>
  );
}

export default PriceDetail;