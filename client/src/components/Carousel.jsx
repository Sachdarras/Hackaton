/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/slick-custom.css";
import { NextArrow, PrevArrow } from "./Arrows";

function Carousel({ items, renderItem }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </Slider>
  );
}

export default Carousel;
