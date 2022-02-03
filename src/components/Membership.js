import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import star from './images/svgs/first-membership.svg';
import flash from './images/svgs/flash.svg';
import './Membership.css';

function Membership() {

    return (
        <>

            <Container fluid className='px-4'>
                <Row className='membership py-4'>
                    <Col lg="1 " md="1" sm="2" xs="2" className="my-1">
                        <Image src={star} className='mt-2  mx-4' />
                    </Col>
                    <Col lg="7" md="5" sm="10" xs="10" className="my-1">
                        <div className='mem'>
                            <h3 className='mem-head'>Netmeds First Membership</h3>
                            <ul className='mem-list'>
                                <li>Get special discounts and offers on Netmeds services.</li>
                                <li>Get 2.5% NMS Cash on all orders.</li>
                            </ul></div>
                    </Col>
                    <Col lg="4" md="6" sm="8" xs="10" className="my-1">
                        <Row>
                            <Col xs="8">
                                <div className='mt-4 flash'>
                                    <Image src={flash} className='mx-1' />
                                    <span>Starting at ₹299</span>
                                </div>
                            </Col>
                            <Col xs="4">
                                <Button href="#"className='my-3 explore-button'>Explore Plans</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Membership;
