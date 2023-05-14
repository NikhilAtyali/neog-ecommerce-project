import { NavLink } from "react-router-dom";
import "./ProductCategory.css";
function ProductCategory() {
  const productCategoryList = [
    {
      name: "Fiction",
    },
    {
      name: "Non_Fiction",
    },
    { name: "Science-Fiction" },
    {
      name: "Mystory",
    },
  ];
  return (
    <ul className="product-category-container">
      {productCategoryList.map(({ img, name }) => (
        <NavLink to={`product-category/${name.toLowerCase()}`}>
          <li className="product-category-item">
            <img src={img} alt="" />
            <span>{name}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
}

export default ProductCategory;
