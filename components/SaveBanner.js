import React from "react";

const SaveBanner = () => {
  return (
    <>
      <div
        className="container-custom save-banner"
        style={{
          backgroundImage: "url('images/bannerbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          borderRadius: "15px",
        }}
      >
        <div className="card-div">
          <div className="card">
            <h2>Save instantly with Expedia Rewards</h2>
            <span>
              You can enjoy access to perks like Member Prices, save 10% or more
              on over 100,000 hotels worldwide.
            </span>
            <button className="blue-btn-big mt-2" style={{ width: "60%" }}>
              Get Member Prices
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveBanner;
