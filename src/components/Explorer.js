import React from 'react';
import { Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import './Explorer.css';
import medicine from './images/svgs/medicine.svg';
import wellness from './images/svgs/wellness.svg';
import labtests from './images/svgs/lab-tests.svg';
import beauty from './images/svgs/beauty (2).svg';
import healthcorner from './images/svgs/health-corner.svg';

function Explorer() {
    return (
        <>
            <div >
                <Container fluid className="nav-container explorer-menu">
                    <Row className="explorer-item">
                        <Col>
                            <div>
                                <Row>
                                    <Col lg="2" md="3" sm="5" xs="2">
                                        <a className="" href="#"><img
                                            src={medicine}
                                            className="d-inline-block align-top explorer-link"
                                            alt="rx-icon" /></a>
                                    </Col>
                                    <Col lg="2" md="3" sm="5" xs="2" >
                                        <NavDropdown title="Medicine" id="navbarScrollingDropdown" className="explorer-text mb-2">
                                            <NavDropdown.Item href="/products/all">All Medicines</NavDropdown.Item>
                                            <NavDropdown.Item href="/orders">Previously Ordered Products</NavDropdown.Item>
                                        </NavDropdown>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Row>
                                    <Col lg="2" md="3" sm="2" xs="2">
                                        <a className="" href="/products/wellness"><img
                                            src={wellness}
                                            className="d-inline-block align-top explorer-link"
                                            alt="rx-icon" /></a>
                                    </Col>
                                    <Col lg="2" md="3" sm="2" xs="2" className='mt-2 ms-3 explorer-text' >
                                        <a href="/products/wellness" >
                                            <p>Wellness</p></a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Row>
                                    <Col lg="2" md="3" sm="2" xs="2">
                                        <a className="" href="/labtests"><img
                                            src={labtests}
                                            className="d-inline-block align-top explorer-link"
                                            alt="rx-icon" /></a>
                                    </Col>
                                    <Col lg="2" sm="2" xs="2" className='mt-2 ms-3 explorer-text' >
                                        <a href="/labtests">
                                            <p>LabTests</p></a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Row>
                                    <Col lg="2" md="3" sm="2" xs="2" >
                                        <a className="" href="/products/beauty"><img
                                            src={beauty}
                                            className="d-inline-block align-top explorer-link"
                                            alt="rx-icon" /></a>
                                    </Col>
                                    <Col lg="2" sm="2" xs="2" >
                                        <NavDropdown title="Beauty" id="navbarScrollingDropdown" className="explorer-text mb-2">
                                            <NavDropdown.Item href="/products/beauty">Personal Care</NavDropdown.Item>
                                            <NavDropdown.Item href="/products/beauty">Make-up</NavDropdown.Item>
                                            <NavDropdown.Item href="/products/beauty">Hair</NavDropdown.Item>
                                            <NavDropdown.Item href="/products/beauty">Skin Care</NavDropdown.Item>
                                            <NavDropdown.Item href="/products/beauty">Tools & Appliances</NavDropdown.Item>
                                            <NavDropdown.Item href="/products/beauty">Mom & Baby</NavDropdown.Item>
                                            <NavDropdown.Item href="/products/beauty">Fragrances</NavDropdown.Item>
                                            <NavDropdown.Item href="/products/beauty">Men's Grooming</NavDropdown.Item>
                                        </NavDropdown>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Row>
                                    <Col lg="2" md="3" sm="2" xs="1" >
                                        <a className="" href="/healthcorner"><img
                                            src={healthcorner}
                                            className="d-inline-block align-top explorer-link"
                                            alt="rx-icon" /></a>
                                    </Col>
                                    <Col lg="2" md="2" sm="2" xs="2" >
                                        <NavDropdown title="HealthCorner" id="navbarScrollingDropdown" className="explorer-text mb-2">
                                        <NavDropdown.Item href="/healthcorner">Health Library    </NavDropdown.Item>
                                        <NavDropdown.Item href="/healthcorner">PatientsAlike</NavDropdown.Item>
                                        <NavDropdown.Item href="/healthcorner">Corona Awareness</NavDropdown.Item>
                                    </NavDropdown>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default Explorer
