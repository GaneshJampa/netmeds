import React from 'react';
import { Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import footerImg from './images/svgs/netmeds-footer-logo.svg';
import playStore from './images/images-png-jpeg/play_store.png';
import appStore from './images/images-png-jpeg/app_store.png';
import './Footer.css';

function Footer() {
    return (
        <>

            <div className='footer pt-5'>
                <Container className='footer-top'>
                    <Row>
                        <Col lg="2" md="3" sm="4" xs="4">
                            <Image fluid className='footer-img' src={footerImg} alt="footer-img" />
                        </Col>
                        <Col lg="8" md="8" sm="10" xs="10" className='ms-4'>
                            <p className='footer-text'>Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha & Company – one of India’s most
                                trusted pharmacies, with over 100 years’ experience in dispensing quality medicines.</p>
                        </Col>
                    </Row>
                </Container>
                <Container className='footer-middle py-5'>
                    <Row>
                        <Col className='my-1'>
                            <h2 className="footer-head">COMPANY</h2>
                            <ul className='footer-list'>
                                <li><a href="#">About Netmeds</a></li>
                                <li><a href="#">Customers Speak</a></li>
                                <li><a href="#">In the news</a></li>
                                <li><a href="#">Carreers</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Fees and Payment Policy</a></li>
                                <li><a href="#">Shipping and Delivery Policy</a></li>
                                <li><a href="#">Return, Refund and Cancellation Policy</a></li>
                                <li><a href="#">Conatct</a></li>
                            </ul>
                        </Col>
                        <Col className='my-1'>
                            <h2 className="footer-head">SHOPPING</h2>
                            <ul className='footer-list'>
                                <li><a href="#">Browse by A-Z</a></li>
                                <li><a href="#">Browse By Manufacturers</a></li>
                                <li><a href="#">Health Articles</a></li>
                                <li><a href="#">Offers / Coupons</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </Col>
                        <Col className='my-1'>
                            <h2 className="footer-head">SOCIAL</h2>
                            <ul className='footer-list'>
                                <li><a href="#">Patients Alike</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Youtube</a></li>
                                <li><a href="#">Refer & Earn</a></li>
                            </ul>
                        </Col>
                        <Col className='my-1'>
                            <h2 className="footer-head">SUBSCRIBE TO OUR NEWSLETTER</h2>
                            <p className='footer-desc'>Get a free subscription to our health and fitness tip and stay tuned to our latest offers</p>
                            <Form className="d-flex footer-form">
                                <FormControl
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="me-2 mail-box"
                                    aria-label="Search"
                                />
                                <Button className="go-btn" title="Go" type="submit">Go</Button>
                            </Form>
                            <a href='#'><Image className='app-download mx-1 my-3' src={playStore}/></a>
                            <a href='#'><Image className='app-download mx-1 my-3' src={appStore}/></a>
                        </Col>
                    </Row>
                </Container>
                <Container className='footer-bottom py-3'>
                    <Row>
                        <Col className='mt-2'>
                        <a href='#'>Medicine</a>
                        </Col>
                        <Col className='mt-2'>
                        <a href='#'>Wellness</a>
                        </Col>
                        <Col className='mt-2'>
                        <a href='#'>Lab Tests</a>
                        </Col>
                        <Col className='mt-2'>
                        <a href='#'>Beauty</a>
                        </Col>
                        <Col md sm="12" className='mt-2'>
                        <p>Copyright© 2022. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer;
