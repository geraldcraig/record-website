// import React, { useEffect, useState } from "react";
// import { SERVER_URL } from "./constants";
// import Alert from "react-bootstrap/Alert";
// import Container from "react-bootstrap/Container";
// import Spinner from "react-bootstrap/Spinner";
// import Table from "react-bootstrap/Table";
// import Image from "react-bootstrap/Image";
//
// function AllUsers() {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [errorMessage, setErrorMessage] = useState("");
//
//     // Supports:
//     // 1) Plain array: [ {...}, {...} ]
//     // 2) HAL style: { _embedded: { albums: [ {...}, {...} ] } }
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
//     return (
//         <Container className="py-4">
//             <h2 className="mb-4">All Users</h2>
//
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
//             {!loading && !errorMessage && users.length > 0 && (
//                 <Table striped bordered hover responsive className="align-middle">
//                     <thead>
//                     <tr>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Username</th>
//                         <th>Password</th>
//                         {/*<th>Genre</th>*/}
//                         {/*<th>Subgenre</th>*/}
//                         <th>Admin</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {users.map((user) => {
//                         const id = user.id ?? user.number ?? "";
//                         const username = user.albumYear ?? user.year ?? "";
//                         const image = user.image ?? user.artwork ?? "";
//
//                         return (
//                             <tr key={id || `${user.firstName}-${user.lastName}`}>
//                                 <td>{id || "N/A"}</td>
//                                 <td>{user.title ?? "Untitled"}</td>
//                                 <td>{user.artist ?? "Unknown artist"}</td>
//                                 <td>{username || "N/A"}</td>
//                                 {/*<td>{album.genre ?? "N/A"}</td>*/}
//                                 {/*<td>{album.subgenre ?? "N/A"}</td>*/}
//                                 <td style={{ width: "150px" }}>
//                                     {image ? (
//                                         <Image
//                                             src={image}
//                                             alt={`${user.title ?? "Album"} cover`}
//                                             thumbnail
//                                             style={{ width: "150px", objectFit: "cover" }}
//                                         />
//                                     ) : (
//                                         <span className="text-muted">N/A</span>
//                                     )}
//                                 </td>
//                             </tr>
//                         );
//                     })}
//                     </tbody>
//                 </Table>
//             )}
//         </Container>
//     );
// }
//
// export default AllUsers;

import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./constants";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

function AllUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const extractUsers = (responseData) => {
        // Plain array: [ {...}, {...} ]
        if (Array.isArray(responseData)) return responseData;

        // HAL/common wrapped formats
        if (Array.isArray(responseData?._embedded?.users)) return responseData._embedded.users;
        if (Array.isArray(responseData?._embedded?.userList)) return responseData._embedded.userList;

        // Paginated/content formats
        if (Array.isArray(responseData?.content)) return responseData.content;
        if (Array.isArray(responseData?.data)) return responseData.data;

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
                const parsedUsers = extractUsers(responseData);
                console.log(responseData)
                setUsers(parsedUsers);
            } catch (err) {
                console.error("Failed to load users:", err);
                setErrorMessage(err.message || "Failed to load users.");
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

    return (
        <Container className="py-4">
            <h2 className="mb-4">All Users</h2>

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
                        const id = user?.id ?? "";
                        const firstName = user?.firstName ?? user?.firstname ?? "";
                        const lastName = user?.lastName ?? user?.lastname ?? "";
                        const userName = user?.userName ?? user?.username ?? "";
                        const userPassword = user?.userPassword ?? user?.userpassword ?? "";
                        const admin = user?.admin ?? false;

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

export default AllUsers;

