import './App.css';
import {
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Routes
} from "react-router";

import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import AlbumDetailPage from "./pages/AlbumDetail";
import AlbumsPage from "./pages/Albums";

// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/products" element={<ProductsPage />} />
//     </Route>
// )

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {path: '/', element: <HomePage/>},
            {path: '/albums', element: <AlbumsPage/>},
            { path: '/albums/:albumId', element: <AlbumDetailPage /> }
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
    // (
    //     <BrowserRouter>
    //         <Header/>
    //         <Routes>
    //             <Route path="/" element={<HomePage/>}/>
    //             <Route path="/login" element={<LogIn/>}/>
    //             <Route path="/register" element={<Register/>}/>
    //             <Route path="/search" element={<Search/>}/>
    //             <Route path="/account" element={<Account/>}/>
    //             <Route path="/albumplays" element={<AlbumPlays/>}/>
    //             <Route path="/ownedalbums" element={<OwnedAlbums/>}/>
    //             <Route path="/adminlogin" element={<AdminLogin/>}/>
    //             <Route path="/album" element={<Album/>}/>
    //             <Route path="/newalbum" element={<NewAlbum/>}/>
    //             <Route path="/adminaccount" element={<AdminAccount/>}/>
    //             <Route path="/editaccounts" element={<EditAccounts/>}/>
    //             <Route path="/topten" element={<TopTen/>}/>
    //             <Route path="/allusers" element={<AllUsers/>}/>
    //             <Route path="/admineditaccounts" element={<AdminEditAccounts/>}/>
    //             <Route path="/albumlist" element={<AlbumList/>}/>
    //             <Route path="/albumlist/:albumId" element={<AlbumInfo/>}/>
    //         </Routes>
    //     </BrowserRouter>
    // );
}

export default App;
