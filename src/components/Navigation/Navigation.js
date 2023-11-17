import React from 'react';
import { Link } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';

export const Navigation = ({ loggedIn, onLogout }) => {
  return (
    <nav>
      {/* Other navigation links */}
      {loggedIn ? (
        <UserMenu onLogout={onLogout} />
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};