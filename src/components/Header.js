import { useState } from "react";


const Header = () => {
    const [auth, setAuth] = useState("Login");
    const title = <a href='/'><h1 id="title">YumRush</h1></a>;
    const signup = <a onClick={(e)=>{
        e.preventDefault(); 
        if(auth === "Login"){
            setAuth("Logout");
        }
        else{
            setAuth("Login");
        }
    }} href="">{auth}</a>

    return (
        <div className='header'>
            {title}
            <nav className='nav-items'>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li>{signup}</li>
                    <li><a href="/cart">Cart</a></li>         
                </ul>   
            </nav>    
        </div>
    )
};
export default Header; 
