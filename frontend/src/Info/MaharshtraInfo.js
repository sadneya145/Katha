import React from 'react';
import { Container, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import './MaharashtraInfo.css'

const MaharashtraInfo = () => {
    return (
        <Container className="mt-5 maharashtra-info-container">
            <Card className="shadow-lg border-0 rounded">
                <CardBody>
                    <CardTitle tag="h2" className="text-center display-4 text-primary">Maharashtra</CardTitle>
                    <CardText className="text-center lead">
                    Maharashtra, a state in the western part of India, is known for its vibrant culture, bustling cities, and diverse landscapes.
                    It is home to Mumbai, the financial capital of India, and boasts a rich history and cultural heritage.
                    </CardText>

                    <Row className="mt-4">
                        <Col md="4" className="image-text-align">
                            <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Chhatrapati-Shivaji-Terminus-railway-station-mumbai.jpg" alt="Mumbai" className="img-fluid rounded shadow" />
                            <CardText className="mt-2 text-center"><strong>Mumbai</strong> - The financial capital of India, known for its bustling streets and landmarks like the Gateway of India.</CardText>
                        </Col>
                        <Col md="4" className="image-text-align">
                            <img src="https://facts.net/wp-content/uploads/2023/07/43-facts-about-nagpur-1688181848.jpg" alt="Nagpur" className="img-fluid rounded shadow" />
                            <CardText className="mt-2 text-center"><strong>Nagpur</strong> - Known as the "Orange City" for its trade in oranges, Nagpur is a major commercial and political center in Maharashtra, rich in history and culture.</CardText>
                        </Col>
                        <Col md="4" className="image-text-align">
                            <img src="https://www.tadobajunglecamp.com/images/slider-2.jpg" alt="Tadoba National Park" className="img-fluid rounded shadow" />
                            <CardText className="mt-2 text-center"><strong>Tadoba National Park</strong> -A popular wildlife sanctuary known for its Bengal tigers and rich biodiversity.</CardText>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col md="4" className="image-text-align">
                            <img src="https://t4.ftcdn.net/jpg/02/87/42/67/360_F_287426729_qbmatCI3Tc8XIQ5hjUJriYZOZlVUOnb4.jpg" alt="Pune" className="img-fluid rounded shadow" />
                            <CardText className="mt-2 text-center"><strong>Pune</strong> - A major cultural and educational hub in Maharashtra, known for its historic landmarks, vibrant student population, and pleasant climate.</CardText>
                        </Col>
                        <Col md="4" className="image-text-align">
                            <img src="https://agreenhotels.in/wp-content/uploads/2019/03/Magic-Monday-Offers.jpg" alt="Kaas Plateau" className="img-fluid rounded shadow" />
                            <CardText className="mt-2 text-center"><strong>Kaas Plateau</strong> - Known as the "Valley of Flowers," it's a UNESCO World Heritage Site with a unique biodiversity.</CardText>
                        </Col>
                        <Col md="4" className="image-text-align">
                            <img src="https://static.cozycozy.com/images/catalog/bg/lonavala.jpg" alt="Lonavla" className="img-fluid rounded shadow" />
                            <CardText className="mt-2 text-center"><strong>Lonavla</strong> - A popular hill station known for its scenic beauty and pleasant weather.</CardText>
                        </Col>
                    </Row>

                    <ListGroup className="mt-4">
                        <ListGroupItem className="bg-light"><strong>Capital:</strong> Mumbai</ListGroupItem>
                        <ListGroupItem className="bg-light"><strong>Official Languages:</strong> Marathi</ListGroupItem>
                        <ListGroupItem className="bg-light"><strong>Population:</strong> Approximately 114 million (as of 2021)</ListGroupItem>
                        <ListGroupItem className="bg-light"><strong>Area:</strong> 307,713 square kilometers</ListGroupItem>
                        <ListGroupItem className="bg-light"><strong>Founded:</strong> 1st May 1960</ListGroupItem>
                        <ListGroupItem className="bg-light"><strong>Famous for:</strong> Bollywood film industry, historical sites like Ajanta and Ellora Caves, and natural beauty including hill stations and national parks.</ListGroupItem>
                    </ListGroup>


                    <Row className="mt-4">
                        <Col>
                            <CardText className="text-center font-italic text-secondary">
                            "Maharashtra is a land of diverse cultures, rich history, and natural beauty, offering something for everyone."
                            </CardText>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
};

export default MaharashtraInfo;