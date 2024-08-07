import React from 'react'
import img from '../../Images/PentaPixel-Logo1-removebg-preview.png'
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
    return (
        <>
            <nav class="navbar fixed-top navbar navbar-expand-lg navbar navbar-light" style={{ backgroundColor: 'White' }}>
                <div class="container-fluid">
                    <h1 class="logo mx-5"> <Link className="text-decoration-none" to="/Home"> <img src={img} alt="..." class="img-thumbnail mx-0 my-2" width={'40px'} /></Link> </h1>
                    {/* <Link class="navbar-brand" to="/Home"><span>PentaPixel</span></Link> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="main_nav">
                        <ul class="navbar-nav">

                            <li class="nav-item active"> <Link class="nav-link" to="/Home"> <b> Home
                            </b></Link>
                            </li>


                            <li class="nav-item active"> <Link class="nav-link" to="/About"> <b>
                                About</b></Link>
                            </li>

                            <div class="menu-wrap">
                                <ul class="menu">
                                    <li class="menu-item">
                                        <Link class="nav-link" to="/Service" style={{ paddingTop: '8px' }}><b> Services</b></Link>
                                        <ul class="drop-menu">
                                            <li class="drop-menu-item my-2">
                                                <Link to="/Web_Development"><b> Web Development</b></Link>
                                            </li>
                                            <li class="drop-menu-item my-2">
                                                <Link to="/Graphic_Designing"><b> Graphic Designing</b></Link>
                                            </li>
                                            <li class="drop-menu-item my-2">
                                                <Link to="/Digital_Marketing"><b> Digital Marketing</b></Link>
                                            </li>
                                            <li class="drop-menu-item my-2">
                                                <Link to="/SEO"><b> SEO</b></Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>


                            <li class="nav-item active"> <Link class="nav-link" to="/Contact"> <b>
                                Contact</b></Link></li>
                        </ul>
                        <ul class="navbar-nav ms-auto">
                            {/* <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                            </form> */}
                            <sectionion class="mx-2 d-none d-lg-block ">
                                <Link className="text-decoration-none mx-5" to="tel:+923154475071" style={{ color: '#118985' }}> <i class="bi bi-phone"></i><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg> 03154475071</Link>
                                <button class="btn" data-toggle="modal" to="/Contact" data-target="/contact" style={{ backgroundColor: '#118985' }}><b> Get a Free Quote</b></button>


                            </sectionion>
                        </ul>


                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
