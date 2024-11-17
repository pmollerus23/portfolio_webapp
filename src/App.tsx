import "./App.css";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cat from "./pages/Cat";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import AboutMePage from "./pages/AboutMe";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    // Set the static title
    document.title = "flipYourCode";

    // Set the static favicon
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "/favicon.png?v=1"; // or the path to your favicon in `public`
    document.head.appendChild(favicon);

    // Cleanup if needed
    return () => {
      document.head.removeChild(favicon);
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/cat"
          element={
            <PrivateRoute>
              <Cat />
            </PrivateRoute>
          }
        />
        <Route path="/aboutme" element={<AboutMePage />} />
        {/* <Route path="/cat" element={<Cat />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
