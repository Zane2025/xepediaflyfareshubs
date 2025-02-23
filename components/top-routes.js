import { tfn } from "@/utils/essentials";
import React from "react";

const Toproutes = ({ toproutes }) => {
  return (
    <section>
      <div className="container mt-5">
        <h3 class="text-center">Top itineraries for your vacations</h3>
        <div className="row align-items-center justify-content-between mt-4">
          {toproutes.map((ite, index) => {
            return (
              <div
                data-aos="fade-right"
                className="col  col-md-5 routes-slides position-relative"
                key={index}
              >
                <a href={tfn} class="text-decoration-none cursor-pointer">
                  <span style={{ fontSize: "11px" }}>{ite.from}</span>
                  <span>
                    <i className="fa fa-exchange exchange-icon"></i>
                  </span>
                  <span style={{ fontSize: "11px" }}>{ite.to}</span>
                  <div class="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <span style={{ fontSize: "11px" }}>
                        <i className="fa fa-calendar"></i> {ite.date}
                      </span>
                      <span style={{ fontSize: "11px" }}>
                        <i className="fa fa-dollar"></i> {ite.price}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "10px",
                        padding: "5px",
                        border: "1px grey solid",
                        borderRadius: "10px",
                      }}
                    >
                      Book Now
                    </span>
                  </div>
                </a>

                {/* Badge with Plane Icon */}
                <div className="badge-plane position-absolute">
                  <img
                    src="/images/routes/departure.png"
                    class="depature-plane-badge"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Toproutes;
