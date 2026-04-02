import Image from 'react-bootstrap/Image';
import {useEffect, useState} from "react";
import {NavLink} from "react-router";

function AlbumList() {
    const [account, setAccount] = useState(false);
    const [admin, setAdmin] = useState(true);
    const [albums, setAlbums] = useState([]);

    const baseURL = "http://localhost:8081";

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
                <h1>Top 500 Albums</h1>
                <table className="table table-secondary table-striped">
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Year</th>
                        <th>Artwork</th>
                    </tr>
                    </thead>

                    <tbody>
                    {albums.map((album) => (
                        <tr key={album.id}>
                        <td>{album.id}</td>
                        <td>{album.title}</td>
                        <td>{album.artist}</td>
                        <td>{album.albumYear}</td>
                        <td><NavLink to={`/albumlist/${album.id}`}>
                            <Image src={album.image} className='img-thumbnail' style={{ width: "150px" }}/>
                        </NavLink>
                        </td>
                    </tr>
                        ))}
                    </tbody>

                    {/*<tbody>*/}
                    {/*<tr>*/}
                    {/*    <td>$number</td>*/}
                    {/*    <td>$album</td>*/}
                    {/*    <td>$artist</td>*/}
                    {/*    <td>$year</td>*/}
                    {/*    /!*<td><a href='/albumid'>*!/*/}
                    {/*    /!*    <Image src=$artwork className='img-thumbnail' style='width: 150px'/>*!/*/}
                    {/*    /!*</a></td>*!/*/}
                    {/*    <td><a href='albumplays.php?album_id=$albumid&user_name=$currentuser' className='btn btn-info'*/}
                    {/*           role='button'>Add Play</a></td>*/}
                    {/*    <td><a href='ownedalbum.php?album_id=$albumid&user_name=$currentuser' className='btn btn-info'*/}
                    {/*           role='button'>Add Owned</a></td>*/}
                    {/*</tr>*/}
                    {/*</tbody>*/}
                </table>
            </div>
        </>
    );
}

export default AlbumList;