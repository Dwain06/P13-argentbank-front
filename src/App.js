import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

// Import pages
import Index from './pages/index/Index';
import SignIn from './pages/signin/SignIn';
import User from './pages/user/User';
import Register from './pages/register/Register';
import PrivateRoutes from './utils/PrivateRoutes';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} exact />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Index />} />

        <Route element={<PrivateRoutes />}>
              <Route path="/user" element={<User />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;