import { Outlet } from "react-router-dom";
import {
  ProductContextProvider,
  CartContextProvider,
  WishlistContextProvider,
  AuthContextProvider,
  AddressContextProvider,
} from "./context";
import { Nav } from "./Components"
import { Footer } from "./Components"
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
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
