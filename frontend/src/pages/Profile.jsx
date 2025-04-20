import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useSelector(state => state.user);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img src={user.profilePic} alt={user.fullName} className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-3xl font-bold">{user.fullName}</h1>
      <p className="text-xl">{user.email}</p>
      <p className="text-xl">Member since {new Date(user.createdAt).toLocaleString()}</p>
      <Link to="/update-profile">
        <button className="bg-red-600 text-white px-4 py-2 rounded-md mt-4">
          Update Profile
        </button>
      </Link>
    </div>
  )
}

export default Profile
