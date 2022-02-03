import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import covid from './images/images-png-jpeg/covid-essentials.jpg';
import ayush from './images/images-png-jpeg/ayush.jpg';
import momNbaby from './images/images-png-jpeg/momNbaby.jpg';
import devices from './images/images-png-jpeg/devices.jpg';
import fitness from './images/images-png-jpeg/fitness.jpg';
import './ElasticCarousel.css';

function Category() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 992, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
    ];

    return (
        <>

            <h4 className="head px-4"> Shop by Category
                <a href="/products/all" className="view-link my-2"> View All <i class="fas fa-xs fa-chevron-right ms-1"></i></a>
            </h4>

            <Carousel breakPoints={breakPoints} className='mt-4'>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={covid} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Covid Essentials</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={ayush} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Ayush</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={momNbaby} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Mom and Baby</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={devices} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Devices</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={fitness} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Fitness</Card.Text>
                    </Card.Body>
                </Card>
            </Carousel>

        </>
    )
}

export default Category;
