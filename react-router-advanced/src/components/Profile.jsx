import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

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
        <Routes>
          <Route index element={<ProfileDetails />} />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
