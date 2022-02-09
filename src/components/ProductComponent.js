import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../redux/actions/cartActions';
import ProductPagination from './ProductPagination';

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(9);

    
    const index0fLastProduct = currentPage * productsPerPage;
    const index0fFirstProduct = index0fLastProduct - productsPerPage;
    const currentProducts =  products.slice(index0fFirstProduct, index0fLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const dispatch = useDispatch();

    const handleAdd = (id, products) => {
        dispatch(addtoCart({id, products}));
        toast.success("Added to Cart!", { position: "bottom-right"});
    }

    const renderList = currentProducts && currentProducts.map((product) => {
        const { _id, category, name, mrp, sellPrice, productImage, sellerName } = product;
        var path = productImage.replace(/\\/g, "/");
        var off = (((mrp - sellPrice) / mrp) * 100).toFixed(2);
        return (
            <Col lg="4">
                <Card className='products-box my-2' key={_id}>
                    <Link to={`/product/${_id}`} style={{ textDecoration: "none", display: "grid" }}>
                        <div className='py-2'>
                            <span className='off-badge'>{off}%OFF</span>
                        </div>
                        <img className='products-img mx-auto' src={`https://netmeds-backend.herokuapp.com/${path}`} alt="" />
                    </Link>
                    <Card.Body>
                        <Link to={`/product/${_id}`} style={{ textDecoration: "none", display: "grid" }}>
                            <Card.Text>
                                <h1 className='products-title'>{name}</h1>
                                <p className='products-mkt my-1'>Mkt:{sellerName}</p>
                                <p className='my-1'><span className='best-price'>Best price*</span>
                                    <span className='mx-1 final-price'>Rs. {sellPrice}</span></p>
                                <p className='my-1'><span className='mrp-l'>MRP</span>
                                    <span className='mx-1 product-mrp'>Rs. {mrp}</span></p>
                            </Card.Text>
                        </Link>
                        <Button className='add-btn' onClick={(e) => handleAdd(_id, products)}>Add To Cart</Button>
                    </Card.Body>

                </Card>
            </Col>
        );
    });

    return (
    <>
    {renderList}
    <ProductPagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}/>
    </>
    )
};

export default ProductComponent;
