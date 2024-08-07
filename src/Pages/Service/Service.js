import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Cards from '../../Components/Cards1/Cards'
import Services from '../../Components/Services/Services'
function Blog() {
    return (
        <>

            <Navbar /><br /><br />
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
                            <h1 class="mb-5 my-5 text-center">Our Services</h1>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="">
                <div class="jumbotron jumbotron-fluid my-2 " style={{ backgroundColor: 'rgb(8, 211, 204)' }}>
                    <div class="container my-2">
                        <h1 class="display-4 my-2"><b> Our Services</b></h1>
                    </div>
                </div>
            </div> */}
            <div className="container my-4">
                <Services />
            </div>








            <Footer />
        </>
    )
}

export default Blog
