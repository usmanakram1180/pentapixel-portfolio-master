import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function CRM_Softwares() {
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
                        <div>
                            <h1 class="mb-5 my-5 text-center">CRM Softwares</h1>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <h3 className="">Code For The Next Level Development</h3>
                <p className="">PentaPixel, a very well renowned web development company currently working in Pakistan. We’re bunch of guys who’re adept and skillful web designers and we are master of this field. Site advancement has been an issue and we as web Development Company working enthusiastically to come up with first-rate solution. We’ll keep on working until we get the job done. Here at PentaPixel, you’ll get any web of your choice and it’s our responsibility to give you our best through our website maintenance services.</p>
            </div>
            <div className="container">
                <h3>Content Management System</h3>
                <div className="row">
                    <div className="col-md-8 my-4   ">
                        <p>Content management system (CMS) is considered a difficult task to maintain but we’re making it real simple by implementing our own techniques. Here our clients can survey and revise the content generated and this has done because of our web developers. By CMS web development, you can reach out to us.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://www.elexoft.com/assets/services/cms.png" class="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </div> <br />
            <div className="container">

                <div className="row">
                    <div className="col-md-4">
                        <img src="https://www.elexoft.com/assets/services/crm_pic.png" class="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-md-8 my-4   ">
                        <h3>Content Management System</h3>
                        <p>A customer relationship management (CRM) is a tool allowing you to have better management of your business contacts. It offers the possibility of having a panel of marketing solutions in order to capture and build customer loyalty to your brand. Right now, a very good factor and a guarantee of reputation for a company is to ensure a unique relationship with its customers. At Elexoft, we set up a CRM based on your activity by defining the indicators that will be important to take into account. You will be able to process and analyze data relating to your customers and define good business planning.</p>
                        <h4>Our CRM expertise</h4>
                        <ul>
                            <li>After Sales</li>
                            <li>Assessment KPI's</li>
                            <li>Identification of Customer Needs</li>
                            <li>Customer Relationship</li>
                            <li>Improved Sales</li>
                            <li>Prospect Contact Base</li>
                            <li>Customer Follow-up</li>
                            <li>Marketing</li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="container">
                <h3>Wordpress, Shopify Customization</h3>
                <div className="row">
                    <div className="col-md-8 my-4   ">
                        <p>If you’re looking for Wordpress trust us that we’ve got it covered for you. In case you’re having any sort of inconvenience in your project or assignment, our web developers can make this job really easy for you. We’re a web developing company who is bringing much needed advancement in wordpress, joomla and shopify customization and we’re doing it in style. Through our shopify tool, you can sell your administration on your web and we can guide as best web development company. We’ll help you by all means in starting your any sort of entrepreneurship business and through our website maintenance services; you can make your business a big thing in a span of couple of weeks/months. In today’s world it is really hectic and tough to start an online merchandise store because you need absolute knowledge to get the ball rolling. But in our case, we can simply make it happen for you.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://www.elexoft.com/assets/services/ecommerce.png" class="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CRM_Softwares
