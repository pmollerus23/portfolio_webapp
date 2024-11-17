// Hotbar.js
import React from 'react';

const Hotbar = () => {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 opacity-75 bg-gray-400 text-white p-8 rounded-r-lg shadow-lg space-y-4 w-48 h-3/4">
      <a href="#section1" className="block hover:bg-gray-600 px-2 py-1 rounded">Section 1</a>
      <a href="#section2" className="block hover:bg-gray-600 px-2 py-1 rounded">Section 2</a>
      <a href="#section3" className="block hover:bg-gray-600 px-2 py-1 rounded">Section 3</a>
      <a href="#section4" className="block hover:bg-gray-600 px-2 py-1 rounded">Section 4</a>
      {/* Add more links or icons as desired */}
    </div>
  );
};

export default Hotbar;
