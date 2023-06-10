import "./Checkout.css";
import CartSummary from "../CartSummery/CartSummery"
import AddressList from "../Checkout/Component/AddressList"

function Checkout() {
  return (
    <div className="checkout-container">
      <AddressList />
      <CartSummary />
    </div>
  );
}

export default Checkout;