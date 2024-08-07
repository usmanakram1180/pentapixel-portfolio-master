import React from 'react'
import { CCarousel } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';
import { CImage } from '@coreui/react';
import img from '../../Images/Web Development.png'
import img1 from '../../Images/Search Engine.png'
import img2 from '../../Images/Mobile App.png'
import './Crousals.scss'
function Crousals() {
  return (
    <>
      <CCarousel controls transition="crossfade" >
        <CCarouselItem>
          <div className="my-5"
            id="intro"
            class="bg-image"
            style={{
              backgroundImage: 'url(https://media.istockphoto.com/id/1127443162/photo/coded-stuff-on-screen.jpg?s=612x612&w=0&k=20&c=R1_Zw8A_tuetx0eVNxQUpUJm2djdqIC8m3Mc5gwaX0M=)',
              height: '100%'
            }}
          >
            <div class="mask text-white text-center my-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              <div class="container h-100 "><br />
                <div className="text-center ">
                  <h1 class="mb-5 my-5 text-center"><b> Web App Development</b></h1>
                  <h3 className=""><b> Responsive & Reliable </b></h3>
                  <p>We Plan, Design, & Develop Websites from start to finish, ensuring a high ROI for clients,
                  </p>
                  <p> Our Major concern is the Reliability of Website.</p>
                  <br /><br /><br /><br />

                </div>
              </div>
            </div>
          </div>
          {/* <div
            class="bg1-image1 p-5 text-center shadow-1-strong rounded mb-5 text-white">
            <h1 class="mb-3 h2 my-5"><b> Web App Development</b></h1>
            <h3 className="my-5"><b> Responsive & Reliable</b></h3>
            <p> We Plan, Design, & Develop Websites from start to finish, ensuring a high ROI for clients,
            </p><p> Our Major concern is the Reliability of Website</p>
            <br /><br /><br /><br />
          </div> */}


        </CCarouselItem>

        <CCarouselItem>
          <div className="my-5"
            id="intro"
            class="bg-image"
            style={{
              backgroundImage: 'url(https://media.istockphoto.com/id/1408387701/photo/social-media-marketing-digitally-generated-image-engagement.jpg?s=612x612&w=0&k=20&c=VVAxxwhrZZ7amcPYJr08LLZJTyoBVMN6gyzDk-4CXos=  )',
              height: '100%'
            }}
          >
            <div class="mask text-white text-center my-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              <div class="container  align-items-center text-center h-100 "> <br />
                <div className="text-center ">
                  <h1 class="mb-5 my-5 "><b> Mobiles App Development</b></h1>
                  <h3 className=""><b> We Build Awesome Apps </b></h3>
                  <p>We know how to build products that can scale to your business' needs,
                  </p>
                  <p> with all necessary features.</p>
                  <br /><br /><br /><br />

                </div>
              </div>
            </div>
          </div>
          {/* <div
            class="bg2-image2 p-5 text-center shadow-1-strong rounded mb-5 text-white ">
            <h1 class="mb-3 h2 my-5 "><b> Mobiles App Development </b></h1>
            <h3 className="my-5"><b> We Build Awesome Apps </b></h3>
            <p>We know how to build products that can scale to your business' needs,
            </p>
            <p> with all necessary features.</p>
            <br /><br /><br /><br />

          </div> */}
          {/* <div class="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120">
            <div class="container my-5">
              <div class="row">
                <div class="col-lg-6 my-5">
                  <div class="inner text-left my-5">

                    <h2 className="text-dark my-5">Mobiles App Development</h2>
                    <h3 className="my-5">We Build Awesome Apps</h3>
                    <p>We know how to build products that can scale to your business' needs,
                    </p>

                  </div>
                </div>
                <div className="col-lg-6 my-5">
                  <img src="https://media.istockphoto.com/id/1349390515/photo/paperless-workplace-idea-e-signing-electronic-signature-document-management-businessman-signs.jpg?s=612x612&w=0&k=20&c=EyQl13diegNV5DVLnb0krcAcRDhL7NiSA7IEVImZs6Q=" class="" alt="Responsive image" width={'50px'} height={'50px'} />
                </div>
              </div>
            </div>
          </div> */}
        </CCarouselItem>
        <CCarouselItem>
          <div className="my-5"
            id="intro"
            class="bg-image"
            style={{
              backgroundImage: 'url(https://media.istockphoto.com/id/1359501770/photo/metaverse-concept-magnifyning-glass-with-planet.jpg?s=612x612&w=0&k=20&c=xovwWwJWzxiryEKANQPkpB81AiCPxSozk6QCwTtul7c=)',
              height: '100%'
            }}
          >
            <div class="mask text-white text-center my-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              <div class="container  align-items-center text-center h-100 "><br />
                <div className="text-center ">
                  <h1 class="mb-5 my-5 text-center"><b> Search Engine optimization</b></h1>
                  <h3 className=""><b> We Build Awesome Apps </b></h3>
                  <p>We start the SEO process with a full website audit and recommendations report,
                  </p>
                  <p> Our team will review your key metrics, perform keyword research, analyze your competitors.</p>
                  <br /><br /><br /><br />

                </div>
              </div>
            </div>
          </div>
          {/* <div
            class="bg3-image3 p-5 text-center shadow-1-strong rounded mb-5 text-white">
            <h1 class="mb-3 h2 my-5">Search Engine optimization</h1>
            <h3 className="my-5">We Build Awesome Apps</h3>
            <p>We start the SEO process with a full website audit and recommendations report,
            </p><p> Our team will review your key metrics, perform keyword research, analyze your competitors,</p>
            <br /><br /><br /><br />

          </div> */}
          {/* <div class="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120">
            <div class="container my-5">
              <div class="row">
                <div class="col-lg-6 my-5">
                  <div class="inner text-left my-5">

                    <h2 className="text-dark my-5">Search Engine optimization</h2>
                    <h3 className="my-5">We Build Awesome Apps</h3>
                    <p>We start the SEO process with a full website audit and recommendations report,
                    </p><p> Our team will review your key metrics, perform keyword research, analyze your competitors,</p>

                  </div>
                </div>
                <div className="col-lg-6 my-5 text-center">
                  <img src="https://media.istockphoto.com/id/1360521208/photo/businessman-using-a-computer-for-analysis-seo-search-engine-optimization-marketing-ranking.jpg?s=612x612&w=0&k=20&c=UWrxVhwaaUYb7A-3BQHZTJTO7KM7cQYSC6yfcEbkhlk=" class="" alt="Responsive image" width={'50px'} height={'50px'} />
                </div>
              </div>
            </div>
          </div> */}
        </CCarouselItem>
      </CCarousel>
    </>
  )
}

export default Crousals


