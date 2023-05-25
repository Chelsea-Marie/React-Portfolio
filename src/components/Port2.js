import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Port2(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/port2.png" className="border border-2 border-black" />
                <Card.Body>
                    <Card.Title>Coding Quiz</Card.Title>
                    <Card.Text>
                        Test your knowledge! You have 60 seconds to answer as many correct as you can, but every time you get one wrong, you lose 10 seconds!
                    </Card.Text>
                    <Button variant="primary" href="https://chelsea-marie.github.io/Coding-Quiz/" target="_blank">Check it out</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Port2;