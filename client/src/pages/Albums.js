import {Link} from "react-router";

const Albums = [
    { id: 'p1', title: 'Hunky Dory' },
    { id: 'p2', title: 'Blackstar' },
    { id: 'p3', title: 'Station to Station' },
];

function AlbumsPage() {
    return (
        <>
            <h1>The Albums Page</h1>
            <ul>
                {Albums.map((album) => (
                    <li key={album.id}>
                        <Link to={`/albums/${album.id}`}>{album.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AlbumsPage;