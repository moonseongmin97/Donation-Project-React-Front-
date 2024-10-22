import React from "react";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import  Home from './pages/Home';
import App from "./App";

const Router = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
export default Router;