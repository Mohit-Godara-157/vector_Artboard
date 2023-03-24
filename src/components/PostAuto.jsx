import React from "react";
import circle from "../assets/img/svg/circle.svg";
import therat from "../assets/img/svg/@therat.svg";
import yellowcross from "../assets/img/svg/yellowcross.svg";
import cardPosition from "../assets/img/png/cardPosition.png";
import invoiceImage from "../assets/img/svg/invoice.svg";
import codeImage from "../assets/img/svg/code.svg";
import fileImage from "../assets/img/svg/file.svg";
import send from "../assets/img/svg/send.svg";
import invoice from "../assets/img/svg/invoiceImage.svg";
import rightArrow from "../assets/img/svg/rightArrow.svg";
import { Col, Container, Row } from "react-bootstrap";

const PostAuto = () => {
  return (
    <div className="position-relative overflow-hidden">
      <img
        className="d-none d-md-block position-absolute circleRight"
        width={80}
        src={circle}
        alt="circle"
      />
      <img
        className="d-none d-md-block position-absolute theratSet"
        src={therat}
        alt="therat"
      />
      <img
        className="d-none d-md-block position-absolute crossposition"
        src={yellowcross}
        alt="yellowcross"
      />
      <img
        className="d-none d-md-block position-absolute crossposition1"
        src={yellowcross}
        alt="yellowcross"
      />
      <div className="card_bg position-absolute top_sm_15 top_md_17 top_lg_24 start-0 w-100"></div>
      <div className="card_bottom_bg position-absolute start-0 bottom_sm_absolute bottom_md_absolute bottom_lg_absolute bottom_xl_absolute w-100"></div>
      <Container>
        <h2 className=" pt-5 text-center text_lightprimary fs_xxxl ff_inter fw-bold">
          Post-Automation
        </h2>
        <p className="ff_inter text_dark_50  pb-5 fw-normal text-center fs_tai mt-4 ">
          <span className="fw-bold "> End-to-end automation </span>
          on the Yardi platform
        </p>
        <Row className="py-lg-5 mt-5 justify-content-center ">
          <Col lg={4} sm={6} className="my-5 py-5">
            <div className="p-5 position-relative h-100 ">
              <img
                className="position-absolute end-0 botom_xsm_15 botom_15"
                src={rightArrow}
                alt="rightArrow"
              />
              <img
                className="position-absolute cardPosition"
                src={cardPosition}
                alt="cardPosition"
              />
              <img src={invoiceImage} alt="invoiceImage" />
              <p className="fs_sm mt-4 mb-0 ff_inter text_grey fw-medium ">
                System picks up invoices
                <span className="text_yellow"> automatically</span>
              </p>
            </div>
          </Col>
          <Col lg={4} sm={6} className="my-5 py-5">
            <div className="p-5 position-relative h-100">
              <img
                className="position-absolute end-0 botom_xsm_15 botom_15"
                src={rightArrow}
                alt="rightArrow"
              />
              <img
                className="position-absolute cardPosition"
                src={cardPosition}
                alt="cardPosition"
              />
              <img src={codeImage} alt="invoiceImage" />
              <p className="fs_sm mt-4 mb-0 ff_inter text_grey fw-medium ">
                Validating businessrules,
                <span className="text_yellow"> coding, </span>
                and
                <span className="text_yellow"> handling exceptions</span>
              </p>
            </div>
          </Col>
          <Col lg={4} sm={6} className="my-5 py-5">
            <div className="p-5 position-relative h-100">
              <img
                className="position-absolute cardPosition"
                src={cardPosition}
                alt="cardPosition"
              />
              <img src={fileImage} alt="fileImage" />
              <p className="fs_sm mt-4 mb-0 ff_inter text_grey fw-medium ">
                <span className="text_yellow"> Invoice distribution</span>
                by gathering contact details
              </p>
            </div>
          </Col>
          <Col lg={4} sm={6} className="my-5 py-5">
            <div className="p-5 position-relative h-100">
              <img
                className="position-absolute end-0 botom_xsm_15 botom_15"
                src={rightArrow}
                alt="rightArrow"
              />
              <img
                className="position-absolute cardPosition"
                src={cardPosition}
                alt="cardPosition"
              />
              <img src={send} alt="send" />
              <p className="fs_sm mt-4 mb-0 ff_inter text_grey fw-medium ">
                <span className="text_yellow"> Sending emails </span>
                with attachments with invoices to the recipients.
              </p>
            </div>
          </Col>
          <Col lg={4} sm={6} className="my-5 py-5">
            <div className="p-5 position-relative h-100">
              <img
                className="position-absolute cardPosition"
                src={cardPosition}
                alt="cardPosition"
              />
              <img src={invoice} alt="invoice" />
              <p className="fs_sm mt-4 mb-0 ff_inter text_grey fw-medium ">
                Finance receives system-generated
                <span className="text_yellow"> automated summaries</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostAuto;
