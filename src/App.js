import { Outlet } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContext";
import { CartContextProvider } from "./context/CartContext";
import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer"
import { WishlistContextProvider } from "../src/context/WishListContext"
import "./App.css";


function App() {
  return (
    <>
     <ProductContextProvider>
     <CartContextProvider>
     <WishlistContextProvider>
        <Nav />
        <Outlet />
        <Footer />
        </WishlistContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
