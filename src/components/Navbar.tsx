import '../App.css';


const Navbar = () => {
    
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                
                <a className="navbar-brand" href="#">MUSIC APP</a>

                <ul className="navbar-nav d-flex flex-row navbar-items">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Collections</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Albums</a>
                    </li>
                </ul>
                
                <div className="d-flex">
                    <input
                        className="form-control me-2 search-box"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-primary">Search</button>
                </div>
            </nav>
            <br></br>
        </div>
    
    );
};

export default Navbar;
