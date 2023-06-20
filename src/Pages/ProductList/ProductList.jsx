import { useContext } from "react";
import "./ProductList.css"
import { ProductContext } from "../../context/ProductContext"
import ProductCard from "./Component/ProductCard";
import {Loader} from "../../Components/Loader/Loader"

function ProductsList({
  showFilterBtn,
  setShowFilterMobile,
  setShowFilterBtn,
}) {
  
  const { filteredArray, isLoading } = useContext(ProductContext);

  if (isLoading) return <Loader />;

  return filteredArray.length === 0 ? (
    <h2 className="no-products-heading">No Products Found!</h2>
  ) : (
    <div className="products-container">
      {filteredArray?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div
        id={`${showFilterBtn ? "" : "hide"}`}
        onClick={() => {
          setShowFilterMobile(true);
          setShowFilterBtn(false);
        }}
        className="filter-btn-mobile"
      >
        <p>Filters</p>
      </div>
    </div>
  );
}

export default ProductsList;