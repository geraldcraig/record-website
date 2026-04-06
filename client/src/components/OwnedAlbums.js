import {useEffect, useState} from "react";
import {NavLink} from "react-router";

function OwnedAlbums() {
    const [albums, setAlbums] = useState([]);

    const baseURL = "http://localhost:8080";

    useEffect(() => {
        fetch(`${baseURL}/api/albums`)
            .then((response) => response.json())
            .then((data) => {
                setAlbums(data);
            })
            .catch((error) => console.error("Error:", error))
    }, []);

    return (
        <>
            <div className="container mt-3">
                <h1>Owned Albums</h1>
                <table className="table table-secondary table-striped">
                    <thead>
                    <tr>
                        <th>Album Number</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Year</th>
                        <th>Artwork</th>
                        <th>Delete Owned Album</th>
                        <th>Add Album Play</th>
                    </tr>
                    </thead>
                    <tbody>
                    {albums.map((album) => (
                        <tr key={album.id}>
                            <td>{album.id}</td>
                            <td>{album.title}</td>
                            <td>{album.artist}</td>
                            <td>{album.albumYear}</td>
                            <td><NavLink to='/album'>
                                {/*<img src=$artwork className='img-thumbnail' style='width: 150px'/>*/}
                            </NavLink></td>
                            <td><NavLink to='/deleteownedalbum'
                                         className='btn btn-info' role='button'>Delete</NavLink></td>
                            <td><NavLink to='albumplays'
                                         className='btn btn-info' role='button'>Add Play</NavLink></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default OwnedAlbums;