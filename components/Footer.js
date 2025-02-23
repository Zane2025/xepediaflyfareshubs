import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer pb-5 mt-5">
        <div className="contain">
          <div className="col mt-3">
            <div>
              <img
                style={{ width: "135px", borderRadius: "10px" }}
                src="/images/logo.jpeg"
              />
            </div>
            <span class="logo-span">Xepedia FlyFares Hub</span>
          </div>
          <div className="col">
            <h1>Company</h1>
            <ul>
              <a href="/about" class="text-decoration-none">
                {" "}
                <li>About</li>
              </a>
              <a href="/" class="text-decoration-none">
                {" "}
                <li>Home</li>
              </a>

              <a href="/contact" class="text-decoration-none">
                <li>Contact</li>
              </a>
            </ul>
          </div>

          <div className="col">
            <h1>Policies</h1>
            <ul>
              <a href="/privacy-policy" class="text-decoration-none">
                <li>Privacy</li>
              </a>
              <li>Cookies</li>
              <a href="terms-and-conditions" class="text-decoration-none">
                <li>Terms of use</li>
              </a>
            </ul>
          </div>
          <div className="col">
            <h1>Help</h1>
            <ul>
              <li>
                <a href="/changes-andc-cancellation-policy">
                  Change or cancel your booking
                </a>
              </li>
              <li>
                <a herf="refund-policy">Refund Timelines</a>
              </li>
            </ul>
          </div>

          <div className="col social">
            <h1>Social</h1>
            <ul>
              <li>
                {/* <img
                  src="https://svgshare.com/i/5fq.svg"
                  width={32}
                  style={{ width: 32 }}
                /> */}
                <i
                  style={{ fontSize: "28px", marginRight: "15px" }}
                  class="fa-brands fa-facebook"
                ></i>
              </li>
              <li>
                <i
                  style={{ fontSize: "28px", marginRight: "15px" }}
                  class="fa-brands fa-instagram"
                ></i>
              </li>
              <li>
                <i
                  style={{ fontSize: "28px", marginRight: "15px" }}
                  class="fa-brands fa-twitter"
                ></i>
              </li>
            </ul>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </>
  );
};

export default Footer;
