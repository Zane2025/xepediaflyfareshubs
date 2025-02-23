import React from "react";

const BusinessClass = () => {
  return (
    <>
      <div className="container-custom mt-100 mb-100">
        <div id="aboutus" className="row align-items-xl-center pt-4 mt-5">
          <h1
            className="text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            BUSINESS & FIRST CLASS
          </h1>
          <div className="col-md-10 col-lg-6 mb-5 mb-lg-0">
            <div className="row row-gutter-sm">
              <div className="col-6" data-aos="fade-up">
                <img
                  src="../images/business1.jpg"
                  className="img-fluid box-shadow-5"
                  alt=""
                />
              </div>
              <div className="col-6" data-aos="fade-up" data-aos-delay="200">
                <img
                  src="../images/business2.jpg"
                  className="img-fluid box-shadow-5 mb-4"
                  alt=""
                />
                <img
                  src="../images/business3.jpg"
                  className="img-fluid box-shadow-5"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-4 ps-xl-5">
            <h3
              className="text-9 text-lg-5 text-xl-9 line-height-3 text-transform-none font-weight-semibold mb-4 mb-lg-3 mb-xl-4"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Experience Luxury and Comfort Like Never Before
            </h3>
            <p
              className="text-3-5 pb-1 mb-4 mb-lg-2 mb-xl-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Experience unparalleled luxury with our business-class and
              first-class flight bookings. Enjoy spacious seats, world-class
              amenities, and gourmet dining options tailored for your ultimate
              comfort. Whether traveling for work or leisure, our premium
              services redefine luxury travel.
            </p>

            <ul>
              <li>
                <strong>Business-Class Excellence:</strong> Spacious seating,
                priority boarding, and exceptional in-flight services ensure
                your journey is as productive as it is comfortable.
              </li>
              <li>
                <strong>First-Class Luxury:</strong> Indulge in personalized
                service, exclusive lounges, and the finest dining options for a
                truly elite experience.
              </li>
            </ul>
            <div
              className="row align-items-center pb-2 mb-2 "
              data-aos="fade-up"
              data-aos-delay="750"
            >
              <div className="col-5">
                <div className="d-flex align-items-center">
                  <img
                    width={63}
                    height={63}
                    src="../images/label.svg"
                    alt="Premium Service Icon"
                    className="d-lg-none d-xl-block"
                    style={{ opacity: 1, width: 63 }}
                  />
                  <span className="text-3 font-weight-bold text-color-dark pt-2 ms-2">
                    <strong className="d-block font-weight-bold text-9">
                      1,000+
                    </strong>
                    Happy Clients
                  </span>
                </div>
              </div>
              <div className="col-7">
                <blockquote className="custom-blockquote-style-1 m-0 pt-1 pb-2">
                  <p className="mb-0">
                    “The best flying experience I’ve ever had! The service and
                    comfort are unmatched.”
                  </p>
                </blockquote>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="1000">
              <button className="theme-btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessClass;
