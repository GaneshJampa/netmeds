import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import './Cart.css'
import { Link, useNavigate } from 'react-router-dom';
import CartComponent from './CartComponent';
import prevOrders from './images/svgs/previous-orders2.svg';

const Cart = () => {

    const cart = useSelector((state) => state?.cart.cart);

    const user = useSelector((state) => state.auth.user);

    const navigate = useNavigate();

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [totalMrp, setTotalMrp] = useState(0);


    useEffect(() => {
        let price = 0;
        let mrp = 0;
        let discount = 0;
        cart?.forEach(product => {
            price += product.qty * product.sellPrice;
            mrp += product.qty * product.mrp;
            discount += (product.qty * product.mrp) - (product.qty * product.sellPrice);
        })
        setTotalPrice(price);
        setTotalMrp(mrp);
        setTotalDiscount(discount);
    }, [cart, totalPrice, setTotalPrice, totalMrp, setTotalMrp, totalDiscount, setTotalDiscount]);

    function Cart() {
        if (cart?.length !== 0) {
            return <CartComponent />;
        } else {
          return <p className='p-3 mb-4'>YOUR CART IS EMPTY</p>;  
        }
        
    }

    const handleProceed = () => {
        if (user) {
            if(cart.length !== 0) {
             navigate("/checkout/order")  ; 
            } else {
                toast.info("Please add items to cart!", { position: "bottom-right" });
            } 
        } else {
            toast.info("Please sign in to proceed!", { position: "bottom-right" });
        }
    }


    return (
        <>
            <Container className='mb-3'>
                <h1 className='order-heading py-2'>Order Summary</h1>
                <Row>
                    <Col lg="9" xs="12">
                        <div className='cart-products p-2 mb-3'>
                            <h4 className='cart-products-h my-4 mx-3'>PRODUCTS</h4>
                            {Cart()}
                            <p className='pb-1'><Link className='add-more-items mx-3' to='/products/all'>ADD MORE TIMES<span className='plus-icon me-3'>+</span></Link></p>
                        </div>
                    </Col>
                    <Col lg="3" xs="12">
                        <div className='checkout-box py-2 px-2'>
                            <h1 className='cart-products-h my-3 mx-2'>PAYMENT DETALIS</h1>
                            <p className='my-3 mx-2'>MRP Total <span className="me-2" style={{ float: "right" }}>₹ {(totalMrp).toFixed(2)}</span> </p>
                            <p className='my-3 mx-2'>Netmeds Discount <span className="me-2" style={{ float: "right" }}>- ₹ {(totalDiscount).toFixed(2)}</span> </p>
                            <p className='my-3 mx-2' style={{ fontWeight: "bold" }}>Total Price * <span className="me-2" style={{ float: "right" }}>₹ {(totalPrice).toFixed(2)}</span> </p>
                            <p className="cart-savings">TOTAL SAVINGS  <span className='ms-2'>₹.{(totalDiscount).toFixed(2)}</span></p>
                            <Button href="#" className='proceed-btn my-2' onClick={handleProceed}>PROCEED</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" className="my-1 p-3" style={{background: "white", borderRadius: "10px"}}>
                        <div className="mx-2">
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
                                        className="d-inline-block align-top two-img-1"
                                        alt="rx-icon"
                                    /></Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Cart;
