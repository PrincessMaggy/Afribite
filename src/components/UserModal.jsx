import React, { useState } from 'react';
import UserProfile from './UserProfile';
import ProfileIcon from './ProfileIcon';


const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 lg:hidden">
        <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="p-4">
            <button
              onClick={onClose}
              className="float-right mr-2 scale-150 text-gray-700  hover:text-gray-900"
            >
              &times;
            </button>
            {children}
          </div>
        </div>
      </div>
    );
  };
  


const UserModal = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ProfileIcon onProfileClick={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={` lg:hidden ${className}`}>
          <UserProfile className='bg-slate-100/40' />
        </div>
      </Modal>
    </>
  );
};

export default UserModal;