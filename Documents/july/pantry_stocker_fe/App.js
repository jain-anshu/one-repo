import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Footer } from './src/Footer';
import { Header } from './src/Header';
import { Body } from './src/Body';
import { ShoppingList } from './src/ShoppingList';
import Stores from './src/Stores';
import ErrorPage from './src/ErrorPage';


const MainPage = function () {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

const AppRouter = createBrowserRouter(
    [
        {
            path: '/', element: <MainPage />,
            children: [
                { path: '/', element: <Body /> },
                { path: '/ShoppingList', element: <ShoppingList />, errorElement: <ErrorPage /> },
                { path: '/Stores', element: <Stores />, errorElement: <ErrorPage /> }

            ],
            errorElement: <ErrorPage />
        },
    ],
);

root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter} />);