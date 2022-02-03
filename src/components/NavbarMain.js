import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './NavbarMain.css';
import mainLogo from './images/svgs/netmeds-logo.svg';
import rx from './images/svgs/rx-icon.svg';
import cart from './images/svgs/cart.svg';
import userimg from './images/svgs/user-icon.svg';
import { logout } from "../redux/actions/authsActions";
import { useSelector, useDispatch } from 'react-redux';

function NavbarMain() {
    const user = useSelector((state) => state.auth.user)

    const qty = useSelector((state) => state.cart)

    console.log(qty.cart?.length)

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        toast.success("Signedout Successfully!", { position: "bottom-right"});
        dispatch(logout());
    }

    const authLinks = (
        <>
            <Nav.Link className="nav-bar-link-2 me-2 cart" href="/cart"><img
                src={cart}
                className="d-inline-block align-top me-2 img-fluid"
                alt="rx-icon"
            /><span className='cart-count'>{qty.cart?.length}</span>Cart</Nav.Link>

            <Nav.Link className="nav-bar-link-3" href="#"><img
                src={userimg}
                className="d-inline-block align-top me-2 img-fluid"
                alt="rx-icon"
                onClick={(e) => handleLogout(e)}
            />Sign out</Nav.Link>
        </>
    )

    const guestLinks = (
        <>
            <Nav.Link className="nav-bar-link-2 me-2 cart" href="/register"><img
                src={cart}
                className="d-inline-block align-top me-2 img-fluid"
                alt="rx-icon"
            /><span className='cart-count'>{qty.cart?.length}</span>Cart</Nav.Link>

            <Nav.Link className="nav-bar-link-3" href="/register"><img
                src={userimg}
                className="d-inline-block align-top me-2 img-fluid"
                alt="rx-icon"
            />Sign in / Sign up</Nav.Link>
        </>
    )


    return (
        <>
            <Navbar sticky="top" className="nav-bar" expand="lg">

                <Container fluid className="nav-container">
                    <Navbar.Brand href="/"><img
                        src={mainLogo}
                        className="d-inline-block my-2 me-2"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Form className="d-flex search-bar me-2">
                                <NavDropdown title="Deliver to 110002" id="navbarScrollingDropdown" className="ms-1 py-1 search-dropdown">
                                    <NavDropdown.Item href="#">SignIn</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        EnterPincode
                                        <FormControl
                                            type="search"
                                            placeholder="Pincode"
                                            className="me-2"
                                        />
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <FormControl
                                    type="search"
                                    placeholder="Search for medical & wellness products.."
                                    className="me-2 search"
                                    aria-label="Search"
                                />
                            </Form>

                            <Nav.Link className="nav-bar-link-1 me-2" href="#"><img
                                src={rx}
                                className="d-inline-block align-top me-2 img-fluid"
                                alt="rx-icon"
                            />Upload</Nav.Link>

                            {user? authLinks : guestLinks}

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarMain;