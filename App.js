import React from 'react';
import ReactDOM from 'react-dom/client';
/*
    Header
     - Name(Home)
     - Search bar
     - About
     - Cart

    Body
     - Cards
        - Image
        - Name of resturant
        - Ratings

    Footer
     - Copyright
*/

const title = <a href='/'><h1 id="title">YumRush</h1></a>;
const search = (
    <form role="search">
        <label>Search for stuff</label>
        <input id="search" type="search" placeholder="Search..." required />
        <button type="submit">Go</button>
    </form>
)
const HeaderComponent = () => {
    return (
        <div className='header'>
            {title}
            {search}
            <nav className='nav-items'>
                <ul>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
    )
};

const BodyComponent = () => {
    return (
        <h4>Body</h4>
    )
}

const FooterComponent = () => {
    const date = new Date();
    return (
        <footer>
            <div className="footer">
                <p>© {date.getFullYear()} Vedansh Taraviya</p>
            </div>
        </footer>


    )
}

const AppLayout = () => {
    return (
        <>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);