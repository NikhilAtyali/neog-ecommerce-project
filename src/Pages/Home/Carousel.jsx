import React from "react";
import { Link } from "react-router-dom";
import { default as MaterialCarousel } from "react-material-ui-carousel";
// import Boat from "../../assets/img/Boat.jpg";
// import Marshall from "../../assets/img/Marshall.png";
// import BoatRocker from "../../assets/img/Boat-rockers.jpg";
import Boat from "../../assets/img/Boat.jpg";
import Marshall from "../../assets/img/Marshall.png"
import BoatRocker from "../../assets/img/Boat-rockers.jpg"
import "./Carousel.css"
function Carousel() {
  let items = [
    {
      id: 0,
      img: Boat,
      alt: "Boat Airdope Ad",
    },
    {
      id: 1,
      alt: "Marshall Headphones Ad",
      img: Marshall,
    },
    {
      id: 2,
      alt: "Marshall Headphones Ad",
      img: BoatRocker,
    },
  ];
  return (
    <MaterialCarousel >
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </MaterialCarousel>
  );
}

function Item({ item }) {
  return (
    <Link to={`/products/product-details/${item.id}`}>
      <img alt={item.alt} className="carousel-img" src={item.img} />
    </Link>
  );
}

export default Carousel;