import React from 'react'
import { Container } from 'react-bootstrap'

function NavBar() {
    return (
        <div className='navBackgroud  py-4'>
            <Container>
                <nav className='d-flex justify-content-between '>
                    <span> </span>
                    <ul className='d-flex align-items-center p-0 mb-0'>
                        <li className='mx-1 mx-sm-2 mx-md-3 mx-lg-4'>
                            <a className='ff_Grandstander fs_md navLinks position-relative fw-normal text-white' href="#">Home</a>
                        </li>
                        <li className='mx-1 mx-sm-2 mx-md-3 mx-lg-4'>
                            <a className='ff_Grandstander fs_md navLinks position-relative fw-normal text-white' href="#">About Us</a>
                        </li>
                        <li className='mx-1 mx-sm-2 mx-md-3 mx-lg-4'>
                            <a className='ff_Grandstander fs_md navLinks position-relative fw-normal text-white' href="#">Games</a>
                        </li>
                        <li className='mx-1 mx-sm-2 mx-md-3 mx-lg-4'>
                            <a className='ff_Grandstander fs_md navLinks position-relative fw-normal text-white' href="#">FAQs</a>
                        </li>
                        <li className='mx-1 mx-sm-2 mx-md-3 mx-lg-4'>
                            <a className='ff_Grandstander fs_md navLinks position-relative fw-normal text-white' href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </div>
    )
}

export default NavBar