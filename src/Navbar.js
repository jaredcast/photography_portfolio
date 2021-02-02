import {Link, NavLink} from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Jared's Photo Portfolio</h1>
            <div className="links">
                {/* Router links match against a route. */}
                <Link to="/"> Home</Link>
                <Link to="/london">London</Link> 
                <Link to="/amsterdam">Amsterdam</Link>
                {/* Outer braces = dynamic value.
                Inner braces = javascript object. */}
            </div>
        </nav>
    );
}
 //sfc
export default Navbar;