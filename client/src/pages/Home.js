import {Link, useNavigate} from "react-router";

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/albums');
    }

    return (
        <>
            <h1>My Home Page</h1>
            <p>
                Go to <Link to="/albums">the list of albums</Link>.
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    );
}

export default HomePage;