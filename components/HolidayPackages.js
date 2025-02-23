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

const HolidayPackages = ({ cards }) => {
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
    <div className="container-custom mt-100 mb-100 ">
      <div className="text-center">
        {/* <h3>Explore holiday packages to popular destinations</h3> */}
        <h3>Discounted Bookings</h3>
        <span>
          Prices found in the past 48 hours, based on two adults travelling.
          Click for updated prices.
        </span>
      </div>
      <Slider {...settings} class="travel-cards">
        {cards.map((card, index) => (
          <div key={index}>
            <div class="destination-cards m-2 p-2">
              <div class="destination-card-image">
                <img src={card.image} alt={card.alt} />
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="destination-card-content">
                  <h3>{card.heading}</h3>
                  <p>{card.content}</p>
                  <span>
                    <i
                      style={{ marginRight: "12px" }}
                      class="fa-solid fa-building"
                    ></i>
                    {card.hotel}
                  </span>
                  <span>
                    <i
                      style={{ marginRight: "7px" }}
                      class="fa-solid fa-plane-departure"
                    ></i>
                    {card.flight}
                  </span>
                </div>
              </div>
              <div className="destination-card-price">
                <h5>
                  ${card.afterprice}{" "}
                  <span className="original-price">${card.originalprice}</span>
                </h5>
                <p>per traveller</p>
                <p>{card.tourdate}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HolidayPackages;
