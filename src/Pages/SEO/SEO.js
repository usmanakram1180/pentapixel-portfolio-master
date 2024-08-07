import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './SEO.scss'
function SEO() {
    return (
        <>

            <Navbar /><br /><br />
            <div className="my-5"
                id="intro"
                class="bg-image"
                style={{
                    backgroundImage: 'url(https://media.istockphoto.com/id/1360521208/photo/businessman-using-a-computer-for-analysis-seo-search-engine-optimization-marketing-ranking.jpg?s=612x612&w=0&k=20&c=UWrxVhwaaUYb7A-3BQHZTJTO7KM7cQYSC6yfcEbkhlk=)',
                    height: '100%'
                }}
            >
                <div class="mask text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <div class="container d-flex align-items-center text-center h-100">
                        <div><br />
                            <h1 class="mb-5 my-5 text-center">Best SEO Services </h1>

                        </div>
                    </div>

                </div>
            </div>
            {/* <div class="jumbotron jumbotron-fluid " >
                <h1 class="display-5 my-4 text-center">SEO Services In Pakistan</h1>
            </div> */}



            <div className="container my-4">
                <h3>A VISIBLE COMPANY IS A GUARANTEE OF SUCCESS</h3>
                <p>PentaPixel is an SEO company based in Pakistan expert in web positioning. We have been developing our work since and doing both our own work and for our clients. We have been developing and positioning our own network of portals for 3 years, for which we permanently apply and measure new SEO positioning techniques, and evaluate any change in Google’s algorithm. This allows us to establish ourselves as the best SEO Company since we manage not only to be at the forefront of SEO knowledge but also to offer our clients exclusive resources in terms of link building.</p>
                <h3>Security</h3>
                <p>We develop very natural SEO strategies (White Hat) without the risk of penalty so that your business can only improve.</p>
                <h3>Online Marketing</h3>
                <p>Maximize the ROI of your company with optimized marketing strategies (PPC, SEM) and improve conversion with web analytics processes.</p>
                <h3>WEB POSITIONING</h3>
                <p>We carry out natural web positioning campaigns, with quality links and White-Hat SEO on-page and off-page. We upload your business to the first page of Google for numerous keywords relevant to your company.</p>
                <h3>KEYWORDS STUDY</h3>
                <p>We focus exclusively on the keywords in your sector that report the highest number of visits and ROI. Sometimes the words that users use the most to search for service are surprising.</p>
                <h3>SEM</h3>
                <p>SEO Solutions we are an SEM and SEO Wah company, we carry out Adwords campaign management to achieve maximum profitability in SEO optimization. SEM is an online marketing that is presented as an alternative or complement to natural web positioning.</p>
                <h3>SOCIAL MEDIA</h3>
                <p>Service Social Media SEO in Pakistan, focused on improving the visibility of the web on social networks prior to internal SEO study.</p>
                <h3>WEB SOLUTIONS</h3>
                <p>Creation of applications for Android. Find out how we develop apps for Android, a platform At SEO Solutions, we provide complete web solutions in web design, quality links, SEO, link exchange, SEM, online marketing, Social Media, registration in directories, and smartphone applications.</p>
                <h3>GOOGLE ADWORDS</h3>
                <p>We plan, design, and manage your advertising campaign on Google, minimizing costs and segmenting quality traffic. We consider your business, your market, and your competition.</p>
                <p>Our SEO agency complements the SEO service with development or web design services. We make responsive designs that adapt to any device, including mobile, tablet, and computer, and we always do it focused on search engine positioning, seeking maximum profitability for our clients. Although our headquarters are in Wah, of course, we develop our SEO positioning service to companies throughout Pakistan and all over the world. If you want the best service at the price you need, do not hesitate to contact SEO Exytex.</p>
                <h3>Unique SEO Positioning Methodology</h3>
                <p>We Have A Unique Work Methodology, We Are An Agency Oriented To Our Clients And We Participate With Them In The Evolution Of Their Presence On Google And In The Distribution Of Their Content, We Accompany Our Clients In Making Decisions And We Propose Strategies Aimed At The Return Of Short, Medium And Long Term Investment.</p>
                <h3>We Provide Full SEO Services</h3>
                <ul>
                    <li>keywords research</li>
                    <li>SEO planning and strategy.</li>
                    <li>Definition of objectives and KPIs.</li>
                    <li>SEO methodology on page own of our agency.</li>
                    <li>  Comprehensive content strategy.</li>
                    <li>Content writing.</li>
                    <li>Off site strategy planning.</li>
                    <li>Follow-up and feedback.</li>
                    <li>International multilingual SEO agency</li>
                </ul>
                <p>We are an international SEO agency and as such we provide services in more than 50 countries and currently in more than different languages. We carry out work for multinationals and provide SEO services for internationalization.</p>
                <p>Among the most common languages ​​for our clients, we currently provide service English, Swedish, Finnish, Dutch, French, Italian, German, Hungarian, Turkish, Standard Arabic, Italian, Russian, Portuguese, Czech, Polish , etc</p>
            </div >
            <div className="my-4">
                <Footer />
            </div>
        </>
    )
}

export default SEO
