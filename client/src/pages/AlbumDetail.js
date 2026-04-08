import {Link, useParams} from "react-router";

function AlbumDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>Album Details!</h1>
            <p>{params.albumId}</p>
            <p><Link to=".." relative='path'>Back</Link></p>
        </>
    );
}

export default AlbumDetailPage;