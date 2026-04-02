function AdminHeader() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Admin Account</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/allalbums">Edit Accounts</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/login'>Add New Album</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/register'>Admin Log Out</a>
                            </li>
                        </ul>
                        <form className="d-flex" action="/search" method="get">
                            <input className="form-control me-2" type="text" name="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default AdminHeader;