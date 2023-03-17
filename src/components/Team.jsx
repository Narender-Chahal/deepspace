import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import team_card from "../assets/img/png/team_img.png";
import ladies from "../assets/img/png/ladies.png";
import jents from "../assets/img/png/jents.png";
import girl from "../assets/img/png/girl.png";
import card1 from "../assets/img/png/card1.png";
import card2 from "../assets/img/png/card2.png";
import card3 from "../assets/img/png/card3.png";
function Team() {
  return (
    <section className="bg_color">
      <Container>
        <div className="text-center pt-5">
          <h2 className="text-white ff_Grandstander fw-medium fs_3xl mb-0 text_decoration ">
            Team
          </h2>
        </div>
        <Row className="d-none d-sm-flex justify-content-center">
          <Col xl={4} md={6} className="pt-5 mt-3">
            <div className="position-relative text-center text-md-start">
              <img className="" src={team_card} alt="team_card" />
              <div className="img_ladies ">
                <img className="w-100" src={ladies} alt="ladies" />
              </div>
              <div className="lorem_decoration">
                <p className="lorem_btn mb-0 text-white ff_Grandstander fw-normal fs-md">
                  Lorum Ipsum
                </p>
              </div>
            </div>
          </Col>
          <Col xl={4} md={6} className="pt-5 mt-3">
            <div className="position-relative text-center text-md-start">
              <img className="w-10 0" src={team_card} alt="team_card" />
              <div className="img_ladies">
                <img className="w-100" src={jents} alt="jents" />
              </div>
              <div className="lorem_decoration">
                <p className="lorem_btn mb-0 text-white ff_Grandstander fw-normal fs-md">
                  Lorum Ipsum
                </p>
              </div>
            </div>
          </Col>
          <Col xl={4} md={6} className="pt-5 mt-3">
            <div className="position-relative text-center text-md-start">
              <img className="w-10 0" src={team_card} alt="team_card" />
              <div className="img_ladies">
                <img className="w-100" src={girl} alt="girl" />
              </div>
              <div className="lorem_decoration">
                <p className="lorem_btn mb-0 text-white ff_Grandstander fw-normal fs-md">
                  Lorum Ipsum
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="d-sm-none text-center">
          <Col xs={12} className="pt-5">
            <img className="w-100" src={card1} alt="card1" />
          </Col>
          <Col xs={12} className="pt-5">
            <img className="w-100" src={card2} alt="card2" />
          </Col>
          <Col xs={12} className="pt-5">
            <img className="w-100" src={card3} alt="card3" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Team;
