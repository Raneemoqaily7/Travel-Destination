import "./Header.css"
import {Link} from 'react-router-dom'
function Header(props){
    return (
        <nav>
       <Link to ='/'>Home </Link>
       <Link to='/tours'>Tours</Link>
         <h1 className="App-header"> Travel Destination </h1>
        </nav>

    );
}
export default Header;
