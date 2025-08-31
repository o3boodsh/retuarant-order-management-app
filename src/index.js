import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import "../src/Resources/css/style.css";
import "../src/Resources/css/staff-login.css";
// import "../src/Resources/css/confirmation-order-page.css";
import "bootstrap/dist/css/bootstrap.css";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);
