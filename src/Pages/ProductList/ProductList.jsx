import "./ProductList.css";
import ProductCard from "./Component/ProductCard";
import { ProductContext } from "../../context/ProductContext"
import { WishlistContext } from "../../context/WishListContext"
import { useContext } from "react";

import "./ProductList.css";
function ProductsList() {
  const { filteredArray } = useContext(ProductContext);
 
  return (
    <div className="products-container">
     {filteredArray.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList