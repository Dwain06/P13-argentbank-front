import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

// Import pages
import Index from './pages/index/Index';
import SignIn from './pages/signin/SignIn';
import User from './pages/user/User';
import Register from './pages/register/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;