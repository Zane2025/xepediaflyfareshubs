import { tfn } from "@/utils/essentials";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const handleRippleEffect = (e) => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const size = Math.max(e.target.clientWidth, e.target.clientHeight);
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    e.target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <Navbar expand="lg" className="navbar-header" data-bs-theme="light">
      <Container>
        <Navbar.Brand>
          <Link
            href="/"
            className="d-flex flex-column justify-center align-items-center"
          >
            <img
              style={{ width: "100px", borderRadius: "10px" }}
              src="/images/logo.jpeg"
              alt="Xepedia FlyFares Hub Logo"
            />
            <span className="logo-span">Xepedia FlyFares Hub</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Align the Nav links to the right using ms-auto */}
          <Nav className="ms-auto navbar" style={{ gap: "13px" }}>
            <Link href="#home">
              <i style={{ marginRight: "5px" }} class="fa-solid fa-globe"></i>
              English
            </Link>
            <Link href="about">About Us</Link>
            <Link href="/">Top Destination</Link>
            <Link href="/">Trips</Link>
            <Link href="/contact">Contact Us</Link>

            <Link
              href={tfn}
              className="blinking-button"
              onClick={handleRippleEffect}
            >
              <span className="tfn-text">+1(805) 507-7447</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
