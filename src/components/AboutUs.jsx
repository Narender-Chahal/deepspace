import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import astroImage from '../assets/img/svg/astroImage.gif'
import planetImage from '../assets/img/svg/planetImage.svg'
import planetImage1 from '../assets/img/svg/planetImage1.svg'
import planetImage2 from '../assets/img/svg/planetImage2.svg'
import layerImage from '../assets/img/png/layer.png'

function AboutUs() {
    return (
        <div className='bg_sky_image overflow-hidden position-relative'>
            <img src={layerImage} className='w-100 position-absolute layer_absolute_xl opacity_image' height={50} alt="layerImage" />
            <img src={layerImage} className='w-100 position-absolute layer_absolute2_xl opacity_image' height={55} alt="layerImage" />
            <div className='radialGridient vh_65_xsm vh_65_sm vh_75_md vh_85_lg align-items-center d-flex h-100 justify-content-center position-relative'>
                <img src={planetImage} className='position-absolute start-0 top-0 animation_scrool d-none d-xl-block' width={150} alt="planetImage" />
                <img src={planetImage1} className='position-absolute iamge_position_xl opacity-50 animation_scrool d-none d-xl-block' width={120} alt="planetImage1" />
                <img src={planetImage2} className='position-absolute iamge_position2_xl  animation_scrool_reverse d-none d-xl-block' width={200} alt="planetImage2" />
                <Container>

                    <Row className='py-5  align-items-center '>
                        <Col lg={6} className='mt-3 mt-lg-0'>
                            <div className='d-flex  align-items-center '><img src={astroImage} className='w_100_xsm border_image h_100_xsm' width={398} height={390} alt="astroImage" /></div>
                        </Col>
                        <Col lg={6} className='mt-3 mt-lg-0'>
                            <h4 className='text_shadow fs_3xl ff_Grandstander fw-semibold text-white mb-0'>About Us</h4>
                            <p className='mw_480_xl text-white fs_md ff_Grandstander fw-normal mb-0 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue in pharetra euismod at amet. Neque ultrices vitae at eget nisi, eget tellus tincidunt amet. Blandit pharetra, viverra feugiat consectetur neque risus.
                            </p>
                            <p className='mw_480_xl text-white fs_md ff_Grandstander fw-normal mb-0'>  At nunc, gravida nunc cursus gravida nulla enim. Tempor gravida massa eu, enim metus ridiculus feugiat at. Leo libero, ac feugiat nunc, elementum quis tristique.</p>
                        </Col>
                    </Row>

                </Container>
            </div>

        </div>
    )
}

export default AboutUs