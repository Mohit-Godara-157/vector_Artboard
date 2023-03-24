import React from "react";
import heroImage from "../assets/img/png/heroImage.png";
import dotsImage from "../assets/img/svg/dotsImage.svg";
import { Col, Container, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="z-3 position-relative">
      <img
        className="position-absolute  bottom_20 start-0"
        width={200}
        src={dotsImage}
        alt="dotsImage"
      />
      <Container>
        <Row className="py-5 flex-column-reverse flex-xl-row align-items-center ">
          <Col xl={6}>
            <h2 className="ff_inter fs_xxl fw-light text_lightprimary">
              Increased Efficiency
            </h2>
            <h3 className="fs_xxxxxl text_lightprimary ff_inter fw-bold">
              Through Automation
            </h3>
            <p className="fs_tai fw-normal ff_inter text_dark_50 mt-2">
              We have{" "}
              <span className="fw-bold">automated invoice distribution</span>{" "}
              from as our automation initiatives.
            </p>
          </Col>
          <Col xl={6}>
            <img className="w-100" src={heroImage} alt="heroImage" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
