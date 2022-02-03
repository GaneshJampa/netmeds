import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import stayfree from './images/images-png-jpeg/stay-free.jpg';
import bodycare from './images/images-png-jpeg/body-care.jpg';
import ayurvedic from './images/images-png-jpeg/ayurvedic.jpg';
import orthop from './images/images-png-jpeg/orthop.jpg';
import sports from './images/images-png-jpeg/sports.jpg';
import immunity from './images/images-png-jpeg/immunity-booster.jpg';
import './ElasticCarousel.css';

function CategoriesFocus() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 992, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
    ];

    return (
        <>

            <h4 className="head px-4 pt-4"> Categories in Focus
                <a href="/products/all" className="view-link my-2"> View All <i class="fas fa-xs fa-chevron-right ms-1"></i></a>
            </h4>

            <Carousel breakPoints={breakPoints} className='mt-4'>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={stayfree} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Feminine Hygiene</Card.Text>
                        <Card.Text className='car-txt'>Flat 5% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={bodycare} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Body Care</Card.Text>
                        <Card.Text className='car-txt'>UP TO 50% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={ayurvedic} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Ayurvedic</Card.Text>
                        <Card.Text className='car-txt'>UP TO 63% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={orthop} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Orthopaedics</Card.Text>
                        <Card.Text className='car-txt'>UP TO 30% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={sports} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Sports Supplements</Card.Text>
                        <Card.Text className='car-txt'>UP TO 25% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={immunity} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Immunity Booster</Card.Text>
                        <Card.Text className='car-txt'>UP TO 20% OFF</Card.Text>
                    </Card.Body>
                </Card>
            </Carousel>

        </>
    )
}

export default CategoriesFocus;
