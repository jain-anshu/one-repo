import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer } from './src/Footer';
import { Header } from './src/Header';
import { Body } from './src/Body';

const MainPage = function () {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}
root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<MainPage />);