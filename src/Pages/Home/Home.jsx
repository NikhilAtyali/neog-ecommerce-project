import { ProductCategory } from "../../Components/ProductCategory/ProductCategory"
import Carousel from "./Carousel"
export function Home() {
    return (
      <>
        <div className="home">
          <Carousel />
        <ProductCategory />
        </div>
      </>
    );
  }
  
  