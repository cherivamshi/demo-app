import React, { Component } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';


export default class PrimNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-5">
                        <Nav.Link href="#home" className="mr-2">Flights</Nav.Link>
                        <Nav.Link href="#features" className="mr-2">Trains</Nav.Link>
                        <Nav.Link href="#pricing" className="mr-2">Buses</Nav.Link>
                        <Nav.Link href="#pricing" className="mr-2">Money Transfer</Nav.Link>
                        <Nav.Link href="#pricing" className="active">Hotels</Nav.Link>
                    </Nav>
                    <Form inline>
                        <p className="text-light mr-3 pt-2">NET PRICE</p>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
