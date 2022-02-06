import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Section2.css'
import prevOrders from './images/svgs/previous-orders.svg';
import Beauty from './images/svgs/Beauty.svg';


function Section2() {
    return (
        <>

            <Container fluid className='px-4 py-3 two'>
                <Row>
                    <Col lg="6" md="6" sm="12" xs="12" className="my-1">
                        <div className="">
                            <Row>
                                <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
                                    <h4 class="two-head">Previuos Orders</h4>
                                    <p className="two-text-1">Your previously ordered products</p>
                                    <a href='/orders' className="two-link">
                                    <span className="link-1">View Orders</span>
                                    <i class="fas fa-2x fa-chevron-circle-right link-2"></i></a></Col>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4} className="">
                                    <img
                                    src={prevOrders}
                                    className="d-inline-block align-top two-img-1 img-line"
                                    alt="rx-icon"
                                /></Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12" className="my-1">
                        <div className="">
                        <Row>
                                <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
                                    <h4 class="two-head">Beauty Products</h4>
                                    <p className="two-text-2">Save upto 40% off</p>
                                    <Button href="/products/beauty" className="two-button">Explore Beauty</Button></Col>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4} className="">
                                    <img
                                    src={Beauty}
                                    className="d-inline-block align-top two-img-2"
                                    alt="rx-icon"
                                /></Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Section2;