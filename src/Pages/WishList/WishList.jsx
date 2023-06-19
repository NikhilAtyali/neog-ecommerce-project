import "./WishList.css";
import { WishlistContext } from "../../context";
import WishlistCard from "../WishListCard/WishListCard";
import { useContext } from "react";
export const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);
  return (
    <>
      <ul className="wishlist-container">
      {wishlistItems.length < 1 ? (
          <h1>You haven't added anything in the wishlist yet.</h1>
        ) : (
          wishlistItems.map((item) => (
            <li key={item._id}>
              <WishlistCard product={item} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};