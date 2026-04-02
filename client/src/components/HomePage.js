import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function HomePage() {
    // Static featured items so the homepage matches Allalbums card styling
    const featuredAlbums = [
        {
            id: 1,
            title: "Featured Album",
            artist: "Featured Artist",
            albumYear: 2026,
            genre: "Rock",
            subgenre: "Alt Rock",
            image: "",
        },
        {
            id: 2,
            title: "Top Pick",
            artist: "Various",
            albumYear: 2025,
            genre: "Hip-Hop",
            subgenre: "Conscious",
            image: "",
        },
        {
            id: 3,
            title: "Editor Choice",
            artist: "Unknown Artist",
            albumYear: 2024,
            genre: "Pop",
            subgenre: "Indie Pop",
            image: "",
        },
    ];

    return (
        <Container className="py-4">
            <h2 className="mb-2">Top 10 Most Listened To Albums</h2>
            <p className="text-muted mb-4">Top 10 Most Listened To Albums.</p>

            <Row xs={1} sm={2} lg={3} className="g-4">
                {featuredAlbums.map((album) => (
                    <Col key={album.id}>
                        <Card className="h-100 shadow-sm">
                            {album.image ? (
                                <Card.Img
                                    variant="top"
                                    src={album.image}
                                    alt={`${album.title} cover`}
                                    style={{ objectFit: "cover", height: "240px" }}
                                />
                            ) : null}

                            <Card.Body>
                                <Card.Title className="mb-1">{album.title}</Card.Title>
                                <Card.Subtitle className="text-muted mb-3">{album.artist}</Card.Subtitle>

                                <Card.Text className="mb-1">
                                    <strong>Year:</strong> {album.albumYear}
                                </Card.Text>
                                <Card.Text className="mb-1">
                                    <strong>Genre:</strong> {album.genre}
                                </Card.Text>
                                <Card.Text className="mb-3">
                                    <strong>Subgenre:</strong> {album.subgenre}
                                </Card.Text>

                                <Button variant="primary">View Album</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HomePage;
