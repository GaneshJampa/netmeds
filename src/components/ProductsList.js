import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setProducts } from '../redux/actions/productsActions';
import './ProductsList.css';
import ProductComponent from './ProductComponent';
import { useParams } from 'react-router';
import CategoryComponent from './CategoryComponent';

const ProductsList = () => {

    const { category } = useParams();

    const categories = useSelector((state) => state.allCategories.categories);

    if (category === 'all') { }
    else {
        for (var i = 0; i < categories.length; i++) {
            const cat = categories[i] && categories[i].name.toLowerCase();
            if (`${category}` == cat) {
                var catId = categories[i] && categories[i]._id;
                console.log(catId);
            }
        }
    }

    const res = () => {
        if (category === 'all') {
            return `https://netmeds-backend.herokuapp.com/products`;
        } else {
            return `https://netmeds-backend.herokuapp.com/categories/${catId}/products`
        }
    }

    const products = useSelector((state) => state);

    const dispatch = useDispatch();

    const fetchCategories = async () => {
        const response = await axios
            .get("https://netmeds-backend.herokuapp.com/categories")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setCategories(response.data));
    };

    const fetchProducts = async () => {
        const response = await axios
            .get(res())
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response && response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, [catId]);

    useEffect(() => {
        fetchCategories();
    }, [])

    console.log("Products :", products);


    function Products() {
        const productsExists = products.allProducts.products;
        if (productsExists) {
          return <ProductComponent />;
        }
        return <p className='p-3 mb-4 ms-1'>NO PRODUCTS TO SHOW</p>;
      }

    return (
        <>
            <Container className='py-3'>
                <Row>
                    <Col lg="3">
                        <div className='categories-list p-3 mb-4'>
                            <h1 className='categories-head pb-3'>Categories</h1>
                            <ul className='categories-menu'>
                                <Link to={`/products/all`} style={{ textDecoration: "none" }}>
                                    <li className='categories py-2'>
                                        <i className="fas fa-chevron-right cat-arrow me-2"></i>
                                        All
                                    </li></Link>
                                <CategoryComponent />
                            </ul>
                        </div>
                    </Col>
                    <Col lg="9">
                        <div className='products-list p-4'>
                            <Row>
                                <h1 className='products-head mx-2'>PRODUCTS</h1>
                                {Object.keys(products).length === 0 ? (
                                    <div>...Loading</div>
                                ) : (
                                    Products()
                                    )}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default ProductsList;
