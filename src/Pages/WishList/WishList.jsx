import "./WishList.css";
import { WishlistContext } from "../../context/WishListContext"
import ProductCard from "../ProductList/Component/ProductCard"
import WishlistCard from "../WishListCard/WishListCard";
import { useContext } from "react";
const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);
  return (
    <>
      <ul className="wishlist-container">
        {wishlistItems.map((item) => (
          <li key={item._id}>
            <WishlistCard product={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Wishlist;