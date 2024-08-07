import React from 'react'
import './About.css'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'


function About() {
    return (
        <>
            <div className="">
                <Navbar />
            </div><br /> <br />

            <div className="my-5"
                id="intro"
                class="bg-image"
                style={{
                    backgroundImage: 'url(https://media.istockphoto.com/id/1416335096/photo/businessman-hand-holding-smart-phone-with-icon-mobile-phone-mail-telephone-and-address.jpg?s=612x612&w=0&k=20&c=ajOYHJPqlaKZ04BeSf5m3MsuZ_YGyxrUqEGMaS1hGGk=)',
                    height: '100%'
                }}
            >
                <div class="mask text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <div class="container d-flex align-items-center text-center h-100">
                        <div><br />
                            <h1 class="mb-5 my-5 text-center">About Us</h1>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-4">
                <h3 className="">OUR COMPANY</h3>
                <p className="">Pentapixel is thought to be one of the well-known companies offering IT services. The professional company is tightly organized to provide more readily usable outcomes and solutions for application in a variety of sectors. Our goal is to play a significant role in the technological revolution by developing platforms and products that will enable us to collaborate with businesses that are working to find solutions to the world's most pressing issues. Our vision is to be a key part of the technological revolution by creating products and platforms where we can partner with highly skilled and trained individuals with companies who are looking to solve the world’s biggest problems.</p>
                <h3 className="">MISSION & VISION</h3>
                <p className="">Our mission is to help enterprises accelerate adoption of new technologies, untangle complex issues that always emerge during digital evolution, and orchestrate ongoing innovation. Whether it is a consumer-oriented app or a transformative enterprise-class solution, the company leads the process from ideation and concept to delivery, and provides ongoing support through its IS360 framework.</p>
            </div>
            {/* <div class="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 my-5">
                            <div class="inner text-center my-5">

                                <h2>About</h2>
                                <a class="rn-button-style--2 my-5" href="/contact">
                                    <span>Contact Us</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="img-fluid image1 my-5" src="https://trydo.rainbowit.net/assets/images/about/about-3.jpg" alt="Responsive image" />

                    </div>
                    <div className="col-lg-6 my-5">
                        <h1 class="heading h1 my-5" ><b> About</b></h1>
                        <p className="paragraph">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going.</p>
                        <div className="row">
                            <div className="col-6 ">
                                <h1 className="mx-0">Who we are</h1>
                                <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                            </div>
                            <div className="col-6">
                                <h1 className="mx-3">Who we are</h1>
                                <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <p className="h1 text-center"> Our Fun Facts</p>
                <div className="row">
                    <div className="col-md-4">
                        <p className="heading text-danger text-center"><b> 199</b> <sup>+</sup></p>
                        <p className="text-center">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="heading text-danger text-center"><b> 575</b> <sup >+</sup></p>
                        <p className="text-center">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="heading text-danger text-center"><b> 69</b> <sup>+</sup></p>
                        <p className="text-center">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </div>
                </div>
            </div> */}
            <div className="container my-4">
                <h4 className="text-center">Here You Find Us!</h4>
                <div class="map-responsive ">
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=City Star Shopping Center, 51-B, Main Maulana Shaukat Ali Rd, Township Block 1 Sector B 1 Lahore, Punjab 54770, Pakistan" width="600" height="450" frameborder="0" style={{ border: '0' }} allowfullscreen></iframe>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
