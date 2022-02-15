import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css'
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/actions/cartActions';

const CheckoutOrder = () => {

    const cart = useSelector((state) => state?.cart.cart);

    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [totalPrice, setTotalPrice] = useState(0);
    const [mobilenumber, setMobileNumber] = useState('');
    const [housenumber, setHouseNumber] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPINCODE] = useState('');
    const [district, setDISTRICT] = useState('');
    const [state, setSTATE] = useState('');

    useEffect(() => {
        let price = 0;
        cart.forEach(product => {
            price += product.qty * product.sellPrice;
        })
        setTotalPrice(price);
    }, [cart, totalPrice, setTotalPrice]);

    const orderrender = cart?.map((product) => {
        const { _id, category, name, mrp, sellPrice, productImage, sellerName, qty } = product;
        var path = productImage.replace(/\\/g, "/");
        return (
            <Row className='cart-product pt-2 my-4 mx-2' key={_id}>
                <Col xs="2" className="">
                    <Image fluid src={`https://netmeds-backend.herokuapp.com/${path}`} className='my-2 cart-img' />
                </Col>
                <Col xs="8" className="">
                    <div className='my-2'>
                        <Link to={`/product/${_id}`} style={{ textDecoration: "none" }}><h3 className='l-product-title'>{name}</h3></Link>
                        <p className='l-mkt'>Mkt: {sellerName}</p>
                        <p>Total: <span className='mx-1'>{qty} x ₹  {sellPrice} = </span><span className='cart-price m-0'>₹  {qty * sellPrice} </span></p>
                    </div>
                </Col>
                <Col xs="2" className="my-2">
                    <Row>
                        <Col xs="12">
                            <div className='my-2'>
                                <p>Qty: {qty}</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>)
    });

    const handleOrder = () => {
        if (!mobilenumber || !housenumber || !city || !pincode || !district || !state) {
            toast.info("Fill the address form!", { position: "bottom-right" });
        } else {
            const order = {
                user: user._id,
                products: cart,
                total: totalPrice,
                address: {
                    mobilenumber: mobilenumber,
                    housenumber: housenumber,
                    city: city,
                    pincode: pincode,
                    district: district,
                    state: state,
                }
            }
            try {
                axios.post("https://netmeds-backend.herokuapp.com/orders", order);
                dispatch(clearCart());
                navigate("/orders");
                toast.success("Order Successful!", { position: "bottom-right" });
            } catch (err) {
                console.log(err.response);
                toast.error("Cannot Place Order!", { position: "bottom-right" });
            }
        }
    }

    return (
        <>
            <Container className='my-1'>
                <h1 className='order-heading p-2'>Checkout</h1>
                <div className='cart-products p-2 mb-3'>
                    <h4 className='cart-products-h my-4 mx-3'>PRODUCTS</h4>
                    {orderrender}
                    <h3 className='l-product-title mx-3 my-3' style={{ borderBottom: "1px solid rgba(21,27,57,.1)" }}><span className='signin-head'>Total Price * : </span>  <span className="me-2" style={{ float: "right" }}>₹ {(totalPrice).toFixed(2)}</span></h3>
                    <h3 className='l-product-title mx-3 my-2' style={{ borderBottom: "1px solid rgba(21,27,57,.1)" }}><span className='signin-head'>Payment : </span>  <span className="me-2" style={{ float: "right" }}>Cash on delivery</span></h3>
                    <Col md="12" lg>
                        <div className='my-4 mx-3'>
                            <div className=''>
                                <h2 className='signin-head'>Delivery Address</h2>
                                <form onSubmit={handleOrder}>
                                    <div className='mt-2 mb-4'>
                                        <label className='signin-label'>MOBILE NUMBER (+91)</label>
                                        <div class="input-box my-2">
                                            <input required
                                                type="text"
                                                class="input-form"
                                                name="mobilenumber"
                                                onChange={(e) => setMobileNumber(e.target.value)}
                                                placeholder="Enter your mobile number" />
                                        </div>
                                        <label className='signin-label'>HOUSE NUMBER </label>
                                        <div class="input-box my-2">
                                            <input required
                                                type="text"
                                                class="input-form"
                                                name="housenumber"
                                                onChange={(e) => setHouseNumber(e.target.value)}
                                                placeholder="Enter your house number" />
                                        </div>
                                        <label className='signin-label'>CITY</label>
                                        <div class="input-box my-2">
                                            <input required
                                                type="text"
                                                class="input-form"
                                                name="city"
                                                onChange={(e) => setCity(e.target.value)}
                                                placeholder="Enter your city" />
                                        </div>
                                        <label className='signin-label'>PINCODE</label>
                                        <div class="input-box my-2">
                                            <input required
                                                type="text"
                                                class="input-form"
                                                name="pincode"
                                                Length="6"
                                                onChange={(e) => setPINCODE(e.target.value)}
                                                placeholder="Enter your pincode" />
                                        </div>
                                        <label className='signin-label'>DISTRICT</label>
                                        <div class="input-box my-2">
                                            <input required
                                                type="text"
                                                class="input-form"
                                                name="district"
                                                onChange={(e) => setDISTRICT(e.target.value)}
                                                placeholder="Enter your district" />
                                        </div>
                                        <label className='signin-label'>STATE</label>
                                        <div class="input-box my-2">
                                            <input required
                                                type="text"
                                                class="input-form"
                                                name="state"
                                                onChange={(e) => setSTATE(e.target.value)}
                                                placeholder="Enter your state" />
                                        </div>
                                    </div>
                                    <div class="form-check p-0">
                                        <Button className="signin-btn" type='submit'>CONFIRM ORDER</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </div>
            </Container>
        </>
    )
};

export default CheckoutOrder;
