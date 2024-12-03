import React from "react";

const ProfileModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-[400px]">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{user.username}'s Profile</h2>
          <button
            onClick={onClose}
            className="text-red-500 font-bold hover:text-red-700"
          >
            X
          </button>
        </div>
        <div className="mt-4 text-center">
          <img
            src={user.avatar}
            alt={user.username}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <p className="mt-4 text-gray-700">{user.email}</p>
          <p className="mt-2 text-sm text-gray-500">{user.status}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
