import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import refil from './images/svgs/medicine-refil.svg';
import './Membership.css';

function MedicineRefil() {

    return (
        <>

            <Container fluid className='px-4'>
                <Row className='membership pb-2' style={{borderTop: "none"}}>
                    <Col lg="1 " md="1" sm="2" xs="2" className="   ">
                        <Image src={refil} className='mx-4' style={{width: "80px", height: "110px"}} />
                    </Col>
                    <Col lg="7" md="7" sm="6" xs="10" className="my-1">
                        <div className='mem'>
                            <h3 className='mem-head'>Get medicine refill every month</h3>
                            <ul className='mem-list'>
                                <li>Subscribe and schedule next deliveries</li>
                                <li>Subscribe for 12 months and get the last month free. *T&C Apply</li>
                            </ul></div>
                    </Col>
                    <Col lg="4" md="4" sm="4" xs="8" className="my-1">
                        <Button href="/cart" className='my-3 explore-button'>My orders</Button>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default MedicineRefil;
