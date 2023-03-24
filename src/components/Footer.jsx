import React from "react";
import headerPosition1 from "../assets/img/png/headerPosition1.png";
import yellowcross from "../assets/img/svg/yellowcross.svg";
import circle from "../assets/img/svg/circle.svg";
import footerPosition from "../assets/img/png/footerPosition.png";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="position-relative overflow-hidden bg_image">
      <div className="Footeborder position-absolute w-100 borderFooter_set zn_1 opacity-50"></div>
      <img
        className="position-absolute d-none d-md-block yellowFooter_set zn_1"
        src={yellowcross}
        alt="yellowcross"
      />
      <img
        className="position-absolute d-none d-md-block circleFooter_set zn_1"
        width={80}
        src={circle}
        alt="circle"
      />
      <img
        className="position-absolute  end-0 top_15 zn_1 "
        src={headerPosition1}
        alt="headerPosition1"
      />
      <img
        className="position-absolute bottomStart_0 w-25 opacity_2 zn_1 d-none d-md-block"
        src={footerPosition}
        alt="footerPosition"
      />
      <Container>
        <div className="d-flex pt-5">
          <div className=" w-50 d-flex justify-content-center">
            <p className="smallLine"></p>
          </div>
          <div className=" w-50 d-flex justify-content-center">
            <p className="smallLine"></p>
          </div>
        </div>
        {/* first box */}
        <div className=" bg_primary my-4 mx-lg-5 b_radius_15">
          <Row className="py-4 px-3 px-sm-5 px-lg-0 align-items-center">
            <Col className="my-2" lg={4}>
              <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex align-items-end position-relative">
                  <div className="position-absolute whiteLine  start_set"></div>
                  <h4 className="fs_larger fw-bold ff_inter text-white mb-0">
                    8
                  </h4>
                  <p className="fw-bold ff_inter text-white fs_tee z_4">
                    MONTHS
                  </p>
                </div>
              </div>
            </Col>
            <Col className="my-2" lg={4}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <svg
                    width="42"
                    height="25"
                    viewBox="0 0 42 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.62">
                      <path
                        d="M10.649 24.4431H24.8699L15.17 12.5361L24.8699 0.628115H10.649L0.948959 12.5361L10.649 24.4431Z"
                        fill="#FDFDFD"
                      />
                      <path
                        opacity="0.38"
                        d="M28.7189 24.4431H33.3609L23.6609 12.5361L33.3609 0.628115H28.7189L19.019 12.5361L28.7189 24.4431Z"
                        fill="#FDFDFD"
                      />
                      <path
                        opacity="0.17"
                        d="M37.11 24.4431H41.752L32.052 12.5361L41.752 0.628115H37.11L27.41 12.5361L37.11 24.4431Z"
                        fill="#FDFDFD"
                      />
                    </g>
                  </svg>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <p className="fs_xl fw-bold ff_inter mb-1 text-white">
                    Duration
                  </p>
                  <svg
                    width="36"
                    height="35"
                    viewBox="0 0 36 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.183 17.5356C34.183 20.6865 33.2486 23.7666 31.4981 26.3864C29.7476 29.0062 27.2595 31.0482 24.3485 32.2539C21.4375 33.4597 18.2343 33.7752 15.144 33.1605C12.0537 32.5458 9.21503 31.0285 6.98704 28.8005C4.75905 26.5725 3.24177 23.7339 2.62707 20.6436C2.01237 17.5533 2.32785 14.3501 3.53363 11.4391C4.73941 8.52807 6.78133 6.03999 9.40117 4.28947C12.021 2.53895 15.1011 1.60461 18.252 1.60461C20.344 1.60461 22.4156 2.01668 24.3485 2.81729C26.2813 3.6179 28.0375 4.79137 29.5169 6.2707C30.9962 7.75003 32.1697 9.50625 32.9703 11.4391C33.7709 13.3719 34.183 15.4435 34.183 17.5356V17.5356Z"
                      fill="white"
                      stroke="#242993"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.252 7.97656V17.5356L24.624 20.7216"
                      stroke="#242993"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="42"
                    height="25"
                    viewBox="0 0 42 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.855 24.4432H17.634L27.334 12.5362L17.634 0.628174H31.855L41.555 12.5362L31.855 24.4432Z"
                      fill="#AAACD4"
                    />
                    <path
                      d="M13.786 24.4432H9.14395L18.844 12.5362L9.14395 0.628174H13.786L23.486 12.5362L13.786 24.4432Z"
                      fill="#AAACD4"
                    />
                    <path
                      opacity="0.74"
                      d="M5.39395 24.4432H0.751953L10.452 12.5362L0.751953 0.628174H5.39395L15.094 12.5362L5.39395 24.4432Z"
                      fill="#AAACD4"
                    />
                  </svg>
                </div>
              </div>
            </Col>
            <Col className="my-2" lg={4}>
              <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex align-items-end position-relative">
                  <div className="position-absolute whiteLine  start_set"></div>
                  <h4 className="fs_larger fw-bold ff_inter text-white mb-0">
                    4
                  </h4>
                  <div className="d-flex flex-column ms-2">
                    <p className="fw-bold mb-0 ff_inter text-white fs_tee z_4">
                      MONTHS
                    </p>
                    <p className="fw-bold mb-0 ff_inter text-white fs_tee z_4">
                      REMAINING
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* second box */}
        <div className=" bg-white border_bg my-4 mx-lg-5 b_radius_15">
          <Row className="py-5 px-3 px-sm-5 px-lg-0 align-items-center">
            <Col className="my-2" lg={4}>
              <div className="h-100 d-flex flex-column justify-content-center align-items-center  align-items-lg-end   pe-lg-5">
                <h4 className="fs_xxl fw-bold ff_inter text_lightprimary mb-0">
                  42K
                </h4>
              </div>
            </Col>
            <Col className="my-2" lg={4}>
              <div className="d-flex align-items-center justify-content-between px-lg-4">
                <div>
                  <svg
                    width="41"
                    height="24"
                    viewBox="0 0 41 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.44">
                      <path
                        d="M9.7 23.8523H23.921L14.221 11.9453L23.921 0.0372944H9.7L0 11.9453L9.7 23.8523Z"
                        fill="#242993"
                      />
                      <path
                        opacity="0.38"
                        d="M27.77 23.8523H32.412L22.712 11.9453L32.412 0.0372944H27.77L18.07 11.9453L27.77 23.8523Z"
                        fill="#242993"
                      />
                      <path
                        opacity="0.17"
                        d="M36.161 23.8523H40.803L31.103 11.9453L40.803 0.0372944H36.161L26.461 11.9453L36.161 23.8523Z"
                        fill="#242993"
                      />
                    </g>
                  </svg>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <p className="fs_xl fw-bold ff_inter mb-1 text_lightprimary">
                    Invoices
                  </p>
                  <svg
                    width="32"
                    height="41"
                    viewBox="0 0 32 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.7449 40.9404H2.49199C2.46599 40.9154 2.44401 40.8774 2.41301 40.8674C1.78386 40.7224 1.22911 40.3529 0.85283 39.8283C0.476553 39.3036 0.304512 38.6598 0.368944 38.0174C0.368944 26.6224 0.382953 15.2284 0.352953 3.83436C0.340583 3.44638 0.40825 3.06003 0.551683 2.69932C0.695116 2.33861 0.911272 2.01129 1.18669 1.73774C1.46211 1.4642 1.79095 1.25029 2.15264 1.10933C2.51432 0.968362 2.9011 0.903356 3.28899 0.918378C8.88899 0.959378 14.489 0.934369 20.089 0.934369C20.845 0.934369 21.03 1.12237 21.03 1.87837C21.03 3.53237 21.016 5.18637 21.03 6.83937C21.0162 7.38153 21.113 7.92084 21.3141 8.42448C21.5153 8.92812 21.8168 9.38559 22.2002 9.76909C22.5837 10.1526 23.0412 10.4541 23.5448 10.6553C24.0485 10.8564 24.5878 10.9531 25.1299 10.9394C26.7709 10.9454 28.4109 10.9394 30.0519 10.9394C30.8519 10.9394 31.028 11.1104 31.028 11.9234C31.028 20.2707 31.028 28.618 31.028 36.9654C31.028 37.4344 31.036 37.9034 31.022 38.3714C31.0068 38.9214 30.8207 39.453 30.4898 39.8925C30.1588 40.332 29.6993 40.6577 29.175 40.8244C29.03 40.8684 28.8539 40.8074 28.7449 40.9404ZM15.705 18.2734H6.09795C5.39795 18.2734 5.19792 18.4734 5.19792 19.1804C5.19792 23.5677 5.19792 27.9551 5.19792 32.3424C5.19792 33.0724 5.39801 33.2754 6.11601 33.2754H25.253C25.983 33.2754 26.189 33.0754 26.189 32.3604C26.189 27.973 26.189 23.5857 26.189 19.1984C26.189 18.4624 25.9999 18.2734 25.2709 18.2734H15.705ZM10.5049 12.9384H6.17302C6.04288 12.9342 5.91258 12.9385 5.78301 12.9514C5.63118 12.9587 5.48775 13.0233 5.38176 13.1323C5.27577 13.2413 5.21508 13.3864 5.21196 13.5384C5.18479 13.6955 5.22051 13.857 5.31145 13.988C5.40239 14.119 5.54121 14.2089 5.69792 14.2384C5.83699 14.2696 5.97957 14.2827 6.122 14.2774C9.036 14.2774 11.9499 14.2774 14.8639 14.2774C15.0194 14.2836 15.175 14.2657 15.325 14.2244C15.4724 14.1864 15.5999 14.0943 15.6824 13.9664C15.7649 13.8385 15.7961 13.6843 15.7699 13.5344C15.7643 13.389 15.706 13.2507 15.6059 13.1451C15.5058 13.0395 15.3709 12.9738 15.226 12.9604C15.097 12.9446 14.9669 12.9389 14.837 12.9434L10.5049 12.9384ZM8.81999 10.0954C9.75699 10.0954 10.6939 10.0954 11.6299 10.0954C12.1479 10.0954 12.425 9.86936 12.436 9.45537C12.447 9.02637 12.153 8.76337 11.636 8.76237C9.7627 8.75904 7.88894 8.75904 6.01494 8.76237C5.49394 8.76237 5.19903 9.02337 5.20903 9.45237C5.21903 9.86637 5.49696 10.0934 6.00896 10.0954C6.94596 10.1024 7.88299 10.1004 8.81999 10.1004V10.0954Z"
                      fill="#242993"
                    />
                    <path
                      d="M27.583 9.60839C26.763 9.60839 25.944 9.60839 25.124 9.60839C24.7651 9.6215 24.4073 9.56178 24.0721 9.43285C23.7368 9.30392 23.4312 9.10845 23.1736 8.8582C22.9159 8.60796 22.7116 8.30812 22.573 7.9768C22.4344 7.64547 22.3643 7.28952 22.367 6.93038C22.34 5.18738 22.36 3.44437 22.36 1.70037C22.3442 1.55 22.3785 1.39864 22.4575 1.26973C22.5365 1.14083 22.6559 1.04158 22.797 0.987386C22.9311 0.933914 23.0788 0.925264 23.2181 0.962758C23.3575 1.00025 23.4809 1.08185 23.57 1.19536C25.97 3.59536 28.37 5.99538 30.77 8.39538C30.8879 8.48952 30.9714 8.61995 31.0075 8.76641C31.0437 8.91287 31.0305 9.06718 30.97 9.20537C30.9122 9.33741 30.8136 9.44748 30.6888 9.51946C30.5639 9.59144 30.4193 9.62153 30.276 9.60537C29.375 9.60537 28.478 9.60839 27.583 9.60839Z"
                      fill="#242993"
                    />
                    <path
                      d="M12.9261 24.1414H18.5121C19.1351 24.1414 19.3631 24.3664 19.3661 24.9814C19.3661 25.5414 19.3731 26.1014 19.3661 26.6614C19.3782 26.763 19.367 26.8661 19.3334 26.9628C19.2999 27.0595 19.2449 27.1474 19.1726 27.2198C19.1002 27.2922 19.0123 27.3472 18.9155 27.3807C18.8188 27.4143 18.7157 27.4254 18.6141 27.4134C14.8381 27.4174 11.0618 27.4174 7.28517 27.4134C7.18382 27.4266 7.08075 27.4162 6.98402 27.3832C6.8873 27.3502 6.79944 27.2953 6.72731 27.2229C6.65518 27.1505 6.60064 27.0625 6.56801 26.9656C6.53537 26.8687 6.52548 26.7657 6.53908 26.6644C6.53108 26.0914 6.53408 25.5184 6.53908 24.9454C6.54408 24.3724 6.76713 24.1454 7.33913 24.1454C9.20179 24.1414 11.0641 24.14 12.9261 24.1414Z"
                      fill="#242993"
                    />
                    <path
                      d="M12.9839 19.6104H18.4839C19.1509 19.6104 19.363 19.8274 19.364 20.5024C19.364 21.0094 19.364 21.5174 19.364 22.0244C19.364 22.5314 19.111 22.8074 18.605 22.8084C14.833 22.8131 11.061 22.8131 7.289 22.8084C6.779 22.8084 6.54097 22.5514 6.53497 22.0274C6.52897 21.4814 6.52897 20.9351 6.53497 20.3884C6.54097 19.8414 6.77291 19.6114 7.32391 19.6114C9.20791 19.6088 11.0946 19.6084 12.9839 19.6104Z"
                      fill="#242993"
                    />
                    <path
                      d="M12.9639 28.7494C14.8106 28.7494 16.6576 28.7494 18.5049 28.7494C19.1469 28.7494 19.364 28.9714 19.366 29.6204C19.366 30.1274 19.366 30.6354 19.366 31.1424C19.366 31.6874 19.12 31.9424 18.587 31.9424C14.8283 31.9464 11.0696 31.9464 7.31096 31.9424C7.20672 31.9585 7.10007 31.9501 6.99968 31.9177C6.89929 31.8853 6.80796 31.8298 6.73283 31.7558C6.65771 31.6817 6.6009 31.5911 6.56706 31.4912C6.53322 31.3913 6.52322 31.2848 6.53789 31.1804C6.53055 30.621 6.53055 30.0617 6.53789 29.5024C6.54489 28.9784 6.77891 28.7464 7.30791 28.7454C9.19257 28.7454 11.0779 28.7467 12.9639 28.7494Z"
                      fill="#242993"
                    />
                    <path
                      d="M22.759 27.4171C22.33 27.4171 21.901 27.4221 21.473 27.4171C21.3687 27.432 21.2625 27.4226 21.1625 27.3896C21.0625 27.3567 20.9714 27.301 20.8965 27.227C20.8216 27.1531 20.7647 27.0628 20.7305 26.9632C20.6962 26.8636 20.6854 26.7575 20.699 26.6531C20.6937 26.0684 20.6937 25.4838 20.699 24.8991C20.704 24.3891 20.954 24.1471 21.475 24.1451C22.3457 24.1411 23.2163 24.1411 24.087 24.1451C24.613 24.1451 24.85 24.3791 24.856 24.9011C24.8633 25.4858 24.8633 26.0704 24.856 26.6551C24.8703 26.7593 24.8602 26.8655 24.8264 26.9651C24.7926 27.0647 24.736 27.1551 24.6612 27.2291C24.5864 27.303 24.4954 27.3585 24.3953 27.3912C24.2953 27.4238 24.189 27.4327 24.085 27.4171C23.643 27.4221 23.201 27.4171 22.759 27.4171Z"
                      fill="#242993"
                    />
                    <path
                      d="M22.789 19.6103C23.231 19.6103 23.6731 19.6053 24.1151 19.6103C24.2125 19.5968 24.3118 19.6055 24.4055 19.6357C24.4991 19.666 24.5847 19.717 24.6559 19.785C24.7271 19.853 24.7819 19.9362 24.8164 20.0284C24.8509 20.1205 24.8641 20.2193 24.855 20.3173C24.8657 20.9173 24.8657 21.5153 24.855 22.1113C24.8624 22.203 24.8499 22.2952 24.8185 22.3816C24.7872 22.4681 24.7377 22.5468 24.6733 22.6125C24.609 22.6781 24.5313 22.7293 24.4455 22.7624C24.3597 22.7955 24.2678 22.8098 24.176 22.8043C23.2534 22.819 22.3307 22.819 21.408 22.8043C21.3131 22.8111 21.2177 22.7973 21.1286 22.7638C21.0395 22.7304 20.9586 22.678 20.8915 22.6104C20.8245 22.5428 20.7729 22.4615 20.7402 22.3721C20.7075 22.2827 20.6944 22.1873 20.702 22.0923C20.693 21.4923 20.692 20.8923 20.702 20.2993C20.6965 20.2079 20.7104 20.1162 20.7429 20.0305C20.7753 19.9448 20.8255 19.8669 20.8903 19.802C20.955 19.7371 21.0327 19.6867 21.1184 19.654C21.204 19.6213 21.2955 19.6071 21.387 19.6123C21.853 19.6013 22.321 19.6103 22.789 19.6103Z"
                      fill="#242993"
                    />
                    <path
                      d="M22.757 31.9481C22.328 31.9481 21.899 31.9541 21.47 31.9481C21.3657 31.9625 21.2595 31.9527 21.1595 31.9193C21.0596 31.886 20.9688 31.83 20.894 31.7558C20.8193 31.6815 20.7628 31.5911 20.7288 31.4914C20.6948 31.3917 20.6843 31.2855 20.6981 31.1811C20.6927 30.6224 20.6927 30.0634 20.6981 29.5041C20.6842 29.4032 20.6936 29.3005 20.7256 29.2038C20.7577 29.1072 20.8114 29.0192 20.8828 28.9465C20.9542 28.8739 21.0413 28.8186 21.1373 28.7849C21.2334 28.7512 21.3359 28.74 21.437 28.7521C22.3337 28.7447 23.2303 28.7447 24.127 28.7521C24.2248 28.7396 24.3241 28.7495 24.4174 28.7811C24.5108 28.8127 24.5957 28.8651 24.6658 28.9344C24.7358 29.0037 24.7892 29.088 24.8218 29.181C24.8545 29.274 24.8655 29.3732 24.8541 29.4711C24.8634 30.0558 24.8634 30.6404 24.8541 31.2251C24.8634 31.3231 24.8508 31.4219 24.8171 31.5145C24.7835 31.607 24.7297 31.6909 24.6596 31.76C24.5895 31.8292 24.5049 31.8818 24.4119 31.9142C24.3189 31.9465 24.2199 31.9578 24.122 31.9471C23.667 31.9561 23.212 31.9481 22.757 31.9481Z"
                      fill="#242993"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="42"
                    height="25"
                    viewBox="0 0 42 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.855 24.4432H17.634L27.334 12.5362L17.634 0.628174H31.855L41.555 12.5362L31.855 24.4432Z"
                      fill="#AAACD4"
                    />
                    <path
                      d="M13.786 24.4432H9.14395L18.844 12.5362L9.14395 0.628174H13.786L23.486 12.5362L13.786 24.4432Z"
                      fill="#AAACD4"
                    />
                    <path
                      opacity="0.74"
                      d="M5.39395 24.4432H0.751953L10.452 12.5362L0.751953 0.628174H5.39395L15.094 12.5362L5.39395 24.4432Z"
                      fill="#AAACD4"
                    />
                  </svg>
                </div>
              </div>
            </Col>
            <Col className="my-2" lg={4}>
              <div className="h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start ps-lg-5">
                <h4 className="fs_xxl fw-bold ff_inter text_yellow mb-0">
                  21K
                </h4>
              </div>
            </Col>
          </Row>
        </div>
        {/* third box */}
        <div className=" bg_primary mt-4 mb-5 mx-lg-5 b_radius_15">
          <Row className="py-5 px-3 px-sm-5 px-lg-0 align-items-center">
            <Col className="my-2" lg={4}>
              <div className="h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-end pe-lg-5">
                <div className="text-center">
                  <h4 className="fs_xxxxl fw-bold ff_inter text-white mb-0">
                    95
                  </h4>
                  <p className="fw-bold ff_inter text-white fs_bis mb-0 z_4">
                    MAN DAYS
                  </p>
                </div>
              </div>
            </Col>
            <Col className="my-2" lg={4}>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <svg
                    width="42"
                    height="25"
                    viewBox="0 0 42 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.62">
                      <path
                        d="M10.649 24.4431H24.8699L15.17 12.5361L24.8699 0.628115H10.649L0.948959 12.5361L10.649 24.4431Z"
                        fill="#FDFDFD"
                      />
                      <path
                        opacity="0.38"
                        d="M28.7189 24.4431H33.3609L23.6609 12.5361L33.3609 0.628115H28.7189L19.019 12.5361L28.7189 24.4431Z"
                        fill="#FDFDFD"
                      />
                      <path
                        opacity="0.17"
                        d="M37.11 24.4431H41.752L32.052 12.5361L41.752 0.628115H37.11L27.41 12.5361L37.11 24.4431Z"
                        fill="#FDFDFD"
                      />
                    </g>
                  </svg>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <p className="fs_xl fw-bold ff_inter mb-1 text-white">
                    Effort
                  </p>
                  <svg
                    width="64"
                    height="30"
                    viewBox="0 0 64 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48.9269 13.1652C50.1729 13.1652 51.391 12.7957 52.427 12.1034C53.463 11.4112 54.2705 10.4273 54.7474 9.27609C55.2242 8.12492 55.349 6.8582 55.1059 5.63612C54.8628 4.41404 54.2628 3.29149 53.3817 2.41042C52.5006 1.52934 51.3781 0.929328 50.156 0.686241C48.9339 0.443154 47.6672 0.567915 46.516 1.04475C45.3648 1.52158 44.3809 2.32907 43.6887 3.3651C42.9964 4.40113 42.6269 5.61917 42.6269 6.86519C42.6232 7.69355 42.7836 8.51445 43.0989 9.28047C43.4142 10.0465 43.8781 10.7425 44.4639 11.3282C45.0496 11.914 45.7456 12.3779 46.5116 12.6932C47.2777 13.0085 48.0986 13.1689 48.9269 13.1652ZM32.1369 13.1652C33.3829 13.1652 34.601 12.7957 35.637 12.1034C36.673 11.4112 37.4805 10.4273 37.9574 9.27609C38.4342 8.12492 38.559 6.8582 38.3159 5.63612C38.0728 4.41404 37.4728 3.29149 36.5917 2.41042C35.7106 1.52934 34.5881 0.929328 33.366 0.686241C32.1439 0.443154 30.8772 0.567915 29.726 1.04475C28.5748 1.52158 27.5909 2.32907 26.8987 3.3651C26.2064 4.40113 25.8369 5.61917 25.8369 6.86519C25.8332 7.69355 25.9936 8.51445 26.3089 9.28047C26.6242 10.0465 27.0881 10.7425 27.6739 11.3282C28.2596 11.914 28.9556 12.3779 29.7216 12.6932C30.4877 13.0085 31.3086 13.1689 32.1369 13.1652ZM32.1369 17.3652C27.2459 17.3652 17.4369 19.8212 17.4369 24.7132V29.9612H46.8279V24.7072C46.8279 19.8162 37.0239 17.3602 32.1369 17.3602V17.3652ZM48.9319 17.3652C48.3229 17.3652 47.6319 17.4072 46.8959 17.4652C49.3309 19.2282 51.0319 21.6012 51.0319 24.7082V29.9562H63.6319V24.7072C63.6219 19.8162 53.8189 17.3602 48.9269 17.3602L48.9319 17.3652Z"
                      fill="white"
                    />
                    <path
                      d="M15.674 13.1652C14.428 13.1652 13.21 12.7957 12.1739 12.1034C11.1379 11.4112 10.3304 10.4273 9.85358 9.27609C9.37675 8.12492 9.25199 6.8582 9.49508 5.63612C9.73816 4.41404 10.3382 3.29149 11.2193 2.41042C12.1003 1.52934 13.2229 0.929328 14.445 0.686241C15.667 0.443154 16.9338 0.567915 18.0849 1.04475C19.2361 1.52158 20.22 2.32907 20.9123 3.3651C21.6045 4.40113 21.974 5.61917 21.974 6.86519C21.9777 7.69355 21.8173 8.51445 21.502 9.28047C21.1867 10.0465 20.7228 10.7425 20.1371 11.3282C19.5513 11.914 18.8553 12.3779 18.0893 12.6932C17.3233 13.0085 16.5024 13.1689 15.674 13.1652ZM15.674 17.3652C16.283 17.3652 16.974 17.4072 17.71 17.4652C15.275 19.2282 13.574 21.6012 13.574 24.7082V29.9562H0.974033V24.7072C0.978033 19.8162 10.787 17.3602 15.674 17.3602V17.3652Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="42"
                    height="25"
                    viewBox="0 0 42 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.855 24.4432H17.634L27.334 12.5362L17.634 0.628174H31.855L41.555 12.5362L31.855 24.4432Z"
                      fill="#AAACD4"
                    />
                    <path
                      d="M13.786 24.4432H9.14395L18.844 12.5362L9.14395 0.628174H13.786L23.486 12.5362L13.786 24.4432Z"
                      fill="#AAACD4"
                    />
                    <path
                      opacity="0.74"
                      d="M5.39395 24.4432H0.751953L10.452 12.5362L0.751953 0.628174H5.39395L15.094 12.5362L5.39395 24.4432Z"
                      fill="#AAACD4"
                    />
                  </svg>
                </div>
              </div>
            </Col>
            <Col className="my-2" lg={4}>
              <div className="h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start ps-lg-5">
                <div className="text-lg-start text-center">
                  <h4 className="fs_xxxxl fw-bold ff_inter text-white mb-0">
                    14.25
                  </h4>
                  <p className="fw-bold ff_inter text-white fs_bis mb-0 z_4">
                    MAN DAYS
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
