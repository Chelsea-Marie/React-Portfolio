import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Port3(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/Port3.png" className="border border-2 border-black mt-2" />
                <Card.Body>
                    <br />
                    <Card.Title>Movies & Mixers</Card.Title>
                    <Card.Text>
                        Adults over the age of 21 can use this application to get a recommendation for movies and cocktails!
                    </Card.Text>
                    <Button variant="primary" href="https://ramesh1441.github.io/Movies-And-Mixers/" target="_blank">Check it out</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Port3;