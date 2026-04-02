import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useState} from "react";
import {Link, NavLink} from "react-router";

function OldHeader() {
    const [account, setAccount] = useState(false);
    const [admin, setAdmin] = useState(true);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" end>Record Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/list">Top 500 Albums</Nav.Link>
                        <NavDropdown title="Browse Artist" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/admin/users">
                                    Users
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/admin/reports">
                                    Reports
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={NavLink} to="/admin/settings">
                                    Settings
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                {/*<NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>*/}
                        </NavDropdown>
                        {!account && !admin && (
                            <>
                                <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </>
                        )}

                        {account && (
                            <>
                                <Nav.Link as={Link} to="account">Account</Nav.Link>
                                <Nav.Link as={Link} to="albumplays">Album Plays</Nav.Link>
                                <Nav.Link as={Link} to="ownedalbums">Owned Albums</Nav.Link>
                                <Nav.Link as={Link} to="logout">Log Out</Nav.Link>
                            </>
                        )}

                        {admin && (
                            <>
                                <Nav.Link as={Link} to="adminaccount">Admin</Nav.Link>
                                <Nav.Link as={Link} to="adminaccount">Admin Account</Nav.Link>
                                <Nav.Link as={Link} to="editaccounts">Edit Accounts</Nav.Link>
                                <Nav.Link as={Link} to="addnewalbum">Add New Album</Nav.Link>
                                <Nav.Link as={Link} to="adminlogout">Admin Log Out</Nav.Link>
                            </>
                        )}
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

export default OldHeader;