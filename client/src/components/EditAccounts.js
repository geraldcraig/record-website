// import {NavLink} from "react-router";
// import React, {useEffect, useState} from "react";
// import { SERVER_URL } from "./constants";
// import Spinner from "react-bootstrap/esm/Spinner";
// import Alert from "react-bootstrap/esm/Alert";
//
// function EditAccounts() {
//     const [users, setUsers] = useState([])
//     const [loading, setLoading] = useState(true);
//     const [errorMessage, setErrorMessage] = useState("");
//
//     const extractUsers = (responseData) => {
//         if (Array.isArray(responseData)) return responseData;
//         if (Array.isArray(responseData?._embedded?.users)) {
//             return responseData._embedded.users;
//         }
//         return [];
//     };
//
//     useEffect(() => {
//         fetch(SERVER_URL + "api/users")
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`Request failed: ${response.status} ${response.statusText}`);
//                 }
//                 return response.json();
//             })
//             .then((responseData) => {
//                 setUsers(extractUsers(responseData));
//             })
//             .catch((err) => {
//                 console.error(err);
//                 setErrorMessage(err.message || "Failed to load users.");
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);
//
//     const updateUser = (id, updatedUser) => {
//         fetch(SERVER_URL + "api/users/{id}", {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(updatedUser)
//         }).then(() => {
//             setUsers(users.map(user => (user.id === id ? updatedUser : user)));
//         });
//     };
//
//     return (
//         <>
//             {loading && (
//                 <div className="d-flex align-items-center gap-2">
//                     <Spinner animation="border" size="sm" />
//                     <span>Loading users...</span>
//                 </div>
//             )}
//
//             {!loading && errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
//
//             {!loading && !errorMessage && users.length === 0 && (
//                 <Alert variant="warning">No users were returned by the API.</Alert>
//             )}
//
//             <div className="container">
//                 <h1>Edit Accounts</h1>
//                 <table className="table table-secondary table-striped">
//                     <thead>
//                     <tr>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Username</th>
//                         <th>Password</th>
//                         <th>Delete account</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {users.map((user) => {
//                         const id = user.id ?? user.number ?? "";
//                         const firstName = user.firstName ?? user.firstname ?? "";
//                         const lastName = user.lastName ?? user.lastname ?? "";
//                         const userName = user.userName ?? user.username ?? "";
//                         const userPassword = user.userPassword ?? user.userpassword ?? "";
//
//                         return (
//                             <tr key={id || `${user.firstName}-${user.lastName}`}>
//                                 <td>{id || "N/A"}</td>
//                                 <td>{firstName ?? "Untitled"}</td>
//                                 <td>{lastName ?? "Unknown artist"}</td>
//                                 <td>{userName || "N/A"}</td>
//                                 {/*<td><NavLink to={`/deleteaccount/${user.id}`} className='btn btn-info' role='button'>Delete</NavLink></td>*/}
//                             </tr>
//                         );
//                     })}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// }
//
// export default EditAccounts;

import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./constants";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

function EditAccounts() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const extractUsers = (responseData) => {
        // Supports plain array and common HAL variants.
        if (Array.isArray(responseData)) return responseData;
        if (Array.isArray(responseData?._embedded?.users)) return responseData._embedded.users;
        if (Array.isArray(responseData?.content)) return responseData.content;
        return [];
    };

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await fetch(`${SERVER_URL}api/users`);
                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
                }

                const responseData = await response.json();
                setUsers(extractUsers(responseData));
            } catch (err) {
                console.error(err);
                setErrorMessage(err.message || "Failed to load users.");
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

    return (
        <Container className="py-4">
            <h1 className="mb-3">Edit Accounts</h1>
            console.log(responseData)
            <pre>{JSON.stringify(users, null, 2)}</pre>

            {loading && (
                <div className="d-flex align-items-center gap-2">
                    <Spinner animation="border" size="sm" />
                    <span>Loading users...</span>
                </div>
            )}

            {!loading && errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            {!loading && !errorMessage && users.length === 0 && (
                <Alert variant="warning">No users were returned by the API.</Alert>
            )}

            {!loading && !errorMessage && users.length > 0 && (
                <Table striped bordered hover responsive className="align-middle">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Admin</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => {
                        const id = user.id ?? "";
                        const firstName = user.firstName ?? user.firstname ?? "";
                        const lastName = user.lastName ?? user.lastname ?? "";
                        const userName = user.userName ?? user.username ?? "";
                        const userPassword = user.userPassword ?? user.userpassword ?? "";
                        const admin = user.admin ?? false;

                        return (
                            <tr key={id || `${userName}-${index}`}>
                                <td>{id || "N/A"}</td>
                                <td>{firstName || "N/A"}</td>
                                <td>{lastName || "N/A"}</td>
                                <td>{userName || "N/A"}</td>
                                <td>{userPassword || "N/A"}</td>
                                <td>{admin ? "Yes" : "No"}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            )}
        </Container>
    );
}

export default EditAccounts;
