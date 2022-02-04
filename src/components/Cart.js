import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import './Cart.css'
import { Link } from 'react-router-dom';
import CartComponent from './CartComponent';

const Cart = () => {

    const cart = useSelector((state) => state?.cart.cart);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [totalMrp, setTotalMrp] = useState(0);


    useEffect(() => {
        let price = 0;
        let mrp = 0;
        let discount = 0;
        cart.forEach(product => {
            price += product.qty * product.sellPrice;
            mrp += product.qty * product.mrp;
            discount += (product.qty * product.mrp) - (product.qty * product.sellPrice);
        })
        setTotalPrice(price);
        setTotalMrp(mrp);
        setTotalDiscount(discount);
    }, [cart, totalPrice, setTotalPrice, totalMrp, setTotalMrp, totalDiscount, setTotalDiscount]);


    

    function Cart() {
        if (cart.length !== 0) {
          return <CartComponent />;
        }
        return <p className='p-3 mb-4'>YOUR CART IS EMPTY</p>;
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
                            <Button href="#" className='proceed-btn my-2'>PROCEED</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Cart;
