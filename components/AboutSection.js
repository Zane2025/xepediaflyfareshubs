import React from "react";

const AboutSection = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {/* Left Column: Text Content */}
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Xepedia FlyFares Hub</strong>, one of the
            fastest-growing online travel sites dedicated to bringing your
            traveling dreams into reality. Whether it's an enterprise trip, a
            vacation with the family, or an individualized adventure, we provide
            detailed solutions to help meet budgets and preferences in travel
            services.
          </p>
          <p>
            With hundreds of thousands of hotel partners worldwide and an
            inventory of thousands of flights, we bring you the best deals on
            accommodations, activities, and travel services. From five-star
            hotels to cozy budget-friendly stays, and from adventurous tours to
            relaxing leisure experiences, <strong>Xepedia FlyFares Hub</strong>{" "}
            is your one-stop shop for all travel needs.
          </p>
          <h3>Why Choose Us?</h3>
          <ul className="about-us-features">
            <li>
              <strong>Wide Selection:</strong> Find something for everyone.
            </li>
            <li>
              <strong>Best Prices:</strong> Unbeatable value on all services.
            </li>
            <li>
              <strong>Global Reach:</strong> Partnerships worldwide for seamless
              bookings.
            </li>
            <li>
              <strong>User-Friendly Experience:</strong> Simplified planning and
              booking.
            </li>
          </ul>
        </div>
        {/* Right Column: Image */}
        <div className="about-us-image">
          <img src="./images/cruise.jpg" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
