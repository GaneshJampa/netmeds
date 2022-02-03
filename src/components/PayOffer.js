import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PayOffers.css';
import simpl from './images/images-png-jpeg/simpl.png';
import olaMoney from './images/images-png-jpeg/ola-money.png';
import freecharge from './images/images-png-jpeg/freecharge.png';

function PayOffers() {
    return (
        <>
            <h4 className="head px-4"> Payment Partner Offers
                <a href="/offers" className="view-link my-2"> View All <i class="fas fa-xs fa-chevron-right ms-1"></i></a>
            </h4>

            <Container fluid className='px-4 py-4'>
                <Row>
                    <Col lg="4" md="6" sm="12" className="my-1">
                        <div className="offer-box">
                            <Row>
                                <Col xxl={3} xl={3} lg={4} md={3} sm={2} xs={3}><a href="/offers"><img
                                    src={simpl}
                                    className="d-inline-block align-top my-3 ms-1 offer-box-img"
                                    alt="rx-icon"
                                /></a></Col>
                                <hr className="line"/>
                                <Col xxl={9} xl={8} lg={8} md={8} sm={9} xs={8} className="offer-txt"><a href="/offers" style={{textDecoration: "none"}}> 
                                    <div>
                                        <h6 className="offer-box-desc">Get up to Rs. 200 Simpl Cashback* (10%)!..</h6>
                                        <p className="offer-box-text">From 01st to 15th January 2022, get up to Rs. 200 Simpl Cashback* (10%) on your payment via Simpl to..</p>
                                    </div>
                                </a></Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="12" xs="12" className="my-1">
                    <div className="offer-box">
                            <Row>
                                <Col xxl={3} xl={3} lg={4} md={3} sm={2} xs={3}><a href="/offers"><img
                                    src={olaMoney}
                                    className="d-inline-block align-top my-3 ms-1  offer-box-img"
                                    alt="rx-icon"
                                /></a></Col>
                                <hr className="line"/>
                                <Col xxl={9} xl={8} lg={8} md={8} sm={9} xs={8} className="offer-txt"><a href="/offers" style={{textDecoration: "none"}}>
                                    <div>
                                        <h6 className="offer-box-desc"> Get max Rs. 500 OlaMoney Postpaid+ Cashback on Netmeds!..</h6>
                                        <p className="offer-box-text">Buy ANY products worth a minimum of Rs. 999 and Get cashback between Rs. 50 and Rs. 500, when you pa..</p>
                                    </div>
                                </a></Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="12" xs="12" className="my-1">
                    <div className="offer-box">
                            <Row>
                                <Col xxl={3} xl={3} lg={4} md={3} sm={2} xs={3}><a href="/offers"><img
                                    src={freecharge}
                                    className="d-inline-block align-top my-3 ms-1  offer-box-img"
                                    alt="rx-icon"
                                /></a></Col>
                                <hr className="line"/>
                                <Col xxl={9} xl={8} lg={8} md={8} sm={9} xs={8} className="offer-txt"><a href="/offers" style={{textDecoration: "none"}}>
                                    <div>
                                        <h6 className="offer-box-desc">Get max. Rs. 30 FreeCharge Cashback* (25%)!..</h6>
                                        <p className="offer-box-text">Get 25% FreeCharge Cashback (max Rs. 30) only when you pay FULLY* via FreeCharge for your order of A..</p>
                                    </div>
                                </a></Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PayOffers;