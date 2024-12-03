"use client";

import React from "react";

const ProfileModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4">
        <button
          className="absolute top-2 right-2 text-red-500"
          onClick={onClose}
        >
          Close
        </button>
        <img src={user.avatar} alt={user.username} className="w-20 h-20 rounded-full" />
        <h2 className="mt-4 text-xl font-bold">{user.username}</h2>
        <p>{user.email}</p>
        <p>Status: {user.status}</p>
      </div>
    </div>
  );
};

export default ProfileModal;
