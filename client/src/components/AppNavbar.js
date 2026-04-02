import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AppNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">Record Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="list">Top 500 Albums</Nav.Link>
                        <NavDropdown title="Browse Artist" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="account">Account</Nav.Link>
                        <Nav.Link href="albumplays">Album Plays</Nav.Link>
                        <Nav.Link href="ownedalbums">Owned Albums</Nav.Link>
                        <Nav.Link href="logout">Log Out</Nav.Link>
                        <Nav.Link href="login">Log In</Nav.Link>
                        <Nav.Link href="register">Register</Nav.Link>
                        <Nav.Link href="adminaccount">Admin</Nav.Link>
                        <Nav.Link href="adminaccount">Admin Account</Nav.Link>
                        <Nav.Link href="editaccounts">Edit Accounts</Nav.Link>
                        <Nav.Link href="addnewalbum">Add New Album</Nav.Link>
                        <Nav.Link href="adminlogout">Admin Log Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;