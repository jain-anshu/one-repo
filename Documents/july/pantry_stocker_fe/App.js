import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Footer } from './src/Footer';
import { Header } from './src/Header';
import { Body } from './src/Body';
import { ShoppingList } from './src/ShoppingList';


const MainPage = function () {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}

const AppRouter = createBrowserRouter(
    [
        { path: '/', element: <MainPage /> },
        { path: '/ShoppingList', element: <ShoppingList /> }
    ],
);

root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter} />);