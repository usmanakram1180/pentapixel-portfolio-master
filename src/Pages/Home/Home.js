import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Crousals from '../../Components/Crousals/Crousals'
import CountUp from 'react-countup';
import './Home.scss'
import Services from '../../Components/Services/Services'
import Works from '../../Components/Works/Works'

function Home() {
    return (
        <>

            <div className="my-5">
                <Navbar />
            </div>
            {/* <div
                class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white">
                <h1 class="mb-3 h2">Web Development</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus praesentium
                    labore accusamus sequi, voluptate debitis tenetur in deleniti possimus modi voluptatum
                    neque maiores dolorem unde? Aut dolorum quod excepturi fugit.
                </p>
            </div> */}

            <div className="">
                <Crousals />
            </div>

            <div className="container ">
                <h3 >Welcome to PentaPixel – Fastest Growing IT Company</h3>
                <p >PentaPixel Technologies is an IT Software Company founded in Sep 2015 in Pakistan. We are offering multiple services in eb & Mobile applications with
                    HTML, CSS, SCSS, Bootstrap, TailwindCss, WordPress, JavaScript, Reactjs, Api integrations, Redux, React Native, Solidity, Solana, Blockchain, Nodejs, NestJs, AngularJs, VueJs, MongoDB, MYSQL and some other cool libraries. Additional services that we provide include website Designing, API's Development, SEO Services and IOS app development. We have highly experienced web developers who have successfully launched various huge projects and proved their skills in many projects. We are responsible for the working, and we try to keep the best relationship with our customers. As a Leading Software house in Pakistan, We have designed hundreds of Websites, Mobile Apps, Logos and Icons for our clients with a unique research-based process.</p>
            </div>


            <div class="text-center my-2">
                <h1 class="my-5"><b> Our Services</b></h1>

            </div>

            <div className="container">
                <Services />
            </div>
            <section id="counter" class="sec-padding my-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 ">
                            <div class="count"> <span class="fa fa-history"></span>
                                <p class="number"><CountUp delay={0} end={2015} /></p>
                                <h6>Working From</h6> </div>
                        </div>
                        <div class="col-md-3 ">
                            <div class="count"> <span class="fa fa-check"></span>
                                <p class="number"><CountUp delay={0} end={247} /></p>
                                <h6>Projects Completed</h6> </div>
                        </div>
                        <div class="col-md-3 ">
                            <div class="count"> <span class="fa fa-clock-o"></span>
                                <p class="number"><CountUp delay={0} end={40} /></p>
                                <h6>Working Hours</h6> </div>
                        </div>
                        <div class="col-md-3 ">
                            <div class="count"> <span class="fa fa-user-secret"></span>
                                <p class="number"><CountUp delay={0} end={160} /></p>
                                <h6>Happy Clients</h6> </div>
                        </div>
                    </div>
                </div>
            </section>


            <div div class="jumbotron jumbotron-fluid my-5" >
                <div class="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h5>QUALITY PRODUCTS</h5>
                            <p>We believe in Software Quality that is essential to deliver the product on time and on the required quality.</p>
                            <div className="row">
                                <div className="col">
                                    <h5>RELIABILITY</h5>
                                    <p>Failure Free Products are our main target.We always develope the most reliable Products without any failure issue on future.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h5>TIMELY WORK</h5>
                            <p>We always plan the Project Development schedule for deploying the Project on time with all completed requirements.</p>
                            <div className="row">
                                <div className="col">
                                    <h5>MAINTAINABLE</h5>
                                    <p>Our Products are fully maintainable for the injection of any new Functionality or Requirement.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img src="https://www.elexoft.com/assets/images/03.jpg" class="img-fluid" alt="Responsive image" width={'600px'} />
                        </div>
                    </div>

                </div>
            </div>


            <div
                id="intro"
                class="bg-image"
                style={{
                    backgroundImage: 'url(https://media.istockphoto.com/id/1411610158/photo/multi-colored-programming-language-source-code-design-example-front-view-composition-on-a.jpg?s=612x612&w=0&k=20&c=8f8J6Rw8HTRbWbSjeLBt33IT0o3T9Hpt07c4SnUwkbU=)',
                    height: '100%'
                }}
            >
                <div class="mask text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <div class="container d-flex text-center h-100">

                        <h1 class="mb-5 my-5 text-center">We are One Stop Solution Providers</h1>
                        <p>

                        </p>

                    </div>
                </div>
            </div>

            <div className="container my-4">
                <img src="https://www.elexoft.com/assets/case_study/img/portfolio/elexoft-apps-min.png" class="img-fluid" alt="Responsive image" />
            </div>
            {/* <div className="container">
                <Slider />
            </div> */}
            <div className="container">
                <h3 className="text-center">This is our latest work</h3>
                <p className="text-center">You can review some of the projects that were successfully implemented by Elexoft.</p>
            </div>
            <div className="container my-4">
                <Works />
            </div>


            <Footer />
        </>
    )
}

export default Home
