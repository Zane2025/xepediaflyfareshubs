import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

const Bread = ({ mainhead, title }) => {
  return (
    <div
      className="container-fluid secondbanner text-center"
      style={{
        backgroundImage: `url("./images/bannerbg.jpg")`,
        backgroundBlendMode: "multiply",
        backgroundColor: "#00000075",
      }}
    >
      <div
        className="container second-banner-container d-flex justify-content-center"
        style={{ paddingTop: "200px" }}
      >
        <Link href={"/"}>
          <p data-aos="fade-up">{mainhead}&nbsp;</p>
        </Link>
        <span data-aos="fade-up">/&nbsp;{title}</span>
      </div>
    </div>
  );
};

export default Bread;
