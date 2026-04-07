import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router";
import AlbumList from "./components/AlbumList";
import TopTen from "./components/TopTen";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Search from "./components/Search";
import Account from "./components/Account";
import AlbumPlays from "./components/AlbumPlays";
import OwnedAlbums from "./components/OwnedAlbums";
import AdminLogin from "./components/AdminLogin";
import Album from "./components/Album";
import NewAlbum from "./components/NewAlbum";
import AdminAccount from "./components/AdminAccount";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Albums from "./components/Albums";
import Navbar from "./components/AppNavbar";
import AppNavbar from "./components/AppNavbar";
import AllAlbumsClass from "./components/AllAlbumsClass";
import AllAlbumsFunctional from "./components/AllAlbumsFunctional";
import AllAlbums from "./components/AllAlbums";
import OldHeader from "./components/OldHeader";
import Header from "./components/Header";
import EditAccounts from "./components/EditAccounts";
import AllUsers from "./components/AllUsers";
import AdminEditAccounts from "./components/AdminEditAccounts";
import AlbumInfo from "./components/AlbumInfo";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/albumplays" element={<AlbumPlays/>}/>
                <Route path="/ownedalbums" element={<OwnedAlbums/>}/>
                <Route path="/adminlogin" element={<AdminLogin/>}/>
                <Route path="/album" element={<Album/>}/>
                <Route path="/newalbum" element={<NewAlbum/>}/>
                <Route path="/adminaccount" element={<AdminAccount/>}/>
                <Route path="/editaccounts" element={<EditAccounts/>}/>
                <Route path="/topten" element={<TopTen/>}/>
                <Route path="/allusers" element={<AllUsers/>}/>
                <Route path="/admineditaccounts" element={<AdminEditAccounts/>}/>
                <Route path="/albumlist" element={<AlbumList/>}/>
                <Route path="/albumlist/:albumId" element={<AlbumInfo/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
