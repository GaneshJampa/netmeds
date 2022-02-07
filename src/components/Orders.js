import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css'
import { Link } from 'react-router-dom';
import { showOrders } from '../redux/actions/cartActions';

const Orders = () => {

    const user = useSelector((state) => state.auth.user);
    const userId = user?._id
    const orders = useSelector((state) => state.orders.orders);

    const dispatch = useDispatch();

    const fetchOrders = async () => {
        if (user) {
            const response = await axios
                .get(`https://netmeds-backend.herokuapp.com/user/${userId}/orders`)
                .catch((error) => {
                    console.log("Error", error);
                });
            dispatch(showOrders(response.data.reverse()));
        }
    }

    useEffect(() => {
        fetchOrders();
        console.log("hello")
    });

    const productsComponent = ((products) => {
        const product = products.map((product) => {
            const { _id, category, name, mrp, sellPrice, productImage, sellerName, qty } = product;
            var path = productImage && productImage.replace(/\\/g, "/");
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
        })
        return <>{product}</>
    })


    const addressComponent = ((address) => {
        {
            const { mobilenumber, housenumber, city, district, pincode, state } = address;
            return (<p>{mobilenumber}, {housenumber}, {city}-{pincode}, {district}, {state}</p>)
        }
    })

    const handleCancel = (id) => {
        const response = axios
            .delete(`https://netmeds-backend.herokuapp.com/orders/${id}`)
            .catch((error) => {
                console.log("Error", error);
            });
        console.log(response)
        fetchOrders();
        toast.success("Order has been Cancelled", { position: "bottom-right" });
    }

    const order = orders && orders.map((order) => {
        const { _id, status, total, paymentmode, address, products } = order;
        return <>
            <div className='cart-products py-2 mt-2 mb-3'>
                <h4 className='cart-products-h my-4 mx-3'>OrderId: {_id}</h4>
                {productsComponent(products)}
                <p className='cart-products-h mx-3 my-3'>
                    <span className=''>Address & Contact details: </span><span>{addressComponent(address)}</span>
                </p>
                <p className='cart-products-h mx-3 my-3'>
                    <span className=''>Total Price * : </span>
                    <span className="me-2" >₹ {(total).toFixed(2)}</span>
                </p><p className='cart-products-h mx-3 my-3'>
                    <span className=''>Payment : </span>
                    <span className="me-2" >{paymentmode}</span>
                </p>
                <p className='cart-products-h mx-3 my-3'>
                    <span className=''>Status : </span>
                    <span className="me-2" >{status}</span>
                </p>
                <p className='cart-products-h mx-3 my-3'>
                    <span className=''>Delivery in one week</span>
                </p>
                <Button className="signin-btn mx-2 my-2" style={{ width: "250px" }} type="submit" onClick={() => { handleCancel(_id) }}>CANCEL ORDER</Button>
            </div>
        </>
    })

    function Orders() {
        if (orders?.length !== 0) {
            return <>
                <div className=''>
                    {order}
                </div>
            </>
        } else {
            return <div className='cart-products py-2 mt-2 mb-3' ><p className='p-3 mb-4'>NO ORDERS TO SHOW</p></div>;
        }

    }

    return (
        <Container>
            <div className=''>
                <h1 className='order-heading p-2'>Your Orders</h1>
                {Orders()}
            </div>
        </Container>
    )
};

export default Orders;
