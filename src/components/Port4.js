import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Port4(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/Port2.png" />
                <Card.Body>
                    <Card.Title>Password Generator</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" href="https://chelsea-marie.github.io/Password-Generator/" target="_blank">Check it out</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Port4;