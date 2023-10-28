import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {
    // const [auth, setAuth] = useState();
    const title = <Link href='/'><h1 id="title">YumRush</h1></Link>;

    return (
        <div className='header'>
            {title}
            <nav className='nav-items'>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/cart">Cart</Link></li>         
                </ul>   
            </nav>    
        </div>
    )
};
export default Header; 
