/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import leftArrow from "../assets/images/leftArrow.webp";
import rightArrow from "../assets/images/rightArrow.webp";

// Next Arrow Component
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: `url(${rightArrow})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "520px",
        height: "520px",
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    />
  );
}

// Previous Arrow Component
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: `url(${leftArrow})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "520px",
        height: "520px",
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    />
  );
}

export { NextArrow, PrevArrow };
