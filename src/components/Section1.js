import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Section1.css';
import orderMed from './images/svgs/order-medicine.svg';
import beauty from './images/svgs/Beauty-products.svg';
import wellness from './images/svgs/wellness (2).svg';

function Section1() {
    return (
        <>
            <Container fluid className='px-4 py-3'>
                <Row>
                    <Col lg="4" md="6" sm="12" xs="12" className="my-1">
                        <div className="box">
                            <Row>
                                <Col xl={2} lg={3} md={2} sm={2} xs={3}><a href="/products/all"><img
                                    src={orderMed}
                                    className="d-inline-block align-top box-img"
                                    alt="rx-icon"
                                /></a></Col>
                                <Col xl={10} lg={9} md={10} sm={10} xs={9}><a href="/products/all" style={{textDecoration: "none"}}>
                                    <div className="box-text allign-top">
                                        <h5 className="box-desc">
                                            <i class="arrow mt-4 fas fa-chevron-right fa-xs"></i>Order Medicine</h5>
                                        <h6 className="offr-text">Save Upto 40% off</h6>
                                    </div>
                                </a></Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="12" xs="12" className="my-1">
                        <div className="box">
                            <Row>
                                <Col xl={2} lg={3} md={2} sm={2} xs={3}><a href="/products/beauty"><img
                                    src={beauty}
                                    className="d-inline-block align-top box-img"
                                    alt="rx-icon"
                                /></a></Col>
                                <Col xl={10} lg={9} md={10} sm={10} xs={9}><a href="/products/beauty" style={{textDecoration: "none"}}>
                                    <div className="box-text allign-top">
                                        <h5 className="box-desc">
                                            <i class="arrow mt-4 fas fa-chevron-right fa-xs"></i>Beauty</h5>
                                        <h6 className="offr-text">Save Upto 60% off</h6>
                                    </div>
                                </a></Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="12" xs="12" className="my-1">
                        <div className="box">
                            <Row>
                                <Col xl={2} lg={3} md={2} sm={2} xs={3}><a href="/products/wellness"><img
                                    src={wellness}
                                    className="d-inline-block align-top box-img"
                                    alt="rx-icon"
                                /></a></Col>
                                <Col xl={10} lg={9} md={10} sm={10} xs={9}><a href="/products/wellness" style={{textDecoration: "none"}}>
                                    <div className="box-text allign-top">
                                        <h5 className="box-desc">
                                            <i class="arrow mt-4 fas fa-chevron-right fa-xs"></i>Wellness</h5>
                                        <h6 className="offr-text">Flat 15% off</h6>
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

export default Section1;