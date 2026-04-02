import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./constants";

function AllAlbumsFunctional() {
    const [albums, setAlbums] = useState([]);

    // Supports:
    // 1) Plain array: [ {...}, {...} ]
    // 2) HAL style: { _embedded: { albums: [ {...}, {...} ] } }
    const extractAlbums = (responseData) => {
        if (Array.isArray(responseData)) return responseData;
        if (Array.isArray(responseData?._embedded?.albums)) return responseData._embedded.albums;
        return [];
    };

    useEffect(() => {
        fetch(SERVER_URL + "api/albums")
            .then((response) => response.json())
            .then((responseData) => {
                setAlbums(extractAlbums(responseData));
            })
            .catch((err) => console.error(err));
    }, []);

    const tableRows = albums.map((album) => {
        const id = album.id ?? album.number ?? "";
        const year = album.albumYear ?? album.year ?? "";
        const image = album.image ?? album.artwork ?? "";

        return (
            <tr key={id || `${album.title}-${album.artist}`}>
                <td>{id}</td>
                <td>{album.title ?? ""}</td>
                <td>{album.artist ?? ""}</td>
                <td>{year}</td>
                <td>{image}</td>
            </tr>
        );
    });

    return (
        <div className="App">
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Year</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
        </div>
    );
}

export default AllAlbumsFunctional;
