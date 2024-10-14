import React from 'react';
import { useAuth } from '../context/AuthenticationContext';
import profilePic from '../assets/profile.png';

const ProfileIcon = ({ onProfileClick }) => {
  const { user } = useAuth();

  return (
    <div className='flex gap-2 items-center mx-2'>
      <img 
        src={user?.photoURL || profilePic} 
        alt={user?.displayName || "Profile"} 
        className="h-[50px] w-[50px] rounded-full bg-[#E2725B] object-cover cursor-pointer" 
        onClick={onProfileClick}
      />
      <div className="flex flex-col">
        <p className='text-base hidden md:block'>{user?.displayName || "Username"}</p>
        <p className='text-xs hidden md:block'>{user?.email || "Email"}</p>
      </div>
    </div>
  );
};

export default ProfileIcon;