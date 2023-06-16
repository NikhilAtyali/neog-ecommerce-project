import { Outlet } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContext";
import { CartContextProvider } from "./context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import { WishlistContextProvider } from "../src/context/WishListContext";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AddressContextProvider } from "../src/context/AddressContext"
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
          <AddressContextProvider>
            <Nav />
            <ToastContainer />
            <Outlet />
            <Footer />
            </AddressContextProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
