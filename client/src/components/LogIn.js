import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { useNavigate } from "react-router";

function LogIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const extractUsers = (responseData) => {
        if (Array.isArray(responseData)) return responseData;
        if (Array.isArray(responseData?._embedded?.users)) return responseData._embedded.users;
        if (Array.isArray(responseData?._embedded?.userList)) return responseData._embedded.userList;
        if (Array.isArray(responseData?.content)) return responseData.content;
        if (Array.isArray(responseData?.data)) return responseData.data;
        return [];
    };

    const signIn = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setIsSubmitting(true);

        try {
            // Since /api/login does not exist yet, validate against users endpoint.
            const response = await fetch("http://localhost:8080/api/users");
            if (!response.ok) {
                throw new Error(`Failed to load users: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            const users = extractUsers(data);

            const matchedUser = users.find(
                (u) => u?.userName === username && u?.userPassword === password
            );

            if (!matchedUser) {
                setErrorMessage("Invalid username or password.");
                return;
            }

            // Store logged-in user for Account page refresh support.
            localStorage.setItem("currentUser", JSON.stringify(matchedUser));

            // Navigate to account and pass user in router state too.
            navigate("/account", { state: { user: matchedUser } });
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage(error.message || "Login failed.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mt-3 bg-secondary p-3 rounded">
            <h2 className="mb-3">Login</h2>

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form onSubmit={signIn}>
                <Form.Group as={Row} className="mb-3" controlId="formUsername">
                    <Form.Label column sm="2">
                        Username
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Signing in..." : "Sign in"}
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}

export default LogIn;
