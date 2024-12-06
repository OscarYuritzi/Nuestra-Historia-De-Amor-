import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Memories from './pages/Memories';
import Poems from './pages/Poems';
import Diary from './pages/Diary';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/memories" element={<PrivateRoute><Memories /></PrivateRoute>} />
        <Route path="/poems" element={<PrivateRoute><Poems /></PrivateRoute>} />
        <Route path="/diary" element={<PrivateRoute><Diary /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;