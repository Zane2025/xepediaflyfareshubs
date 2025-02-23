import React from "react";

const QRBanner = () => {
  return (
    <>
      <div className="container-custom mt-5 ">
        <div className="card d-flex flex-row">
          <div className="card-left-image">
            <img src="images/footerimage.avif" />
          </div>
          <div className="center-text">
            <h2>Go further with the Expedia app</h2>
            <p>
              Save on select hotels and earn double points when you book on the
              app. Our app deals help you to save on trips so you can travel
              more and manage it all on the go.
            </p>
            <span>
              Scan the QR code with your device camera and download our app
            </span>
          </div>
          <div className="card-right-image">
            <img src="images/QRfooter.webp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default QRBanner;
