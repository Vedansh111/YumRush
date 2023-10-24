import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

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


// App Layout----------
const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

// Rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);