import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import About from './components/About';
import Login from './components/Login';
import ResturantMenu from './components/ResturantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

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
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            
            // {
            //     path:'resturants/:id',
            //     element:<ResturantMenu/>
            // },
            
        ]
    },
    
]);

// Rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ appRouter } />);