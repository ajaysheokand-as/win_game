import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Login } from './forms/login/Login';
import { Register } from './forms/register/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from './pages/profile/Profile';
import { Payment } from './pages/payment/Payment';
import { PaymentAdminPanel } from './pages/payment/admin_panel/PaymentAdminPanel';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="win_game" element={<App />} />
        <Route path="profile" element={<Profile/>} />    
        <Route path="payment" element={<Payment/>} />    
        <Route path="paymentAdminPanel" element={<PaymentAdminPanel/>} />    
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals