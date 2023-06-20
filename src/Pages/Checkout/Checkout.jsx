import { useState } from "react";
import CartSummary from "../CartSummery/CartSummery";
import AddressList from "../Checkout/Component/AddressList";
import "./Checkout.css";

export function Checkout() {
  const [selectedAddress, setSeletedAddress] = useState({});
  const getSelectedAddress = (address) => {
    console.log("here");
    setSeletedAddress(address);
  };
  return (
    <div className="checkout-container">
      <AddressList selectedAddress={getSelectedAddress} />
      <CartSummary selectedAddress={selectedAddress} />
    </div>
  );
}
