import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function LoginIn() {
    return (
        <>
            <div className="container mt-3 bg-secondary">
                <h1>Login</h1>
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

export default LoginIn;