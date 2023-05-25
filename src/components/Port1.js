import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Port1(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/port1.png" className="border border-2 border-black" />
                <Card.Body>
                    <Card.Title>Weather Dashboard</Card.Title>
                    <Card.Text>
                    This application allows visitors to search for both current weather conditions and the 5 day forecast for any city. 
                    </Card.Text>
                    <Button variant="primary" href="https://chelsea-marie.github.io/Weather-Dashboard/" target="_blank">Check it out</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Port1;