import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

// Import pages
import Index from './pages/index/Index';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import PrivateRoutes from './components/PrivateRoutes';
import Login from './pages/login/Login';
import LoginRoutes from './components/LoginRoutes';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} exact />
        <Route path="*" element={<Index />} />

        <Route element={<LoginRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<PrivateRoutes />}>
              <Route path="/profile" element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;