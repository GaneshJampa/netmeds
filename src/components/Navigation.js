import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Navigation.css';

function Navigation() {

    return (

        <>
            <Nav className="justify-content-center navigation" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/products/covid essentials" className="navigation-link">COVID Essentials</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/products/diabetes" className="navigation-link">Diabetes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/products/eyewear" className="navigation-link">Eyewear</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/products/ayush" className="navigation-link">Ayush</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/products/fitness" className="navigation-link">Fitness</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/products/mom & baby" className="navigation-link">Mom & Baby</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/products/devices" className="navigation-link">Devices</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/products/surgicals" className="navigation-link">Surgicals</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/products/sexual wellness" className="navigation-link">Sexual Wellness</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/treatments" className="navigation-link">Treatments</Nav.Link>
                </Nav.Item>
            </Nav>

        </>

    )

}

export default Navigation;