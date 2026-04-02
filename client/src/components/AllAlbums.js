import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./constants";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

function AllAlbums() {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    // Supports:
    // 1) Plain array: [ {...}, {...} ]
    // 2) HAL style: { _embedded: { albums: [ {...}, {...} ] } }
    const extractAlbums = (responseData) => {
        if (Array.isArray(responseData)) return responseData;
        if (Array.isArray(responseData?._embedded?.albums)) {
            return responseData._embedded.albums;
        }
        return [];
    };

    useEffect(() => {
        fetch(SERVER_URL + "api/albums")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then((responseData) => {
                setAlbums(extractAlbums(responseData));
            })
            .catch((err) => {
                console.error(err);
                setErrorMessage(err.message || "Failed to load albums.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <Container className="py-4">
            <h2 className="mb-4">All Albums</h2>

            {loading && (
                <div className="d-flex align-items-center gap-2">
                    <Spinner animation="border" size="sm" />
                    <span>Loading albums...</span>
                </div>
            )}

            {!loading && errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            {!loading && !errorMessage && albums.length === 0 && (
                <Alert variant="warning">No albums were returned by the API.</Alert>
            )}

            {!loading && !errorMessage && albums.length > 0 && (
                <Table striped bordered hover responsive className="align-middle">
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Year</th>
                        {/*<th>Genre</th>*/}
                        {/*<th>Subgenre</th>*/}
                        <th>Artwork</th>
                    </tr>
                    </thead>
                    <tbody>
                    {albums.map((album) => {
                        const id = album.id ?? album.number ?? "";
                        const year = album.albumYear ?? album.year ?? "";
                        const image = album.image ?? album.artwork ?? "";

                        return (
                            <tr key={id || `${album.title}-${album.artist}`}>
                                <td>{id || "N/A"}</td>
                                <td>{album.title ?? "Untitled"}</td>
                                <td>{album.artist ?? "Unknown artist"}</td>
                                <td>{year || "N/A"}</td>
                                {/*<td>{album.genre ?? "N/A"}</td>*/}
                                {/*<td>{album.subgenre ?? "N/A"}</td>*/}
                                <td style={{ width: "150px" }}>
                                    {image ? (
                                        <Image
                                            src={image}
                                            alt={`${album.title ?? "Album"} cover`}
                                            thumbnail
                                            style={{ width: "150px", objectFit: "cover" }}
                                        />
                                    ) : (
                                        <span className="text-muted">N/A</span>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            )}
        </Container>
    );
}

export default AllAlbums;
