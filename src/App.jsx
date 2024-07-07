import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register  from './Components/Register';
import Home from './Home';
import Refer from './Components/Refer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/refer" element={<Refer />} />
      </Routes>
    </Router>
  );
};

export default App;
