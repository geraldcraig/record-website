import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import Image from "react-bootstrap/esm/Image";

export default function Album() {
    const [albums, setAlbums] = useState([]);
    const {albumId} = useParams();
    const navigate = useNavigate();

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
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col m8">
                        <h1>Album Info</h1>
                        <div>
                            {albums.filter((album) => album.id === parseInt(albumId))
                                .map((album) => (
                                    <div key={album.id}>
                                        <h1>Title: {album.title}</h1>
                                        <h1>Artist: {album.artist}</h1>
                                        <h1>Genre: {album.genre}</h1>
                                        <h1>Sub-Genre: {album.subgenre}</h1>
                                        <div className="col m4">
                                            <p>
                                                {/*<img src='$artwork'>*/}
                                                <Image src={album.image} className='img-thumbnail' />
                                            </p>
                                        </div>
                                    </div>

                                ))}
                        </div>
                    </div>
                </div>

                <div>
                    <h1>Album and Artist Info</h1>
                </div>

                <div>
                    <h1>Rating and Reviews</h1>
                </div>
            </div>
        </>
    );
}