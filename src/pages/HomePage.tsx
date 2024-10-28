// src/pages/HomePage.js
// import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-6xl font-bold mb-4">welcome to flipYourCode</h1>
      <p className="text-2xl">I am Philip, a passionate developer </p>
      <div className="mt-8 flex space-x-4">
        <button className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-200 transition">
          Explore My Work
        </button>
        <button className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-200 transition"
        onClick={() => navigate('/aboutme')}>
          About Me
        </button>
      </div>
    </div>
  );
}

export default HomePage;
