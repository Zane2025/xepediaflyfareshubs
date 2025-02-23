import { tfn } from "@/utils/essentials";
import React from "react";

const CheapFlights = () => {
  return (
    <>
      <section id="cheap-flights ">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <div className="flights-content title mb-3">
                <h2>
                  Economy Flights <br />
                  Discounted Deals <br />
                  Saver fare Booking <br />
                </h2>
                <p className="mb-3">
                  Discover the best deals on economy flights to your favorite
                  destinations. With exclusive discounted deals and a seamless
                  saver fare booking experience, we make it easy for you to plan
                  your next getaway. Whether you're traveling for business or
                  leisure, our economy options ensure you get the best price and
                  convenience for your journey.
                </p>

                <ul>
                  <li>
                    <b>Affordable Economy Flights:</b> Enjoy comfortable travel
                    without breaking the bank.
                  </li>
                  <br />
                  <li>
                    <b>Exclusive Discounts:</b> Access special offers and
                    promotions on economy fares.
                  </li>
                  <br />
                  <li>
                    <b>Easy Booking Process:</b> Book your economy flights
                    quickly and effortlessly.
                  </li>
                  <br />
                  <li>
                    <b>Flexible Options:</b> Tailored solutions for both
                    business and leisure travelers.
                  </li>
                </ul>
                <a href={tfn}>
                  <button className="theme-btn">Book Now</button>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="/images/cheap2.jpg"
                style={{ borderRadius: "20px" }}
                className="img-fluid"
                alt="Cheap Flights"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheapFlights;
