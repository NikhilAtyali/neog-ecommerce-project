import { useContext } from "react";
import { CartContext } from "../../../src/context/CartContext"
// import "./CartSummary.css";
import "./CartSummery2.css"
function CartSummary() {
  const { cartItems,totalPrice, totalDiscount } = useContext(CartContext);
  return (
    <div className="cart-summary-container">
      <h4>Order Summery</h4>
      <hr />

      <div className="summary-item">
        <span>Price: ({cartItems.length} items)</span>
        <span>₹{totalPrice}</span>
      </div>
      <div className="summary-item">
        <span>Discount: </span>
        <span>(-)₹{Math.abs(totalDiscount)}</span>
      </div>
      <div className="summary-item">
        <span>Delivery Charges: </span>
        <span style={{ color: "#388E3C" }}>FREE</span>
      </div>
      <div className="total-amount">
        <span>Total Amount</span>
        <span>₹{totalPrice + totalDiscount}</span>
      </div>
        <button className="checkout-btn">Place Order</button>
    </div>
  );
}

export default CartSummary;