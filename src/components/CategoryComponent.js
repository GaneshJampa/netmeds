import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './ProductsList.css';

const CategoryComponent = () => {
    const categories = useSelector((state) => state.allCategories.categories);

    const catList = categories?.map((category) => {
        const { _id, name } = category;
        const link = name && name.toLowerCase();
        return (
            <>
            <Link to={`/products/${link}`} style={{textDecoration: "none"}}>
            <li className='categories py-2' key={_id}>
                <i className="fas fa-chevron-right cat-arrow me-2"></i>
                {name}
            </li></Link>
            </>
        )
    })
  return <>{catList}</>;
};

export default CategoryComponent;
