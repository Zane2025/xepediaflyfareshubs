import Slider from "react-slick";

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials text-center">
      <div className="container-custom">
        <h2 className="sectionTitle">What Our Customers Say</h2>
        <Slider {...sliderSettings} className="slider">
          <div className="testimonial">
            <p className="review" style={{ color: "white" }}>
              "Booking my flight was so easy and hassle-free. XepediaFlyFareHub
              saved me time and money!"
            </p>
            <div className="reviewer">
              <div>
                <p className="reviewerName">John Doe</p>
                <p className="reviewerLocation">New York, USA</p>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p className="review" style={{ color: "white" }}>
              "Fantastic service! I got the best deals on my tickets."
            </p>
            <div className="reviewer">
              <div>
                <p className="reviewerName">Jane Smith</p>
                <p className="reviewerLocation">London, UK</p>
              </div>
            </div>
          </div>
          {/* Add more testimonials as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
