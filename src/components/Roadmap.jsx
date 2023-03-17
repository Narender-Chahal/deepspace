import React from "react";
import { Container } from "react-bootstrap";
import roadmap from "../assets/img/png/roadmap.png";
import phase1 from "../assets/img/png/phase1.png";
import phase2 from "../assets/img/png/phase2.png";
import aeroplane1 from "../assets/img/png/aeroplane1.png";
import aeroplane2 from "../assets/img/png/aeroplane2.png";
import img1 from "../assets/img/png/img1.png";
import sdfdse from "../assets/img/png/sdfdse.png";
function Roadmap() {
  return (
    <section className="bg_color py-5 position-relative overflow-hidden">
      <div className="aeroplane1_img">
        <img
          className="mw_180 mw_200 d-none d-lg-flex aeroplane1_animation "
          src={aeroplane1}
          alt="aeroplane1"
        />
      </div>
      <div className="aeroplane2_img">
        <img
          className="mw_180 d-none d-lg-flex aeroplane2_animation"
          src={aeroplane2}
          alt="aeroplane2"
        />
      </div>
      <div className="img1">
        <img
          className="mw_180 d-none d-lg-flex img2_animation {
"
          src={img1}
          alt="img1"
        />
      </div>
      <div className="sdfdse_img">
        <img
          className="mw_180 d-none d-lg-flex mw_200_xl img_animation"
          src={sdfdse}
          alt="sdfdse"
        />
      </div>
      <Container>
        <div className="text-center d-none d-sm-block">
          <h2 className="ff_Grandstander fw-medium fs_3xl text_decoration text-white mb-0 pb-5">
            Roadmap
          </h2>
          <div className="position-relative">
            <img
              className="w-100 w_lg_none position-relative"
              src={roadmap}
              alt="roadmap"
            />
            <div className="">
              <img className="phase1_img mw_150_sm" src={phase1} alt="phase1" />
              <div className=" phase1_text  text-start">
                <h2 className="ff_madali fw-normal fs_xxl mb-0 text-white text-start">
                  Phase 1
                </h2>
                <p className="ff_Grandstander fw-normal fs_sm text-white mb-0 pt-1 mw_400">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  ipsum fermentum augue non risus fermentum.
                </p>
              </div>
            </div>
            <div className="">
              <img className="phase2_img mw_150_sm" src={phase2} alt="phase2" />
              <div className=" phase2_text  text-end">
                <h2 className="ff_madali fw-normal fs_xxl mb-0 text-white text-end">
                  Phase 2
                </h2>
                <p className="ff_Grandstander fw-normal fs_sm text-white mb-0 pt-1 mw_250">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  risus fermentum.
                </p>
              </div>
            </div>
            <div>
              <img className="phase3_img mw_150_sm" src={phase1} alt="phase1" />
              <div className=" phase3_text  text-start">
                <h2 className="ff_madali fw-normal fs_xxl mb-0 text-white text-start">
                  Phase 3
                </h2>
                <p className="ff_Grandstander fw-normal fs_sm text-white mb-0 pt-1 mw_250">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  risus fermentum.
                </p>
              </div>
            </div>
            <div>
              <img className="phase4_img mw_150_sm" src={phase2} alt="phase2" />
              <div className=" phase4_text  text-end">
                <h2 className="ff_madali fw-normal fs_xxl mb-0 text-white text-end">
                  Phase 4
                </h2>
                <p className="ff_Grandstander fw-normal fs_sm text-white mb-0 pt-1 mw_250">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  risus fermentum.
                </p>
              </div>
            </div>
            <div>
              <img className="phase5_img mw_150_sm" src={phase1} alt="phase1" />
              <div className=" phase5_text  text-start">
                <h2 className="ff_madali fw-normal fs_xxl mb-0 text-white text-start">
                  Phase 5
                </h2>
                <p className="ff_Grandstander fw-normal fs_sm text-white mb-0 pt-1 mw_250">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  risus fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-sm-none">
          <h2 className="ff_Grandstander fw-medium fs_3xl text-center text_decoration text-white mb-0 pb-3">
            Roadmap
          </h2>
        </div>
        <div className="position-relative d-sm-none">
          <div className="white_roadmap">
            <div className="position-relative mt-5 ">
              <div className="dots">
                <div className="ms-5 ">
                  <h2 className="ff_madali fw-normal fs_xxl mb-0 text-white text-start">
                    Phase 5
                  </h2>
                  <p className="ff_Grandstander fw-normal fs_sm text-white mb-0 pt-1 ">
                    Venenatis scelerisque sit cras amet risus mattis. Dignissim
                    risus fermentum.
                  </p>
                </div>
              </div>
            </div>
            <div className="position-relative mt-5 ">
              <div className="dots">
                <div className="ms-5 ">
                  <h2 className="ff_madali fw-normal fs_xxl mb-0 text-white text-start">
                    Phase 5
                  </h2>
                  <p className="ff_Grandstander fw-normal fs_sm text-white mb-0 pt-1 ">
                    Venenatis scelerisque sit cras amet risus mattis. Dignissim
                    risus fermentum.
                  </p>
                </div>
              </div>
            </div>
            <div className="position-relative mt-5 ">
              <div className="dots">
                <div className="ms-5 ">
                  <h2 className="ff_madali fw-normal fs_xxl mb-0 text-white text-start">
                    Phase 5
                  </h2>
                  <p className="ff_Grandstander fw-normal fs_sm text-white mb-0 pt-1 ">
                    Venenatis scelerisque sit cras amet risus mattis. Dignissim
                    risus fermentum.
                  </p>
                </div>
              </div>
            </div>
            <div className="position-relative mt-5">
              <div className="dots">
                <div className="ms-5 ">
                  <h2 className="ff_madali fw-normal fs_xxl mb-0 text-white text-start">
                    Phase 5
                  </h2>
                  <p className="ff_Grandstander fw-normal fs_sm text-white mb-0 pt-1 ">
                    Venenatis scelerisque sit cras amet risus mattis. Dignissim
                    risus fermentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative mt-5 d-sm-none">
          <div className="dots">
            <div className="ms-5 ">
              <h2 className="ff_madali fw-normal fs_xxl mb-0 text-white text-start">
                Phase 5
              </h2>
              <p className="ff_Grandstander fw-normal fs_sm text-white mb-0 pt-1 ">
                Venenatis scelerisque sit cras amet risus mattis. Dignissim
                risus fermentum.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Roadmap;
