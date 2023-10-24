const Header = () => {
    const title = <a href='/'><h1 id="title">YumRush</h1></a>;
    const search = (
        <form role="search">
            <label>Search for stuff</label>
            <input id="search" type="search" placeholder="Search..." required />
            <button type="submit">Go</button>
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