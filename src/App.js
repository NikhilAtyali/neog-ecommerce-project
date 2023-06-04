import { Outlet } from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContext";
import { CartContextProvider } from "./context/CartContext";
import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer"
import "./App.css";


function App() {
  return (
    <>
     <ProductContextProvider>
     <CartContextProvider>
        <Nav />
        <Outlet />
        <Footer />
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
