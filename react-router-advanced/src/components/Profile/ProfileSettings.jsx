import React from 'react';

const ProfileSettings = () => {
  return (
    <div>
      <h2>Profile Settings</h2>
      <form>
        <div>
          <label>Email Notifications</label>
          <input type="checkbox" defaultChecked />
        </div>
        <div>
          <label>Profile Visibility</label>
          <select defaultValue="public">
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
