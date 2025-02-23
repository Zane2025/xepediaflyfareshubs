import React from "react";
import Slider from "react-slick";

const Card = ({ name, image }) => (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center",
    }}
  >
    <img
      src={image}
      alt={name}
      style={{ width: "100%", height: "auto", borderRadius: "8px" }}
    />
    <p style={{ marginTop: "8px", fontWeight: "bold" }}>{name}</p>
  </div>
);

const Stays = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const cards = [
    { name: "Card 1", image: "https://via.placeholder.com/150" },
    { name: "Card 2", image: "https://via.placeholder.com/150" },
    { name: "Card 3", image: "https://via.placeholder.com/150" },
    { name: "Card 4", image: "https://via.placeholder.com/150" },
    { name: "Card 5", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Card key={index} name={card.name} image={card.image} />
        ))}
      </Slider>
    </div>
  );
};

export default Stays;
