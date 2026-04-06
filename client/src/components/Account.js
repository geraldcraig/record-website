import { NavLink, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Account() {
    const location = useLocation();
    const navigate = useNavigate();

    const [user, setUser] = useState(location.state?.user || null);

    useEffect(() => {
        // If user was not passed through navigation, try localStorage (refresh support).
        if (!user) {
            const storedUser = localStorage.getItem("currentUser");
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (err) {
                    console.error("Invalid currentUser in localStorage:", err);
                    localStorage.removeItem("currentUser");
                }
            }
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/login");
    };

    if (!user) {
        return (
            <div className="container mt-3">
                <Alert variant="warning" className="mb-3">
                    You are not authorized. Please log in first.
                </Alert>
                <Button onClick={() => navigate("/login")}>Go to Login</Button>
            </div>
        );
    }

    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="mb-0">Account</h1>
                <Button variant="outline-dark" onClick={handleLogout}>
                    Logout
                </Button>
            </div>

            <table className="table table-secondary table-striped">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Admin</th>
                    <th>Update Account</th>
                    <th>Delete Account</th>
                </tr>
                </thead>
                <tbody>
                <tr key={user.id}>
                    <td>{user.firstName || "N/A"}</td>
                    <td>{user.lastName || "N/A"}</td>
                    <td>{user.userName || "N/A"}</td>
                    <td>{user.userPassword || "N/A"}</td>
                    <td>{user.admin ? "Yes" : "No"}</td>
                    <td>
                        <NavLink to="/updateuser" className="btn btn-info" role="button">
                            Update
                        </NavLink>
                    </td>
                    <td>
                        <NavLink to="/deleteuseraccount" className="btn btn-danger" role="button">
                            Delete
                        </NavLink>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Account;
