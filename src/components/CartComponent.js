import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, adjustQty } from '../redux/actions/cartActions';
import './Cart.css'
import { Link } from 'react-router-dom';

const CartComponent = () => {
    const cart = useSelector((state) => state?.cart.cart);

    const products = useSelector((state) => state.allProducts.products);

    const dispatch = useDispatch();

    const handleRemove = (id, products) => {
        dispatch(removeFromCart({ id, products }));
        toast.success("Product removed from cart!", { position: "bottom-right" });
    }

    const onChangehandler = (e, id, products) => {
        console.log(e.target.value);
        dispatch(adjustQty({ id, products }, e.target.value));
    }

    const cartRender = cart?.map((product) => {
        const { _id, category, name, mrp, sellPrice, productImage, sellerName, qty } = product;
        var path = productImage.replace(/\\/g, "/");
        return (
            <>
                <Row className='cart-product pt-2 my-4 mx-2' key={_id}>
                    <Col xs="2" className="">
                        <Image fluid src={`https://netmeds-backend.herokuapp.com/${path}`} className='my-2 cart-img' />
                    </Col>
                    <Col xs="8" className="">
                        <div className='my-2'>
                            <Link to={`/product/${_id}`} style={{ textDecoration: "none" }}><h3 className='l-product-title'>{name}</h3></Link>
                            <p className='l-mkt'>Mkt: {sellerName}</p>
                            <p className='cart-price m-0'>₹  {sellPrice} </p>
                        </div>
                    </Col>
                    <Col xs="2" className="my-2">
                        <Row>
                            <Col xs="12">
                                {/* <p className=''> <label>Qty:</label> <input className=" mx-2" type="number" name="qty" min="1" max="5" value={qty}/> </p> */}
                                <div className='my-2'>
                                    <span>Qty:</span>
                                    <select className="mx-1 qty-inc" value={qty} name="quantity" onChange={(e) => onChangehandler(e, _id, products)}>
                                        <option className="">1</option>
                                        <option className="">2</option>
                                        <option className="">3</option>
                                        <option className="">4</option>
                                        <option className="">5</option>
                                    </select>
                                </div>
                                <Button href="#" className='rmv-btn my-2'
                                    onClick={() => handleRemove(_id, products)}><i className="fas fa-trash-alt"></i></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        )
    })

    return <>{cartRender}</>

};

export default CartComponent;