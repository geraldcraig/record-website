import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import Image from "react-bootstrap/esm/Image";

export default function AlbumInfo() {
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
                                    <div key={album.id} style={{ display: "flex"}}>
                                        <div style={{ flex: 1 }}>
                                        <h1>Title: {album.title}</h1>
                                        <h1>Artist: {album.artist}</h1>
                                        <h1>Genre: {album.genre}</h1>
                                            <h1>Sub-Genre: {album.subgenre}</h1><br></br>
                                            <div>
                                                <h1>Album and Artist Info</h1>
                                                <p>Praesent sed quam libero. Suspendisse turpis turpis, suscipit a nunc at, egestas volutpat diam. Phasellus molestie ut ipsum et pulvinar. Nullam et porta metus. Integer ultricies ut erat et dictum. Quisque tincidunt tincidunt mauris, in iaculis nisi sollicitudin et. Integer a fringilla risus. Maecenas nec luctus dolor, convallis mollis lacus. Etiam laoreet, metus sed venenatis laoreet, turpis quam ornare massa, et ullamcorper turpis sapien at ante.</p>
                                            </div><br></br>
                                            <div>
                                                <h1>Rating and Reviews</h1>
                                                <p>Mauris sit amet dignissim nisi, vitae egestas mauris. Suspendisse vitae felis erat. Quisque interdum ligula ac arcu maximus hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse faucibus turpis at erat pulvinar condimentum. Maecenas ornare nec nulla at vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                            </div>
                                        </div>

                                        <div className="col m4">
                                            <div style={{
                                               flex: 1,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}>
                                                <p><Image src={album.image} className='img-thumbnail'/></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}