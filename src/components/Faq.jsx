import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col } from "react-bootstrap";
import Faqs from "../assets/img/png/faq.png";
function Faq() {
  return (
    <section className="bg_color py-5 overflow-hidden">
      <Container>
        <div className="text-center pt-5 ">
          <h2 className="ff_Grandstander fw-medium fs_3xl text-white mb-0 text_decoration">
            FAQs
          </h2>
        </div>
        <Row className=" justify-content-lg-between align-items-center">
          <Col lg={8}>
            <div className="pt-5">
              {" "}
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <p className="mb-0 ff_Grandstander  fw-medium fs_lg text-white">
                      1. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <p className="ff_Grandstander mb-4 ms-lg-5 ms-4  fw-normal fs_sm text-white mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>
                    <p className="mb-0 ff_Grandstander  fw-medium fs_lg text-white">
                      2. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <p className="ff_Grandstander mb-4 ms-lg-5 ms-4  fw-normal fs_sm text-white mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mt-3">
                  <Accordion.Header>
                    <p className="mb-0 ff_Grandstander  fw-medium fs_lg text-white">
                      3. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <p className="ff_Grandstander mb-4 ms-lg-5 ms-4  fw-normal fs_sm text-white mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="mt-3">
                  <Accordion.Header>
                    <p className="mb-0 ff_Grandstander  fw-medium fs_lg text-white">
                      4. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <p className="ff_Grandstander mb-4 ms-lg-5 ms-4  fw-normal fs_sm text-white mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="mt-3">
                  <Accordion.Header>
                    <p className="mb-0 ff_Grandstander  fw-medium fs_lg text-white">
                      5. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <p className="ff_Grandstander mb-4 ms-lg-5 ms-4  fw-normal fs_sm text-white mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col lg={4}>
            <div className="pt-5 text-center animation1">
              {" "}
              <img className="" width={300} height={270} src={Faqs} alt="Faq" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Faq;
