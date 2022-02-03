import React from "react";
import { Carousel } from 'react-bootstrap';
import './NetmedsCarousel.css';
import carouselimg1 from './images/images-png-jpeg/carousel1.jpg';
import carouselimg2 from './images/images-png-jpeg/carousel2.jpg';
import carouselimg3 from './images/images-png-jpeg/carousel3.jpg';

function NetmedsCarousel() {

    return (
        <>

            <Carousel className="m-3">
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={carouselimg1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={carouselimg2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={carouselimg3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </>
    )

}

export default NetmedsCarousel;