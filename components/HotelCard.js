import { tfn } from "@/utils/essentials";
import React from "react";

const HotelCard = (props) => {
  return (
    <>
      <div className="card">
        <img
          className="card-img-top-destination"
          src={props.img}
          alt={props.alt}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div className="card-text-destination">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              {props.location}
            </p>
            <p>
              <span>{props.price}</span>/Night
            </p>
          </div>
          <div className="call-now">
            <a href={tfn}>
              <button className="theme-btn" style={{ fontSize: "13px" }}>
                Book now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
