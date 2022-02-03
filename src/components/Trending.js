import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import trending1 from './images/images-png-jpeg/trending1.jpg';
import trending2 from './images/images-png-jpeg/trending2.jpg';
import trending3 from './images/images-png-jpeg/trending3.jpg';
import trending4 from './images/images-png-jpeg/trending4.jpg';
import trending5 from './images/images-png-jpeg/trending5.jpg';
import './Trending.css';

function Trending() {


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 3 },
        { width: 1450, itemsToShow: 4 },
        { width: 1750, itemsToShow: 5 }
    ];



    return (
        <>

            <h4 className="head px-4"> Trending Today </h4>

            <Carousel breakPoints={breakPoints} className='mt-4'>
                <Card>
                    <Card.Img src={trending1} />
                </Card>
                <Card>
                    <Card.Img src={trending2} />
                </Card>
                <Card>
                    <Card.Img src={trending3} />
                </Card>
                <Card>
                    <Card.Img src={trending4} />
                </Card>
                <Card>
                    <Card.Img src={trending5} />
                </Card>
            </Carousel>
        </>
    )
}

export default Trending;
