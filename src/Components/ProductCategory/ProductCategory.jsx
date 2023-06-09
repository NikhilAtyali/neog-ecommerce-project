import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect,useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Loader from "../Loader/Loader"
import "./ProductCategory.css";
function ProductCategory() {
  const { dispatch } = useContext(ProductContext);
    const [productCategoryList, setProductCategoryList] = useState([]);
    useEffect(() => {	
      (async () => {	
        try {	
          const response = await axios.get("/api/categories");	
          setProductCategoryList(response.data.categories);	
        } catch (e) {	
          console.log(e);	
        }	
      })();	
    }, []);;
    // useEffect(() => {
    //   (async () => {
    //     try {
    //       const response = await fetch("/api/categories");
    //       if (response.ok) {
    //         const data = await response.json();
    //         setProductCategoryList(data.categories);
    //       } else {
    //         console.log("Error:", response.status);
    //       }
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   })();
    // }, []);
    
    if (productCategoryList.length === 0) return <Loader />;
  return (
    <ul className="product-category-container">
      {productCategoryList.map(({ id, image, category }) => (
        <NavLink key={id} to="/products">
          <li
            onClick={() =>
              dispatch({
                type: "CATEGORIES",
                payload: { isChecked: true, value: category.toLowerCase() },
              })
            }
            className="product-category-item"
          >
            <img src={image} alt="" />
            <span>{category.split("_").join(" ")}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
}

export default ProductCategory;
