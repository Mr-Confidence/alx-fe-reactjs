import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();

  return (
    <div>
      <nav>
        <Link 
          to="/profile/details"
          style={{ fontWeight: location.pathname === '/profile/details' ? 'bold' : 'normal' }}
        >
          Profile Details
        </Link>
        <Link 
          to="/profile/settings"
          style={{ fontWeight: location.pathname === '/profile/settings' ? 'bold' : 'normal' }}
        >
          Settings
        </Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
