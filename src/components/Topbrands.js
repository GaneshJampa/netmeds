import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import hashmi from './images/images-png-jpeg/hashmi.jpg';
import skin from './images/images-png-jpeg/skin-elements.jpg';
import drvaidyas from './images/images-png-jpeg/dr-vaidyas.jpg';
import dabur from './images/images-png-jpeg/dabur.jpg';
import accucheck from './images/images-png-jpeg/accu-check.jpg';
import novaherbs from './images/images-png-jpeg/nova-herbs.jpg';
import originNutrition from './images/images-png-jpeg/origin-nutrition.jpg';
import durex from './images/images-png-jpeg/durex.jpg';
import dettol from './images/images-png-jpeg/dettol.jpg';
import himalaya from './images/images-png-jpeg/himalaya.jpg';
import mamaearth from './images/images-png-jpeg/mamaearth.jpg';
import './ElasticCarousel.css';

function Topbrands() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 992, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
    ];

    return (
        <>

            <h4 className="head px-4">Top Brands</h4>

            <Carousel breakPoints={breakPoints} className='mt-4'>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={hashmi} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Hashmi</Card.Text>
                        <Card.Text className='car-txt'>Flat 5% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={skin} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Skin-Elements</Card.Text>
                        <Card.Text className='car-txt'>UP TO 50% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={drvaidyas} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Dr Vaidyas</Card.Text>
                        <Card.Text className='car-txt'>UP TO 63% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={dabur} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Dabur</Card.Text>
                        <Card.Text className='car-txt'>UP TO 30% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={accucheck} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Accu-Check</Card.Text>
                        <Card.Text className='car-txt'>UP TO 25% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={novaherbs} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Novaherbs</Card.Text>
                        <Card.Text className='car-txt'>UP TO 20% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={originNutrition} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Origin-Nutrition</Card.Text>
                        <Card.Text className='car-txt'>Flat 15% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={durex} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Durex</Card.Text>
                        <Card.Text className='car-txt'>UP TO 25% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={dettol} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Dettol</Card.Text>
                        <Card.Text className='car-txt'>UP TO 20% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={himalaya} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Himalaya</Card.Text>
                        <Card.Text className='car-txt'>UP TO 39% OFF</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={mamaearth} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Mamaearth</Card.Text>
                        <Card.Text className='car-txt'>UP TO 30% OFF</Card.Text>
                    </Card.Body>
                </Card>
            </Carousel>

        </>
    )
}

export default Topbrands;
