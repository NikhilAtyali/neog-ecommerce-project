import { WishlistContext } from "../../context";
import WishlistCard from "../WishListCard/WishListCard";
import { useContext } from "react";
import "./WishList.css";
export const Wishlist = () => {
  const { wishlistItems } = useContext(WishlistContext);
  return (
    <>
    {wishlistItems.length === 0 ? (
      <div className="empty-wishlist-container">
        <h1>You haven't added anything in the wishlist yet.</h1>
      </div>
    ) : (
      <ul className="wishlist-container">
        {wishlistItems.map((item) => (
          <li key={item._id}>
            <WishlistCard product={item} />
          </li>
        ))}
      </ul>
    )}
  </>
  );
};