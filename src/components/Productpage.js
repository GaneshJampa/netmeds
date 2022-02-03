import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productsActions';
import { Container, Row, Col, ProgressBar, Button, Image } from 'react-bootstrap';
import offers from './images/svgs/offer_blue_outline.svg';
import './Productpage.css';
import _ from "lodash";

const Productpage = () => {

    const { productId } = useParams();


    const product = useSelector((state) => state.product);

    const { name, mrp, description, sellPrice, sellerName } = product;
    const cat = product.category && product.category.name;
    console.log(product);

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchProductDetail() {
            const response = await axios
                .get(`https://netmeds-backend.herokuapp.com/products/${productId}`)
                .catch((error) => {
                    console.log("Error", error);
                });
            dispatch(selectedProduct(response.data));
        }
        if (productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId, dispatch]);

    let path = product.productImage && product.productImage.replace(/\\/g, "/");
    var off = (((mrp - sellPrice) / mrp) * 100).toFixed(2);

    function ratingbar(rating) {
        if (rating === 5) {
            return <div>
                <ProgressBar className='rating-bar ms-5 mb-4' now={100} />
                <p className='rating-percent'>100%</p>
            </div>
        } else {
            return <div>
                <ProgressBar className='rating-bar ms-5 mb-4' now={0} />
                <p className='rating-percent'>0%</p>
            </div>
        }
    }


    const [like, setLike] = useState({ liked: false });

    function toggle() {
        let localLiked = like.liked;
        localLiked = !localLiked;
        setLike({ liked: localLiked });
      }


    return (
        <>
            <Container>
                {Object.keys(product).length === 0 ? (
                    <div>...Loading</div>
                ) : (
                    <><Row className='product-box p-3 my-4'>
                        <>
                            <Col md="12" lg className='py-2'>
                                <Image fluid src={`https://netmeds-backend.herokuapp.com/${path}`} alt='img' className='product-img' />
                            </Col>
                            <Col md="12" lg className='py-2'>
                                <h1 className='product-title'>{name}</h1>
                                <p className='product-category mb-2'>{cat}</p>
                                <p className='mb-2'>
                                    <span onClick={() => toggle()}>
                                        {like.liked === false ? (
                                            <i className="fas fa-heart fa-lg like"></i>
                                        ) : (
                                            <i className="fas fa-heart fa-lg like" style={{ color: "#ef4281" }}></i>
                                        )}
                                    </span>
                                    <span className='ms-3 rating'>5  {_.times(5, (i) => (<i className="fas fa-star"></i>))}</span>
                                </p>
                                <div className='product-pricing py-3 my-3'>
                                    <p className='best-price mb-1'>Best price*<span className='final-price ms-1'>₹  {sellPrice}</span></p>
                                    <div className='product-det mb-3'>
                                        <p className='mrp-off'>MRP <span className='mrp'>₹ {mrp}</span> <span className='off'>GET {off}% OFF</span></p>
                                        <p>(Inclusive of all taxes)</p>
                                        <p>*This product cannot be returned for a refund or exchange.</p>
                                        <p className='mkt'>* Mkt: {sellerName}</p>
                                        <p className='mkt'>* Country of Origin: India</p>
                                        <p className='mkt'>* Delivery charges if applicable will be applied at checkout</p>
                                    </div>
                                    <Button className='cart-add-btn'>ADD TO CART</Button>
                                </div>
                                <h3 className='offers'>OFFERS APPLICABLE</h3>
                                <Row>
                                    <Col className="my-1">
                                        <div className="applicable_off px-3">
                                            <Row>
                                                <Col xs='1' className="my-3"><img
                                                    src={offers}
                                                    className="d-inline-block align-top my-3 mx-auto"
                                                    alt="rx-icon" />
                                                </Col>
                                                <Col xs='11' className="my-2">
                                                    <div className='my-3'>
                                                        <h6 className="discount">Default Discount<span class="off_applied">Offer Applied</span></h6>
                                                        <p className="off_save">You get {off}% OFF on this product</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </>
                    </Row>
                        <Row className='disclaimer-box my-4'>
                            <h1 className='disclaimer'>Description</h1>
                            <p className='disclaimer-text'>{description}</p>
                        </Row>
                        <Row className='review-box my-2'>
                            <Col xs="12" md="12" lg="6">
                                <h1 className='rating-N-rvw'>Rating & Review</h1>
                                <div className='rate-rvw'>
                                    <span className='rating-rvw'>5 <i className="fas fa-star"></i></span>
                                    {_.times(5, (i) => (
                                        <div>
                                            <p className='rating-bar-rate'>{5 - i} <i className="fas fa-star rating-star"></i></p>
                                            {ratingbar(5 - i)}
                                        </div>))}
                                </div>
                            </Col>
                            <Col xs="12" md="12" lg="6">
                                <div className="review-form-block">
                                    <div className="star-rating">
                                        <img style={{ paddingRight: '10px' }} src="https://www.netmeds.com/assets/gloryweb/icons/rate-icon.png" alt='' />
                                        <span className='rate-product mx-2'>Rate Product</span>
                                        <span className='ms-2'>
                                            {_.times(5, (i) => (<i className="fas fa-star rate-product-star"></i>))}
                                        </span>
                                    </div>
                                    <Button className='write-review my-4'>
                                        <i className="fa fa-edit"></i> WRITE REVIEW</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className='disclaimer-box my-4'>
                            <h1 className='disclaimer'>Disclaimer</h1>
                            <p className='disclaimer-text'>The contents of this website are for informational purposes only and not intended to be a substitute
                                for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or
                                other qualified health provider with any questions you may have regarding a medical condition. Do not
                                disregard professional medical advice or delay in seeking it because of something you have read on this website.</p>
                        </Row>
                        <Row className='bottom-product-box pt-2 my-4'>

                            <>
                                <Col lg="1 " md="1" sm="2" xs="2" className="">
                                    <Image src={`https://netmeds-backend.herokuapp.com/${path}`} className='ms-2 my-2 l-img' />
                                </Col>
                                <Col lg="7" md="5" sm="10" xs="10" className="">
                                    <div className='my-2'>
                                        <h3 className='l-product-title'>{name}</h3>
                                        <p className='l-mkt'>Mkt:{sellerName}</p>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="8" xs="10" className="my-1">
                                    <Row>
                                        <Col xs="7">
                                            <div className='l-price'>
                                                <span className='l-bestprice'>₹  {sellPrice}</span>
                                                <p className='l-mrp-off'><span className='l-off'>{off}% OFF</span> <span className='l-mrp'>M.R.P.: <span className='l-strike'>Rs {mrp}</span></span> </p>
                                            </div>
                                        </Col>
                                        <Col xs="5">
                                            <Button href="#" className='cart-add-btn my-2'>ADD TO CART</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </>
                        </Row></>)}
            </Container>
        </>
    )
};

export default Productpage;
