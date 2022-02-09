import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import './ProductPagination.css'

const ProductPagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];
    const [active, setActive] = useState(1);

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(
            <Pagination.Item onClick={() => {paginate(i); setActive(i)}} key={i} active={i === active}>
                {i}
            </Pagination.Item>,
        );   
    };
    
    return <Pagination  style={{justifyContent: "center"}} className="my-3" >{pageNumbers}</Pagination>;
}

export default ProductPagination;
