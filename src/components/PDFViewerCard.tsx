// PDFViewerCard.jsx

// import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import { render } from '@testing-library/react';

const PDFViewerCard = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
      <div className="inline-flex flex-col w-full bg-slate-200 rounded-lg p-4 shadow-lg max-h-[80%]">
        <Worker workerUrl={`https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={'/ComputerScienceResumedocx.pdf'} 
          plugins={[
            // Register plugins
            defaultLayoutPluginInstance
        ]}
          />
        </Worker>
      </div>
    );
  };

  export default PDFViewerCard;
  
  
  
//   // Main component
//   const AboutMe = () => {
//     return (
//       <div className="flex flex-col items-center justify-start h-screen bg-gradient-to-r from-blue-500 to-zinc-600 text-white overflow-y-auto px-8">
//         <h1 className="text-6xl font-bold mb-4 relative left-0 top-10">About Me</h1>
//         <p className="text-2xl text-center max-w-3xl mb-8 relative left-0 top-10 pt-8">
//           Hi, I'm Flip! I'm a passionate web developer with experience in modern web technologies like React, .NET, and more. I love creating user-friendly, efficient, and scalable web applications. My goal is to always keep learning and building innovative solutions.
//         </p>
        
//         <div className="flex gap-11 w-full max-w-8xl pt-8">
//           <PDFViewerCard />
//           <ContactCard />
//         </div>
//       </div>
//     );
//   };
  
//   export default AboutMe;