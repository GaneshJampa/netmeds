import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import notfound from './images/images-png-jpeg/404.png'

const NotFound = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className='my-3' lg="12">
                        <div style={{ textAlign: "center" }}>
                            <Image src={notfound} alt='' />
                            <h5 className="my-2">It looks like you are lost</h5>
                            <Link style={{ textDecoration: "none" }} to="/">
                            <Button className='add-btn'
                            style={{ width: "250px" }}>GO TO HOME</Button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default NotFound;
