import React from 'react';
import { useAuth } from '../context/AuthContext';


const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-5 text-black">
        <h1 className="text-2xl font-bold mb-3">User Profile</h1>
        <p>
          <span className="font-bold">Username:</span> {user.username}
        </p>
        <p>
          <span className="font-bold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-bold">Created at:</span>{' '}
          {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Profile;
