import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Works from '../../Components/Works/Works'

function Latest_Works() {
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
                            <h1 class="mb-5 my-5 text-center">Our Latest Works</h1>

                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="box">
                            <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2lhbCUyMHBsYXRmb3Jtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                            <div class="box-content">
                                <h3 class="title">Social Platforms for Investors</h3>


                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="box">
                            <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                            <div class="box-content">
                                <h3 class="title">Matrimonial App</h3>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="box">
                            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwb2ludG1lbnQlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 " />
                            <div class="box-content">
                                <h3 class="title">Barber Appointment App</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container my-4">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="box">
                            <img src="https://www.elexoft.com/assets/portfolio_images/400x400/60bf0ede7fffa1a8ee02c6a6aa09b1db.jpg" />
                            <div class="box-content">
                                <h3 class="title">Social Stock Website</h3>


                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="box">
                            <img src="https://www.elexoft.com/assets/portfolio_images/400x400/520f6036884f0668afe1dc0b43735247.jpg" />
                            <div class="box-content">
                                <h3 class="title">Ecommerece App</h3>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="box">
                            <img src="https://www.elexoft.com/assets/portfolio_images/400x400/856f22e5a5a272aa7e560a2d84fbe696.jpg" />
                            <div class="box-content">
                                <h3 class="title">Table Reservation App</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container my-4">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="box">
                            <img src="https://www.elexoft.com/assets/portfolio_images/400x400/a66f1482cc6b7152aa4e922c5937f9f8.jpg" />
                            <div class="box-content">
                                <h3 class="title">Banking App</h3>


                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="box">
                            <img src="https://www.elexoft.com/assets/portfolio_images/400x400/072d0e5b2434ba7d13e189af73dea282.jpg" />
                            <div class="box-content">
                                <h3 class="title">Cab App</h3>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="box">
                            <img src="https://www.elexoft.com/assets/portfolio_images/400x400/e6db1da496fdd929ed243891aff2988f.jpg" />
                            <div class="box-content">
                                <h3 class="title">Hotel Reservation System  </h3>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Latest_Works
