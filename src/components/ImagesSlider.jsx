import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick';
import flagMan from '../assets/img/png/flagMan.png'
import spaceShip from '../assets/img/svg/spaceShip.svg'

function ImagesSlider() {
    var settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 1200,
        infinite: true,
        speed: 500,
        slidesToShow: 6.4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }

        ]
    };
    return (
        <div className='py-lg-5 bg_blue position-relative'>
            <img className='position-absolute end-0 top-0 d-none d-lg-block animation_scroll_x' width={185} height={185} src={spaceShip} alt="spaceShip" />
            <div className='py-lg-5'>
                <div className=' py-lg-5 overflow-hidden'>
                    <div className='transform_images_lg pt-4 animation_scroolx'>
                        <Slider {...settings} class=" pb-2  d-flex align-items-center " >
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>

                        </Slider>
                    </div>
                    <div className='transform_images_lg animation_scroolx pb-4'>
                        <Slider  {...settings} class=" pt-2  d-flex align-items-center " >
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>
                            <Col xs={6} md={4} lg={2} className='p-lg-0'><img src={flagMan} className='transform_rotate w-100' alt="flagMan" /></Col>

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagesSlider