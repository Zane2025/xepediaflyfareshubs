import { tfn } from "@/utils/essentials";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <section id="contact" className="contact-area ">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-5">
              {/* Section Heading */}
              <div className="section-heading text-center mb-3">
                <h2>Let's Connect!</h2>
                <p className="d-none d-sm-block mt-4">
                  Already have a bookng and want to make amends such as change
                  or cancel, get a refund, name correction. Call us for swift
                  and hassle-free arrangements
                </p>
                <p className="d-block d-sm-none mt-4">
                  Ready to explore? Contact us today for all your travel needs!
                </p>
              </div>
              {/* Contact Us */}
              <div className="contact-us">
                <ul>
                  {/* Contact Info */}
                  <li className="contact-info color-1 bg-hover active hover-bottom text-center p-5 m-3">
                    <span>
                      <i
                        style={{ color: "#d2d92b" }}
                        className="fas fa-mobile-alt fa-3x"
                      />
                    </span>
                    <a className="d-block my-2 text-dec-none" href={tfn}>
                      <h3>+1(805) 507-7447</h3>
                    </a>
                    <p>
                      Call us for personalized travel assistance and
                      recommendations.
                    </p>
                  </li>
                  {/* Contact Info */}
                  <li className="contact-info color-3 bg-hover active hover-bottom text-center p-5 m-3">
                    <span>
                      <i
                        style={{ color: "#fc573b" }}
                        className="fas fa-envelope-open-text fa-3x"
                      />
                    </span>
                    <a
                      className="d-none d-sm-block my-2 text-dec-none"
                      href="mailto:xepediaflyfareshub.com"
                    >
                      <h3>xepediaflyfareshub.com</h3>
                    </a>
                    <a
                      className="d-block d-sm-none my-2 text-dec-none"
                      href="mailto:travel@company.com"
                    >
                      <h3>travel@company.com</h3>
                    </a>
                    <p>
                      Drop us an email, and we'll get back to you with all the
                      details you need.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6 pt-4 pt-lg-0">
              {/* Contact Box */}
              <div className="contact-box text-center">
                {/* Contact Form */}
                <form
                  id="contact-form"
                  method="POST"
                  action="https://theme-land.com/digimx/demo/assets/php/mail.php"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="company"
                          placeholder="Company Name (optional)"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Phone"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="How can we assist you?"
                          required="required"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12 pt-5">
                      <button type="submit" className="btn btn-primary">
                        <span className="text-white pr-3">
                          <i
                            style={{ marginRight: "10px" }}
                            className="fas fa-paper-plane"
                          />
                        </span>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-message" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
