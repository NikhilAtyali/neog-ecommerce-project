import Filters from "../Filters/Filters"
import ProductsList from "../ProductList/ProductList"
import "./Products.css";

function Products() {
  return (
    <div className="products-page-container">
     <Filters />
      <ProductsList />
    </div>
  );
}

export default Products;