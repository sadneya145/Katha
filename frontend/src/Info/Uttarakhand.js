import React from 'react';
import { Container, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import "./Uttarakhand.css"

const UttarakhandInfo = () => {
    return (
        <Container className="mt-5 uttarakhand-info-container">
            <Card className="shadow-lg border-0 rounded">
                <CardBody>
                    <CardTitle tag="h2" className="text-center display-4 text-primary">Uttarakhand</CardTitle>
                    <CardText className="text-center lead">
                        Uttarakhand, also known as the "Land of the Gods" is a state located in the northern part of India. 
                        It is renowned for its breathtaking landscapes, spiritual sites and rich cultural heritage.
                    </CardText>

                    <Row className="mt-4">
                        <Col md="4" className="image-text-align">
                            <img src="https://vistaramagazine.com/wp-content/uploads/2021/06/feature8.jpg" alt="Dehradun" className="img-fluid rounded shadow"/>
                            <CardText className="mt-2 text-center"><strong>Dehradun</strong> - The capital city, known for its scenic surroundings and prestigious educational institutions.</CardText>
                        </Col>
                        <Col md="4" className="image-text-align">
                            <img src="https://www.naturetravelagency.com/uploads/1711105196best%20time%20to%20visit%20Nainita.jpg" alt="Nainital" className="img-fluid rounded shadow"/>
                            <CardText className="mt-2 text-center"><strong>Nainital</strong> - A picturesque hill station, famous for its lake and surrounding hills.</CardText>
                        </Col>
                        <Col md="4" className="image-text-align">
                            <img src="https://www.fabhotels.com/blog/wp-content/uploads/2023/01/Bhatta-Falls-Mussoorie.jpg" alt="Mussoorie" className="img-fluid rounded shadow" />
                            <CardText className="mt-2 text-center"><strong>Mussoorie</strong> - Known as the "Queen of the Hills," it offers stunning views and a cool climate.</CardText>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col md="4" className="image-text-align">
                            <img src="https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/06/16111548/Kedarnath.jpg" alt="Kedarnath" className="img-fluid rounded shadow" />
                            <CardText className="mt-2 text-center"><strong>Kedarnath</strong> - A sacred pilgrimage site and one of the Char Dhams, nestled in the Himalayas.</CardText>
                        </Col>
                        <Col md="4" className="image-text-align">
                            <img src="https://rishikeshdaytour.com/blog/wp-content/uploads/2019/03/Rishikesh-Uttarakhand-India.jpg" alt="Rishikesh" className="img-fluid rounded shadow" />
                            <CardText className="mt-2 text-center"><strong>Rishikesh</strong> - The Yoga Capital of the World, situated on the banks of the Ganges River.</CardText>
                        </Col>
                        <Col md="4" className="image-text-align">
                            <img src="https://hikerwolf.com/wp-content/uploads/2020/03/CORBETT-NATIONAL-PARK.jpg" alt="Jim Corbett National Park" className="img-fluid rounded shadow" />
                            <CardText className="mt-2 text-center"><strong>Jim Corbett National Park</strong> - India's oldest national park, famous for its Bengal tigers and diverse wildlife.</CardText>
                        </Col>
                    </Row>

                    <ListGroup className="mt-4">
                        <ListGroupItem className="bg-light"><strong>Capital:</strong> Dehradun (Winter), Gairsain (Summer)</ListGroupItem>
                        <ListGroupItem className="bg-light"><strong>Official Languages:</strong> Hindi, Sanskrit</ListGroupItem>
                        <ListGroupItem className="bg-light"><strong>Population:</strong> Approximately 10.1 million (as of 2021)</ListGroupItem>
                        <ListGroupItem className="bg-light"><strong>Area:</strong> 53,483 square kilometers</ListGroupItem>
                        <ListGroupItem className="bg-light"><strong>Founded:</strong> 9th November 2000</ListGroupItem>
                        <ListGroupItem className="bg-light"><strong>Famous for:</strong> Pilgrimage sites like Kedarnath, Badrinath, and Rishikesh; Natural beauty including the Himalayas, Nainital, Mussoorie, and Jim Corbett National Park.</ListGroupItem>
                    </ListGroup>

                    <Row className="mt-4">
                        <Col>
                            <CardText className="text-center font-italic text-secondary">
                                "Uttarakhand is a land of natural beauty and spirituality, where every traveler finds peace and adventure."
                            </CardText>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
};

export default UttarakhandInfo;