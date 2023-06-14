import ProductCategory from "../../Components/ProductCategory/ProductCategory";
import Carousel from "./Carousel"
function Home() {
    return (
      <>
        <div className="hero">
          <Carousel />
        <ProductCategory />
        </div>
      </>
    );
  }
  
  export default Home;