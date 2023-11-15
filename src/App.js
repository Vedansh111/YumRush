import React, { lazy, Suspense, useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import About from './components/About';
import Login from './components/Login';
import Profile from './components/Profile';
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import store from './utils/store';
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

const Cart = lazy(() => import('./components/CartComponent'));

// App Layout----------
const AppLayout = () => {
    const [user, setUser] = useState(
        userInfo = {
            name: 'user',
            email: 'user@example.com'
        }
    )


    return (
        <>
            <Provider store = {store}>
                <Header />
                <Outlet />
                <Footer />
            </Provider>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />,
                    }
                ]
            },
            {
                path: '/login',
                element: <Login />
            },

            {
                path: '/restaurants/:id',
                element: <RestaurantMenu />
            },

            {
                path: '/cart',
                element: <Suspense><Cart /></Suspense>
            }
        ]
    },

]);

// Rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
