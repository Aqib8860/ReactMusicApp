import '../App.css';
import Search from './Search';


const Navbar = ({setsearchValue}: {setsearchValue: (value:string) => void}) =>  {
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
                
                <Search setsearchValue={setsearchValue}/>
            </nav>
            <br></br>
        </div>
    
    );
};

export default Navbar;
