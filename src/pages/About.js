import React from 'react';
import Card from 'react-bootstrap/Card';

function About(props) {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="https://scontent-msp1-1.xx.fbcdn.net/v/t1.18169-9/17021427_10102035333544052_5531063681637756473_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=LY6SOeGkc5gAX-hLSbs&_nc_ht=scontent-msp1-1.xx&oh=00_AfC8H1n5m3RLkRHNPx9a2_tnAlDAmYyhRqTHN-h6emPGiA&oe=64951750" />
                <Card.Body>
                    <Card.Text>
                        Hello! My name is Chelsea Pederson and I have just completed a full-stack coding course and am excited to start working in the field! Please check out my work and contact me with any questions.
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
}

export default About;