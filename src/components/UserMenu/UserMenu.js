import React from 'react';

export const UserMenu = ({ onLogout }) => {
  return (
    <div>
      <p>mango@mail.com</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
