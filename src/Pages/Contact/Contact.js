import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';

import { useState } from 'react';

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMesage] = useState("")
    const [time, setTime] = useState("")
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_1sw7nhf', 'template_yvuaccs', {
            from_name: name,
            to_name: "Support@asignmenthelps.com",
            message: `
      email: ${email}
      phoneNumber: ${phone}
      Dead Line: ${time}
      Message : ${message}`
        }, '0ioiXilLahVOhf2dO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <Navbar /><br /><br />

            <div className="my-5"
                id="intro"
                class="bg-image"
                style={{
                    backgroundImage: 'url(https://media.istockphoto.com/id/1458164457/photo/businessman-using-laptop-and-smartphone-with-contact-icons-on-virtual-screen-searching-web.jpg?s=612x612&w=0&k=20&c=MGgwv8LPiylmsFqbT2w2lfY2qTpBmnprS9O3oMjkkS8=)',
                    height: '100%'
                }}
            >
                <div class="mask text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <div class="container d-flex align-items-center text-center h-100">
                        <div><br />
                            <h1 class="mb-5 my-5 text-center">Contact Us</h1>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: 'rgb(0, 181, 175)' }}>
                <div class="container">
                    <h1 class="display-4 my-2"><b> Contact Us</b></h1>
                </div>
            </div> */}
            <br />
            <div className="container">
                <Row>
                    <Col md={6}>
                        <div className="container text-justify">
                            <div className='my-5' >
                                <p class="h3">
                                    Get in touch </p>
                                <p> Please feel free to contact us for any query. Our team will get back to you soon.
                                </p>
                                <Col md={{ span: 6, offset: 3 }}> <hr />
                                </Col>
                                <div  >
                                    <p class="h3">
                                        Our Contacts </p>
                                    <p > <i class="bi bi-envelope"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                    </svg> Email: support@pentapixelsolutions.com
                                    </p>

                                    <p><i class="bi bi-telephone"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg> Phone/Whatsapp: +
                                        03154475071
                                    </p>
                                </div>


                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="container" style={{ backgroundColor: '#d7d6d9', borderRadius: '4%' }}>
                            <form ref={form} onSubmit={sendEmail}>
                                <div class="form-group">
                                    <h1 className='text-center'>Send a message</h1>
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g john" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="e.g @example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Your Task</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Web Development</option>
                                        <option>Graphic Designing</option>
                                        <option>Digital Marketing</option>
                                        <option>Mobile Apps</option>
                                        <option>SEO</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Phone</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1"
                                        placeholder="e.g +12345678" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">DeadLine</label>
                                    <input type="date" class="form-control" id="exampleFormControlInput1"
                                        value={time} onChange={(e) => setTime(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">About Your Task</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e) => setMesage(e.target.value)}></textarea>
                                </div><br />
                                <div class="form-group">
                                    <button class="btn btn-danger" name="submit" type="submit" value="Send">Submit</button>
                                </div>
                            </form><br />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="my-4">
                <Footer />
            </div>
        </>
    )
}

export default Contact
