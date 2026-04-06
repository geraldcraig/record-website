import {useEffect, useState} from "react";
import {NavLink} from "react-router";

function AlbumPlays() {
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
                <h1>Album Plays</h1>
                <table className="table table-secondary table-striped">
                    <thead>
                    <tr>
                        <th>Album Number</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Year</th>
                        <th>Artwork</th>
                        <th>No. of Album Plays</th>
                        <th>Add Album Play</th>
                        <th>Delete Album Plays</th>
                        <th>Add To Owned Albums</th>
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
                            {/*<img src=$artwork class='img-thumbnail' style='width: 150px'>*/}
                        </NavLink></td>
                        <td>1</td>
                        <td><NavLink to='/albumplays' className='btn btn-info'
                                     role='button'>Add Play</NavLink></td>
                        <td><NavLink to='/deletealbumplays'
                                     className='btn btn-info' role='button'>Delete</NavLink></td>
                        <td><NavLink to='/ownedalbum' className='btn btn-info'
                                     role='button'>Add Owned</NavLink></td>
                    </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AlbumPlays;