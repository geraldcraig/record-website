import {useEffect, useState} from "react";
import {NavLink} from "react-router";

function AdminEditAccounts() {
    const [users, setUsers] = useState([]);

    const baseURL = "http://localhost:8081";

    useEffect(() => {
        fetch(`${baseURL}/api/users`)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => console.error("Error:", error))
    }, []);

    return (
        <>
            <div className="container">
                <h1>Edit Accounts</h1>
                <table className="table table-secondary table-striped">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Delete account</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.userName}</td>
                            <td>{user.userPassword}</td>
                            <td><NavLink to='#' className='btn btn-info' role='button'>Delete</NavLink></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default AdminEditAccounts;