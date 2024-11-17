// import React from 'react';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import PDFViewerCard from "../components/PDFViewerCard";
import ContactCard from "../components/ContactCard";
// import React from 'react';
import { useNavigate } from "react-router-dom";
import KeyPoints from "../components/KeyPoints";
// const AboutMePage = () => {
//   return (
//     // <div className="flex flex-col items-center justify-start h-screen bg-gradient-to-r from-blue-500 to-zinc-600 text-white overflow-y-auto">
//     // {/* <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-500 to-teal-600 text-white"> */}
//     //   {/* <h1 className="text-6xl font-bold mb-4">About Me</h1> */}
//     //   <h1 className="text-6xl font-bold mb-4 relative left-0 top-4">About Me</h1>
//     //   <p className="text-2xl text-center max-w-2xl">
//     //     Hi, I'm Flip! I’m a passionate web developer with experience in modern web technologies like React, .NET, and more. I love creating user-friendly, efficient, and scalable web applications. My goal is to always keep learning and building innovative solutions.
//     //   </p>
//     //   <div className="w-full max-w-4xl bg-white rounded-lg p-4 shadow-lg">
//     //     <Worker workerUrl={`https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
//     //       <Viewer fileUrl={'/ComputerScienceResumedocx.pdf'} />
//     //     </Worker>
//     //   {/* </div> */}
//     // </div>
//     // </div>

// <div className="flex flex-col items-center justify-start h-screen bg-gradient-to-r from-blue-500 to-zinc-600 text-white overflow-y-auto px-8">
//   <h1 className="text-6xl font-bold mb-4 relative left-0 top-10">About Me</h1>
//   <p className="text-2xl text-center max-w-3xl mb-8 relative left-0 top-10 pt-8">
//     Hi, I'm Flip! I'm a passionate web developer with experience in modern web technologies like React, .NET, and more. I love creating user-friendly, efficient, and scalable web applications. My goal is to always keep learning and building innovative solutions.
//   </p>

//   <div className="flex gap-11 w-full max-w-8xl pt-8">
//     <div className="flex-[0.7] bg-white rounded-lg p-4 shadow-lg">
//       <Worker workerUrl={`https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
//         <Viewer fileUrl={'/ComputerScienceResumedocx.pdf'} />
//       </Worker>
//     </div>

//     <div className="flex-[0.3] bg-white rounded-lg p-4 shadow-lg">
//       <h2 className="text-2xl font-bold text-black mb-4">Contact Me</h2>

//       {/* Contact Form */}
//       <form className="flex flex-col gap-4">
//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             placeholder="Your Name"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             placeholder="your@email.com"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Phone
//           </label>
//           <input
//             type="tel"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             placeholder="(123) 456-7890"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Message
//           </label>
//           <textarea
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-32"
//             placeholder="Your message here..."
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
//         >
//           Send me an Email
//         </button>
//       </form>
//     </div>
//   </div>
// </div>

//   );
// };

// export default AboutMePage;

// Main component

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen p-0 max-h-screen overflow-auto">
      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-2 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Home
      </button>

      <div className="flex flex-col items-center justify-start h-screen bg-white text-black px-8 max-h-screen overflow-auto">
        <h1 className="text-6xl font-bold mb-9 relative left-0 top-10 py-0">
          About Me
        </h1>
        <p
          className="text-2xl text-center max-w-4xl mb-8 relative left-0 top-10 pt-8 py-12
        border border-white border-opacity-50 rounded-lg p-8 bg-gray-200 bg-opacity-40"
        >
          Hi, I'm Philip! I'm a passionate web developer with experience in
          modern web technologies like React, .NET, and more. I love creating
          user-friendly, efficient, and scalable web applications. My goal is to
          always keep learning and building innovative solutions.
        </p>

        <div className="flex gap-11 w-full max-w-8xl pt-8">
          <div className="flex-1 bg-white rounded-lg p-4 shadow-lg">
            <KeyPoints />
            <PDFViewerCard />
          </div>

          <div className="fbg-white rounded-lg p-4 flex-[0.4] shadow-lg overflow-y-auto">
            <ContactCard />
          </div>
        </div>

        {/* <div className="flex gap-11 w-full max-w-8xl pt-8">
          <div>
          <KeyPoints />
          <PDFViewerCard />
          </div>
       
          
          
          <ContactCard />
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
