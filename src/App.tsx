import './App.css'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cat from './pages/Cat'
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import AboutMePage from './pages/AboutMe';

const App: React.FC = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cat" element={<PrivateRoute><Cat /></PrivateRoute>} />
              <Route path="/aboutme" element={<AboutMePage />} />
{/* <Route path="/cat" element={<Cat />} /> */}
          </Routes>
      </Router>
  );
};

export default App;
