import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import bodycare from './images/images-png-jpeg/body-care.jpg';
import momNbaby from './images/images-png-jpeg/momNbaby.jpg';
import skinTreatment from './images/images-png-jpeg/skin-treatment.jpg';
import faceWash from './images/images-png-jpeg/face-wash.jpg';
import showerGels from './images/images-png-jpeg/shower-gels.jpg';
import './ElasticCarousel.css';

function PersonalCare() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 992, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
    ];

    return (
        <>

            <h4 className="head px-4">Personal Care</h4>

            <Carousel breakPoints={breakPoints} className='mt-4'>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={bodycare} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Body Care</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={momNbaby} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Mom & Baby</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={skinTreatment} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Skin Treatment</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={faceWash} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Face Wash & Cleansers</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={showerGels} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Shower Gels & Body Wash</Card.Text>
                    </Card.Body>
                </Card>
            </Carousel>

        </>
    )
}

export default PersonalCare;
