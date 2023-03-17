import React from "react";
import DeepSpaceImage from "../assets/img/png/DeepSpaceImage.png";
import astoroger from "../assets/img/png/astoroger.png";
import ufo1 from "../assets/img/png/UFO1.png";
import { Container } from "react-bootstrap";

function HeroSection() {
  return (
    <div className="position-relative ">
      <Container>
        <div className="py-5 mt-lg-3 mt-xl-5  ">
          <img
            className="animation_move_y position-absolute positionImage_xl positionImage_xxl d-none d-xl-block"
            src={astoroger}
            height={360}
            alt="astoroger"
          />
          <img
            className="animation_move_y1 position-absolute positionImage1_xl positionImage1_xxl d-none d-xl-block"
            src={ufo1}
            alt="ufo1"
          />
          <div className="text-center mt-4">
            <img
              src={DeepSpaceImage}
              className="w_240_xsm w_340_sm w_450_md w_550_lg w_750_xl"
              alt="DeepSpaceImage"
            />
          </div>
          <p className="mw_480_xl fs_md fw-semibold text-white text-center mx-auto mb-0 ff_Grandstander">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            felis, dolor porta tincidunt consectetur nulla ac facilisis. Elit
            commodo amet, auctor et. Donec aliquet viverra in mauris nunc.
          </p>
          <div className="d-flex justify-content-center mt-md-4 mt-3">
            <a
              className="ff_Grandstander fs_xl fw-semibold text-white heroBtn"
              href="#"
            >
              Play Now
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
