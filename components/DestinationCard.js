import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { tfn } from "@/utils/essentials";

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

const DestinationCard = ({ cards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
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
    <div className="container-custom mt-100 mb-100">
      <h3 class="text-center">Explore best price in trending destinations</h3>
      <Slider {...settings} class="travel-cards">
        {cards.map((card, index) => (
          <div key={index}>
            <div class="destination-cards m-2 p-2">
              <div class="destination-card-image">
                <img src={card.image} alt={card.alt} />
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="destination-card-content-flight">
                  <p>
                    <i
                      style={{ marginRight: "7px" }}
                      class="fa-solid fa-plane-departure"
                    ></i>
                    {card.flight}
                  </p>
                  <p>
                    <i
                      style={{ marginRight: "7px" }}
                      class="fa-solid fa-clock"
                    ></i>
                    {card.time}
                  </p>
                </div>
              </div>
              <div>
                <h5>{card.price}</h5>
                <a href={tfn} class="theme-btn" style={{ fontSize: "13px" }}>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationCard;
