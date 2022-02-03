import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import nailPolish from './images/images-png-jpeg/nail-polish.jpg';
import razors from './images/images-png-jpeg/razors.jpg';
import beardOil from './images/images-png-jpeg/beard-oil.jpg';
import beardWash from './images/images-png-jpeg/beard-wash.jpg';
import hairGels from './images/images-png-jpeg/hair-gel.jpg';
import './ElasticCarousel.css';

function MensGrooming() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 992, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
    ];

    return (
        <>

            <h4 className="head px-4 pt-4"> Men's Grooming
                <a href="/products/men's grooming" className="view-link my-2"> View All <i class="fas fa-xs fa-chevron-right ms-1"></i></a>
            </h4>

            <Carousel breakPoints={breakPoints} className='mt-4'>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={nailPolish} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Nail Polish</Card.Text>
                        <Card.Text className='car-txt'>Flat 5% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={razors} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Razor & Catridges</Card.Text>
                        <Card.Text className='car-txt'>UP TO 50% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={beardOil} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Beard Oil</Card.Text>
                        <Card.Text className='car-txt'>UP TO 63% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={beardWash} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Beard Wash</Card.Text>
                        <Card.Text className='car-txt'>UP TO 30% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={hairGels} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Hair Gels & Waxes</Card.Text>
                        <Card.Text className='car-txt'>UP TO 25% OFF</Card.Text>
                    </Card.Body>
                </Card>
            </Carousel>

        </>
    )
}

export default MensGrooming;
