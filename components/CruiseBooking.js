import React from "react";
import { tfn } from "@/utils/essentials";

const CruiseBooking = () => {
  return (
    <section className="cruise-section mt-100 mb-100">
      <div className="cruise-content">
        <div className="cruise-text">
          <h1>Luxury Cruise Adventures</h1>
          <p>
            Explore the world's most breathtaking destinations aboard our luxury
            cruises. Whether it's the Caribbean, Mediterranean, or Alaskan
            glaciers, we promise an unforgettable journey.
          </p>
          <ul>
            <li>Destinations across 5 continents</li>
            <li>5-star accommodations and dining</li>
            <li>All-inclusive packages available</li>
            <li>Custom itineraries to fit your needs</li>
          </ul>
          <a href={tfn} className="btn-book-now">
            Start Your Journey
          </a>
        </div>
        <div className="cruise-image">
          <img src="/images/cruise.jpg" alt="Luxury Cruise" />
        </div>
      </div>
    </section>
  );
};

export default CruiseBooking;
