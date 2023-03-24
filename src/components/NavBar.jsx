import React, { useState } from "react";
import logoImage from "../assets/img/svg/logo.svg";
import yellowatrat from "../assets/img/svg/yellow@.svg";
import circle from "../assets/img/svg/circle.svg";
import yellowcircle from "../assets/img/svg/yellowcircle.svg";
import cross from "../assets/img/svg/cross.svg";
import yellowcross from "../assets/img/svg/yellowcross.svg";
import heroPosition from "../assets/img/png/headerPosition.png";
import { Container } from "react-bootstrap";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  return (
    <div>
      <img
        className="position-absolute top-0 end-0 d-none d-md-block"
        src={yellowatrat}
        alt="yellowatrat"
      />
      <img
        className="position-absolute top-0 start-0 d-none d-md-block"
        src={circle}
        alt="circle"
      />
      <img
        className="position-absolute circleBottom  d-none d-md-block"
        width={70}
        src={circle}
        alt="circle"
      />
      <img
        className="position-absolute circle_Sset d-none d-md-block"
        src={circle}
        alt="circle"
      />
      <img
        className="position-absolute yellowCircle_set d-none d-md-block"
        src={yellowcircle}
        alt="yellowcircle"
      />
      <img
        className="position-absolute  circleSet d-none d-md-block"
        src={cross}
        alt="cross"
      />
      <img
        className="position-absolute  circleSet3 d-none d-md-block"
        src={cross}
        alt="cross"
      />
      <img
        className="position-absolute  yellow_crossSet d-none d-md-block"
        src={yellowcross}
        alt="yellowcross"
      />
      <img
        className="position-absolute  circleSet2 d-none d-md-block"
        width={20}
        src={cross}
        alt="cross"
      />
      <img
        className="position-absolute  circleSet1 d-none d-md-block"
        width={30}
        src={cross}
        alt="cross"
      />
      <img
        className="position-absolute nav_position_sm nav_position_lg nav_position_xl nav_position_xxl nav_position_xxxl nav_position_md nav_position_xsm zn_1  w-100"
        src={heroPosition}
        alt="heroPosition"
      />
      <Container>
        <nav className="py-4 d-flex align-items-center justify-content-between position-relative z-3">
          <button
            className="btn ff_raleway fs_bis text-white fw-semibold bg_primary rounded-5 px-4 position-absolute top-0 end-0 m-4 d-md-none z-0"
            onClick={() => setShowNav(false)}
          >
            Open
          </button>
          <a href="#">
            <img src={logoImage} alt="logoImage" />
          </a>
          <ul
            className={
              showNav
                ? "p-0 d-flex mb-0 close_Nav  d-md-flex "
                : "show_Nav d-flex mb-0"
            }
          >
            <button
              className="btn ff_raleway fs_bis text-white fw-semibold bg_primary rounded-5 px-4 position-absolute top-0 end-0 m-4 d-md-none z-0"
              onClick={() => setShowNav(true)}
            >
              Close
            </button>
            <li className="px-md-4 py-4 py-md-0">
              <a
                className="text_primary position-relative navLinks fs_bis ff_raleway fw-medium"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="px-md-4 py-4 py-md-0">
              <a
                className="text_primary position-relative navLinks fs_bis ff_raleway fw-medium"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="px-md-4 py-4 py-md-0">
              <a
                className="text_primary position-relative navLinks fs_bis ff_raleway fw-medium"
                href="#"
              >
                Services
              </a>
            </li>
            <li className="ps-md-4 py-4 py-md-0">
              <a
                className="text_primary position-relative navLinks fs_bis ff_raleway fw-medium"
                href="#"
              >
                Premium
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
