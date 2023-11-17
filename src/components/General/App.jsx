import React, { useState } from 'react';
import { Outlet, Route, BrowserRouter as Router } from 'react-router-dom';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Navigation } from '../Navigation/Navigation';
import { Contacts } from '../Contacts/Contacts';

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Navigation loggedIn={loggedIn} onLogout={handleLogout} />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/contacts"
          element={<Contacts />}
        />
        <Outlet />
      </div>
    </Router>
  );
};
