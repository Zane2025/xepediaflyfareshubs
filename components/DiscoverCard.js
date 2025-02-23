import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <i class="fa-solid fa-chevron-left"></i>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <i class="fa-solid fa-chevron-right"></i>
    </div>
  );
};

const DiscoverCard = ({ cards }) => {
  const settings = {
    dots: false, // Set true if you want navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of cards visible at a time
    slidesToScroll: 1,
    arrows: true, // Show arrows
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container-custom mt-5">
      <h3>Discover your new favourite destinations</h3>
      <Slider {...settings} className="travel-cards">
        {cards.map((card, index) => (
          <div className="image-card" key={index}>
            <img className="round-img" src={card.image} alt={card.alt} />
            <div className="text-overlay">{card.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DiscoverCard;
