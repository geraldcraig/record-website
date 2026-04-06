import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";

function Header() {
    const [account, setAccount] = useState(false);
    const [admin, setAdmin] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const syncAuthFromStorage = () => {
        const raw = localStorage.getItem("currentUser");

        if (!raw) {
            setAccount(false);
            setAdmin(false);
            return;
        }

        try {
            const user = JSON.parse(raw);
            const isAdmin = Boolean(user?.admin);

            setAdmin(isAdmin);
            setAccount(!isAdmin); // regular logged-in user
        } catch (error) {
            console.error("Invalid currentUser in localStorage:", error);
            localStorage.removeItem("currentUser");
            setAccount(false);
            setAdmin(false);
        }
    };

    useEffect(() => {
        // Re-check auth state whenever route changes (e.g. after login navigation)
        syncAuthFromStorage();
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        setAccount(false);
        setAdmin(false);
        navigate("/login");
    };

    const handleAdminLogout = () => {
        localStorage.removeItem("currentUser");
        setAccount(false);
        setAdmin(false);
        navigate("/adminlogin");
    };

    return (
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    Record Website
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/albumlist">
                                Top 500 Albums
                            </NavLink>
                        </li>

                        {!account && !admin && (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        Log In
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">
                                        Register
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/adminlogin">
                                        Admin Log In
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {account && (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/account">
                                        Account
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/albumplays">
                                        Album Plays
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/ownedalbums">
                                        Owned Albums
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="nav-link btn btn-link p-0" onClick={handleLogout}>
                                        Log Out
                                    </button>
                                </li>
                            </>
                        )}

                        {admin && (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/adminaccount">
                                        Admin Account
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/admineditaccounts">
                                        Edit Accounts
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/newalbum">
                                        Add New Album
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="nav-link btn btn-link p-0" onClick={handleAdminLogout}>
                                        Admin Log Out
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>

                    <form className="d-flex" action="/search" method="get">
                        <input
                            className="form-control me-2"
                            type="text"
                            name="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-primary" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;
