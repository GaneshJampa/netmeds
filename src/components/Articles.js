import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import article1 from './images/images-png-jpeg/article1.jpg';
import article2 from './images/images-png-jpeg/article2.jpg';
import article3 from './images/images-png-jpeg/article3.jpg';
import article4 from './images/images-png-jpeg/article4.jpg';
import article5 from './images/images-png-jpeg/article5.jpg';
import './ElasticCarousel.css';

function Articles() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 992, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    const txtStyle = {
        fontWeight: "700",
        fontSize: "14px",
        letterSpacing: "0.15px"
    }

    const imgStyle = {
        borderRadius: "8px 8px 0 0"
    }

    return (
        <>
        <div style={{background: "linear-gradient(180deg, #ef4281 50%, #f3f7fb 50%)"}}>
            <h4 className="head px-4 pt-3"
                style={{
                    color: "white"
                }}> Health Advice Articles
                <a href="/" className="view-link my-2" style={{ color: "white" }}> View All <i class="fas fa-xs fa-chevron-right ms-1"></i></a>
            </h4>

            <Carousel breakPoints={breakPoints} className='mt-4'>
                <Card className='car-card'>
                    <Card.Img fluid src={article1} style={imgStyle} />
                    <Card.Body>
                        <Card.Text style={txtStyle}>Cassia Auriculata: Incredible Health Benefits And..</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card'>
                    <Card.Img fluid src={article2} style={imgStyle} />
                    <Card.Body>
                        <Card.Text style={txtStyle}>Herbal Teas For Insomnia: Brew These Soothing Conc..</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card'>
                    <Card.Img fluid src={article3} style={imgStyle} />
                    <Card.Body>
                        <Card.Text style={txtStyle}>Essential Tremor: Causes, Symptoms And Treatment..</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card'>
                    <Card.Img fluid src={article4} style={imgStyle} />
                    <Card.Body>
                        <Card.Text style={txtStyle}>Ayurveda For Muscle Cramps: Proven Natural Remedie..</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='car-card'>
                    <Card.Img fluid src={article5} style={imgStyle} />
                    <Card.Body>
                        <Card.Text style={txtStyle}>Vasopressin/Antidiuretic Hormone: Structure, Cruci..</Card.Text>
                    </Card.Body>
                </Card>
            </Carousel>
        </div>
        </>
    )
}

export default Articles;
