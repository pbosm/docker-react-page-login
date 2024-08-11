import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreenCard from '../modules/loginScreenCard/LoginScreenCard';
import RegisterScreenCard from '../modules/registerScreenCard/RegisterScreenCard';
import LoginScreen from '../modules/loginScreen/LoginScreen';
import Register from '../modules/register/Register';
import NotFound from '../modules/notFound/NotFound';

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={< LoginScreen />} />
      <Route path="/register" element={< Register />} />
      <Route path="/loginscreencard" element={< LoginScreenCard />} />
      <Route path="/registerscreencard" element={< RegisterScreenCard />} />
      <Route path="*" element={< NotFound />} />
    </Routes>
  </Router>
);

export default AppRoutes;
