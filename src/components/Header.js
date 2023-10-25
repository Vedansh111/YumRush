import { useState } from "react";
import resturantList from "../../config";


function filter(searchText, resturants) {
    resturants.filter((resturants) => {
        resturants.data.nameincludes(searchText);
    })
}



const Header = () => {
    const [searchText, setSearchText] = useState("");
    const [resturants, setResturants] = useState(resturantList);
    const title = <a href='/'><h1 id="title">YumRush</h1></a>;
    const search = (
        <form>
            <label>Search for stuff</label>
            <input id="search"
                type="search"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
                />
            <button onClick={() => {
                //filtering the data
                const data = filter(searchText, resturants);
                setResturants(data);
            }}>Go</button>
        </form>
    )

    return (
        <div className='header'>
            {title}
            {search}
            <nav className='nav-items'>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;   