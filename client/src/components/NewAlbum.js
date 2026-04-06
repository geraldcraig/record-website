import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import {useState} from "react";
import {useNavigate} from "react-router";

function NewAlbum() {
    const initialFormState = {
        id: null,
        title: "",
        artist: "",
        genre: "",
        subgenre: "",
        albumYear: "",
        image: "",
    };
    const [album, setAlbum] = useState(initialFormState);
    const [validated, setValidated] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const baseURL = "http://localhost:8080";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setShowModal(true);
        } else {
            fetch(`${baseURL}/api/albums`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"},
                body: JSON.stringify(album),
                    }).then((response) => {
                if (response.ok) {
                    navigate("/allalbums")
                }
            });
        }
        setValidated(true);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAlbum({ ...album, [name]: value});
    };

    return (
        <>
            <div className="container mt-3 bg-secondary">
                <h2>Add New Album</h2>
                <Form validated={validated} onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Number
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="number" value={album.id} onChange={handleChange} placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="title" value={album.title} onChange={handleChange} placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Artist
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="artist" value={album.artist} onChange={handleChange} placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Genre
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="genre" value={album.genre} onChange={handleChange} placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Subgenre
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="subgenre" value={album.subgenre} onChange={handleChange} placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Year
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="albumYear" value={album.albumYear} onChange={handleChange} placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Image
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="image" value={album.image} onChange={handleChange} placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}

export default NewAlbum;