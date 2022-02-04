import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import './Cart.css'

const Cart = () => {

    const cart = useSelector((state) => state?.cart.cart);

    const products = useSelector((state) => state.allProducts.products);

    const [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();

    const handleRemove = (id, products) => {
        dispatch(removeFromCart({ id, products }));
        toast.success("Product removed from cart!", { position: "bottom-right"});
    }

    useEffect(() => {
        let price = 0;
        cart.forEach(product => {
            price += product.qty * product.sellPrice
        })
        setTotalPrice(price);
    }, [cart, totalPrice, setTotalPrice])


    const cartRender = cart?.map((product) => {
        const { _id, category, name, mrp, sellPrice, productImage, sellerName, qty } = product;
        var path = productImage.replace(/\\/g, "/");
        return (
            <>
                <Row className='cart-product pt-2 my-4'>
                    <Col xs="4" className="">
                        <Image src={`https://netmeds-backend.herokuapp.com/${path}`} className='my-2 cart-img' />
                    </Col>
                    <Col xs="7" className="">
                        <div className='my-2'>
                            <h3 className='l-product-title'>{name}</h3>
                            <p className='l-mkt'><span className=''>₹  {sellPrice} </span></p>
                        </div>
                    </Col>
                    <Col xs="1" className="my-1">
                        <Row>
                            <Col xs="12">
                                <p className=''> Qty: {qty} </p>
                                <Button href="#" className='rmv-btn my-2' onClick={() => handleRemove(_id, products)}><i class="fas fa-trash-alt"></i></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        )
    })

    return (
        <>
            <Container>
                <Row>
                    <Col xs="9">{cartRender}</Col>
                    <Col xs="3">
                        <div className='checkout-box my-4 py-2 px-2'>
                            <h1 className='cart-heading'>Cart Summary</h1>
                            <p className='my-4'>Total: ({cart?.length}items) ₹ {totalPrice}</p>
                            <Button href="#" className='rmv-btn my-2'>Proceed to Checkout</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Cart;
