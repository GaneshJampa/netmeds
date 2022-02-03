import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import facialKits from './images/images-png-jpeg/facial-kits.jpg';
import lipCare from './images/images-png-jpeg/lip-care.jpg';
import bodycare from './images/images-png-jpeg/body-care.jpg';
import hairCare from './images/images-png-jpeg/hair-care.jpg';
import './ElasticCarousel.css';

function ExploreBeauty() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 992, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
    ];

    return (
        <>
        <div style={{background: "linear-gradient(180deg, #ef4281 50%, #f3f7fb 50%)"}} className="mx-1">
            <h4 className="head px-4 pt-3"
                style={{
                    color: "white",
                }}> Explore Beauty
                <a href="/products/beauty" className="view-link my-2" style={{ color: "white" }}> View All <i class="fas fa-xs fa-chevron-right ms-1"></i></a>
            </h4>

            <Carousel breakPoints={breakPoints} className='mt-4'>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={facialKits} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Facial Kits</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={lipCare} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Lip Care</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={bodycare} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Body Care</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={hairCare} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Hair Care</Card.Text>
                    </Card.Body>
                </Card>
            </Carousel>
        </div>
        </>
    )
}

export default ExploreBeauty;
