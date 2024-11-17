// src/pages/HomePage.js
// import React from 'react';
import { useNavigate } from 'react-router-dom';
import HotBar from '../components/HotBar'
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
   
      {/* <HotBar /> */}
      <h1 className="text-6xl font-bold mb-4">welcome to flipYourCode
      <span className="text-blue-300"> &lt;/&gt;</span></h1>
      <p className="text-2xl">I am Philip, a passionate developer who likes to build accesible AI applications</p>
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
