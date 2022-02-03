import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import diabetic from './images/images-png-jpeg/diabetic-care.jpg';
import deAddiction from './images/images-png-jpeg/de-addiction.jpg';
import lungCare from './images/images-png-jpeg/lung-care.jpg';
import weightCare from './images/images-png-jpeg/weight-care.jpg';
import womensCare from "./images/images-png-jpeg/women's-care.jpg";
import bonePain from './images/images-png-jpeg/bone-pain.jpg';
import './ElasticCarousel.css';

function HealthConcerns() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 992, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
    ];

    const imgStyle = {
        width: "96px",
        height: "96px",
        margin: "20% auto"
    }

    return (
        <>

            <h4 className="head px-4 pt-4">Health Concerns</h4>

            <Carousel breakPoints={breakPoints} className='mt-4'>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={diabetic} style={imgStyle} />
                    <Card.Body>
                        <Card.Text className='car-head'>Diabetic Care</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={deAddiction} style={imgStyle} />
                    <Card.Body>
                        <Card.Text className='car-head'>De-Addiction</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={lungCare} style={imgStyle} />
                    <Card.Body>
                        <Card.Text className='car-head'>Lung Care</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={weightCare} style={imgStyle} />
                    <Card.Body>
                        <Card.Text className='car-head'>Weight Care</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={womensCare} style={imgStyle} />
                    <Card.Body>
                        <Card.Text className='car-head'>Women's Care</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={bonePain} style={imgStyle} />
                    <Card.Body>
                        <Card.Text className='car-head'>Bone and Joint Pain</Card.Text>
                    </Card.Body>
                </Card>     
            </Carousel>

        </>
    )
}

export default HealthConcerns;
