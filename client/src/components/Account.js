import {NavLink} from "react-router";
import {useEffect, useState} from "react";

function Account() {
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
            <div className="container mt-3">
                <h1>Account</h1>
                <table className="table table-secondary table striped">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Update Account</th>
                        <th>Delete Account</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.userName}</td>
                            <td>{user.userPassword}</td>
                        <td><NavLink to='/updateuser' className='btn btn-info' role='button'>Update</NavLink></td>
                        <td><NavLink to='/deleteuseraccount' className='btn btn-info' role='button'>Delete</NavLink>
                        </td>
                    </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Account;