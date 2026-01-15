import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { VideoProvider } from './context/VideoContext';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Browse from './pages/Browse';
import Watch from './pages/Watch';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <VideoProvider>
        <Router>
          <div className="app">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/browse" element={
                  <ProtectedRoute>
                    <Browse />
                  </ProtectedRoute>
                } />
                <Route path="/watch/:id" element={
                  <ProtectedRoute>
                    <Watch />
                  </ProtectedRoute>
                } />
                <Route path="/admin/*" element={
                  <ProtectedRoute adminOnly={true}>
                    <Admin />
                  </ProtectedRoute>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </VideoProvider>
    </AuthProvider>
  );
};

export default App;