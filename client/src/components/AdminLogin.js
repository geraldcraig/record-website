import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

function AdminLogin() {
    return (
        <>
            <div className="container mt-3 bg-secondary">
                <h1>Admin Login</h1>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Image
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Image
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{span: 10, offset: 2}}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </div>
        </>
    );
}

export default AdminLogin;