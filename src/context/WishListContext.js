
import { createContext, useState } from "react";
import {
  addToWishlistService,
  deleteFromWishlistService,
} from "../../src/services/services"
import { toast } from "react-toastify";
import { toastHandler } from "../utils/Toast";
export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const encodedToken = localStorage.getItem("encodedToken");
  const addItemToWishlist = async (product) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      if (encodedToken !== null) {
        const response = await addToWishlistService(encodedToken, product);

        setWishlistItems(() => response.data.wishlist);
        toastHandler("success", "Added To The Wishlist");
      } else {
        toastHandler("info", "Please Login First");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const removeFromWishlist = async (id) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      if (encodedToken !== null) {
        const response = await deleteFromWishlistService(encodedToken, id);
        setWishlistItems(() => response.data.wishlist);
        toast.info("Removed From Wishlist", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.info("Please Login First", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const value = {
    wishlistItems,
    setWishlistItems,
    addItemToWishlist,
    removeFromWishlist,
  };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};