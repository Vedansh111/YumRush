import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {
    // const [auth, setAuth] = useState();
    const title = <Link href='/'><h1 className="text-red-200 p-2">YumRush</h1></Link>;

    return (
        <div className='flex justify-around bg-stone-400'>
            {title}
            <nav className='flex justify-evenly'>
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
