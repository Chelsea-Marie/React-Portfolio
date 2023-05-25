import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({setCurrentPage}) {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Chelsea Pederson</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#" onClick={() => {setCurrentPage("About")}}>About Me</Nav.Link>
                        <Nav.Link href="#" onClick={() => {setCurrentPage("Portfolio")}}>My Portfolio</Nav.Link>
                        <Nav.Link href="#" onClick={() => {setCurrentPage("Contact")}}>Contact Me</Nav.Link>
                        <Nav.Link href="#" onClick={() => {setCurrentPage("Resume")}}>Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;