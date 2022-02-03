import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import maybelline from './images/images-png-jpeg/maybelline.jpg';
import garnier from './images/images-png-jpeg/garnier.jpg';
import myglamm from './images/images-png-jpeg/myglamm.jpg';
import colorbar from './images/images-png-jpeg/colorbar.jpg';
import plum from './images/images-png-jpeg/plum.jpg';
import revlon from './images/images-png-jpeg/revlon.jpg';
import lotus from './images/images-png-jpeg/lotus.jpg';
import facesCanada from './images/images-png-jpeg/faces-canada.jpg';
import lorealParis from './images/images-png-jpeg/loreal-paris.jpg';
import './ElasticCarousel.css';

function BestinBeauty() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 992, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
    ];

    return (
        <>
        <div style={{background: "linear-gradient(180deg, rgba(11,18,25,.45) 50%, #f3f7fb 50%)"}} className="mx-1">
            <h4 className="head px-4 pt-3"
                style={{
                    color: "white",
                }}> Best in Beauty
                <a href="/products/beauty" className="view-link my-2" style={{ color: "white" }}> View All <i class="fas fa-xs fa-chevron-right ms-1"></i></a>
            </h4>

            <Carousel breakPoints={breakPoints} className='mt-4'>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={maybelline} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Maybelline</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={garnier} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Garnier</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={myglamm} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Myglamm</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={colorbar} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Colorbar</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={plum} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Plum</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={revlon} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Revlon</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={lotus} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Lotus</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={facesCanada} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Faces Canada</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card' style={{ width: '18rem' }}>
                    <Card.Img fluid src={lorealParis} className='car-img' />
                    <Card.Body>
                        <Card.Text className='car-head'>Loreal Paris</Card.Text>
                    </Card.Body>
                </Card>
            </Carousel>
        </div>
        </>
    )
}

export default BestinBeauty;
