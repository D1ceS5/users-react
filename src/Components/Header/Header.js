
import "./Header.scss"
import {Link} from "react-router-dom";
function Header() {

    return (
        <div className='header'>
            <Link className='logo' to="/users" >USERS</Link>
        </div>
    );
}

export default Header;
