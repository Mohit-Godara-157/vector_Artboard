import React from "react";
import forImage from "../assets/img/svg/4xImage.svg";
import cross from "../assets/img/svg/cross.svg";
import uparrow from "../assets/img/svg/uparrow.svg";
import dotsImage from "../assets/img/svg/dotsImage.svg";
import dotsRight from "../assets/img/svg/dotsRight.svg";
import readerImage from "../assets/img/png/readerImage.png";
import workerImage from "../assets/img/png/workerImage.png";
import { Col, Container, Row } from "react-bootstrap";

const Increasing = () => {
  return (
    <div className="position-relative">
      <img
        className="position-absolute d-none d-md-block position_setArrow"
        src={uparrow}
        alt="uparrow"
      />
      <img
        className="crossSet1 d-none d-md-block  position-absolute"
        src={cross}
        width={20}
        alt="cross"
      />
      <img
        className="position-absolute d-none d-md-block  start-0 top-0"
        width={200}
        src={dotsImage}
        alt="dotsImage"
      />
      <img
        className="position-absolute d-none d-md-block    end-0 top_15"
        width={270}
        src={dotsRight}
        alt="dotsRight"
      />
      <Container>
        <h2 className="text-center text_lightprimary ff_inter fw-bold fs_xxxl mb-0 ">
          Increasing process efficiency by
        </h2>
        <div className="py-4 position-relative">
          <p className="text-center fs_xxxxxxl ff_inter fw-bold text_green">
            4x
          </p>
          <img
            className="position-absolute bottom_xsm_10 bottom_sm_10  transform_x_50"
            src={forImage}
            alt="forImage"
          />
        </div>
        {/* vs */}
        <div className="d-sm-flex py-sm-5 my-4 position-relative">
          <div className="bg_pre b_radius_25 w_xsm_100 my-5 my-sm-0 w_sm_50 ms-lg-5">
            <p className="ff_inter  mb-0 py-4 px-1 px-sm-0 pe-3 pe-sm-0 fs_md text_pre fw-bold text-sm-start  text-center text-md-center">
              PRE-AUTOMATION
            </p>
          </div>
          <div className="position-absolute top_sm_0 start_sm_50 top_xms_0 transform_x_50">
            <div className="big_circle big_circle_lg  d-flex justify-content-center align-items-center">
              <div className="center_circle center_circle_lg d-flex justify-content-center align-items-center">
                <div className="d-flex">
                  <p className="text_pre_50 ff_inter fw-bold fs_xxxl mb-0">V</p>
                  <p className="text_pre_50 ff_inter fw-bold fs_xxxl mb-0 mt-3 ">
                    S
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg_yellow b_radius_25 w_xsm_100 my-5 my-sm-0 w_sm_50 me-lg-5">
            <p className="ff_inter  mb-0 py-4 px- px-sm-0 pe-3 pe-sm-01 fs_md text-white fw-bold text-sm-end text-center text-md-center">
              POST-AUTOMATION
            </p>
          </div>
        </div>
        {/* With 100% manual process */}
        <Row className="align-items-center py-4">
          <Col lg={6} className="my-3 my-lg-0 ">
            <div className="h-100">
              <div className="d-flex flex-column justify-content-center align-items-center ">
                <img
                  className="hw_md_manual hw_lg_manual w_md_100"
                  src={readerImage}
                  alt="readerImage"
                />
                <p className="ff_inter fs_lg mb-0 mt-5 text_yellow fw-bold">
                  With 100% manual process
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="my-3 my-lg-0 ">
            <div className="h-100">
              <div className="d-flex flex-column justify-content-center align-items-center ">
                <img
                  className="hw_md_manual hw_lg_manual w_md_100"
                  src={workerImage}
                  alt="workerImage"
                />
                <p className="ff_inter fs_lg mb-0 mt-5  text_primary_50 fw-bold">
                  With just 70% implementation
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Increasing;
