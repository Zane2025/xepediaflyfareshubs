import React from "react";

const HeadlineBanner = () => {
  return (
    <>
      <div className="container-custom mt-2">
        <div
          className="card navbg d-flex flex-row justify-content-between align-items-center"
          style={{ padding: "14px" }}
        >
          <div className="card-text">
            <img style={{ width: "50px" }} src="images/onekey.svg" />
            <span
              style={{
                marginLeft: "15px",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              Members save 10% or more on over 100,000 hotels worldwide when
              signed in
            </span>
          </div>
          <div className="card-btn">
            <button className="blue-btn-small">Sign in now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadlineBanner;
