"use client";

import React, { useState } from "react";
import { HomeHeader } from "@/components/home/home-header";
import { NavigationSideBar } from "@/components/navigation/navigation-sidebar";
import ProfileModal from "@/components/profile/ProfileModal";

const SetupPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  // قائمة المستخدمين
  const users = [
    { id: 1, username: "Zanoo", avatar: "/path/to/avatar1.png", email: "zanoo@example.com", status: "Online" },
    { id: 2, username: "Koochi", avatar: "/path/to/avatar2.png", email: "koochi@example.com", status: "Away" },
  ];

  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-30 hidden h-full w-[72px] flex-col md:flex">
        <NavigationSideBar />
      </div>
      <main className="h-full md:pl-[72px]">
        <div className="h-full">
          <div className="fixed inset-y-0 z-20 hidden h-full w-60 flex-col md:flex bg-gray-800 text-white">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
              >
                <img src={user.avatar} alt={user.username} className="w-10 h-10 rounded-full mr-2" />
                <span>{user.username}</span>
              </div>
            ))}
          </div>
          <main className="h-full md:pl-60">
            <div className="flex h-full flex-col bg-white dark:bg-[#313338]">
              <HomeHeader />
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  Welcome to Koochi! <br /> You can create a channel, invite
                  friends, and start chatting or join a server.
                  <span className="mt-4 block text-sm text-gray-500">
                    This project is a work in progress.
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
      {selectedUser && (
        <ProfileModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default SetupPage;
