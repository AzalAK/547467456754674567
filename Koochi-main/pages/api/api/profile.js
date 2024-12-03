import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/api/profile'); // تأكد من أن الـ API موجود
        console.log('Profile data fetched:', response.data); // تحقق من البيانات في وحدة التحكم
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error); // طباعة الأخطاء في وحدة التحكم
      }
    };
    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{profileData.name}</h2>
      <img src={profileData.avatar} alt="Profile" />
      <p>{profileData.bio}</p>
      <a href={`/profile/${profileData.id}`}>Go to Profile</a>
    </div>
  );
};

export default Profile;
