// pages/index.js
import React from 'react';
import Profile from '../components/Profile';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Profile /> {/* عرض المكون هنا */}
    </div>
  );
};

export default HomePage;
