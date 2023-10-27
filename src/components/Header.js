import { useState } from "react";
import { resturantlist } from "../../config";


const Header = () => {
    // const [searchText, setSearchText] = useState("");
    // const [res, setRes] = useState(resturantlist);
    const title = <a href='/'><h1 id="title">YumRush</h1></a>;
    const signup = <a href="https://wec.airpaygiving.com/signin">Login</a>
    // const search = (
    //     <form>
    //         <label>Search for stuff</label>
    //         <input id="search"
    //             type="search"
    //             placeholder="Search..."
    //             value={searchText}
    //             onChange={(e) => {
    //                 setSearchText(e.target.value);
    //             }}
    //         />
    //         <button onClick={(e) => {
    //             //filtering the data
    //             e.preventDefault();
    //             const data = filterdata(searchText, res);
    //             setRes(data); 
    //             console.log();  
    //         }}>Go</button>
    //     </form>
    // )
    return (
        <div className='header'>
            {title}
            {/* {search} */}
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
