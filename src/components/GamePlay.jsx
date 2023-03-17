import React from "react";
import { Container } from "react-bootstrap";
import videoImage from "../assets/img/png/videoImage.png";
import playBtn from "../assets/img/svg/playBtn.svg";
import jupiter from "../assets/img/svg/jupitre.svg";
import uranus from "../assets/img/svg/uranus.svg";
import astrogerLaptop from "../assets/img/svg/astrogerLaptop.svg";

function GamePlay() {
  return (
    <div className="  universe_image ">
      <div className="linearGridient position-relative pt-5 overflow-hidden">
        <img
          src={astrogerLaptop}
          className="position-absolute animation_move_y1 astroger_absolute_xl astroger_absolute_xxl d-none d-xl-block"
          width={283}
          height={240}
          alt="astrogerLaptop"
        />
        <img
          src={jupiter}
          className="position-absolute juptiter_absolute_xl d-none d-xl-block"
          width={170}
          height={215}
          alt="jupiter"
        />
        <img
          src={uranus}
          className="position-absolute urnaus_absolute_xl urnaus_absolute_xxl animation_scrool astroger_absolute_xxl d-none d-xl-block"
          width={233}
          height={233}
          alt="uranus"
        />
        <Container>
          <h2 className="text-center pt-2 pt-xl-5 text-white text_decoration fs_3xl ff_Grandstander fw-semibold">
            Game Play
          </h2>
          <div className="vh_45_xsm vh_50_sm vh_60_md vh_85_lg align-items-center d-flex h-100 justify-content-center ">
            <div className="position-relative">
              <img
                src={videoImage}
                className="w_100_xsm h_200_xsm w_540_sm w_650_md w_750_lg w_1019_xl w_1119_xxl"
                alt="videoImage"
              />
              <a href="#">
                <img
                  src={playBtn}
                  className="position-absolute w_40_xsm image_center"
                  width={80}
                  alt="playBtn"
                />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default GamePlay;
