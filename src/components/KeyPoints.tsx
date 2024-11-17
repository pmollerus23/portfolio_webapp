import React, { useState } from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const KeyPoints = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleTab = () => setIsOpen(!isOpen);
  
      const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
      return (
        // <div className="inline-flex flex-col w-full bg-slate-200 rounded-lg p-4 shadow-lg">
        <div className={`inline-flex flex-col rounded-md w-full mx-auto my-4 overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? 'border border-gray-300' : 'border-none'}`}>      {/* inline-flex flex-col w-full   */}
        {/* max-h-[80%] */}
  
           {/* Toggle Button */}
        <button
          onClick={toggleTab}
          className="w-full text-left flex justify-between items-center p-2 text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-md"
        >
          <span>Technologies</span>
          <span>{isOpen ? '-' : '+'}</span>
        </button>
  
        <div className={`overflow-y-auto transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          
        </div>
  
          
        </div>
      );
};

export default KeyPoints;
