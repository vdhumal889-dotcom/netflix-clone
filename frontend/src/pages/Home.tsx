import React from 'react';
import { Link } from 'react-router-dom';
const Home: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: '#e50914' }}>🎬 Netflix Clone</h1>
      <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Welcome! All pages are working 🚀</p>
      <div style={{ marginTop: '3rem', background: '#222', padding: '2rem', borderRadius: '8px', maxWidth: '600px', margin: '3rem auto' }}>
        <h2>Quick Navigation</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
          <Link to="/login" style={{ padding: '1rem', background: '#333', borderRadius: '4px', color: 'white', textDecoration: 'none' }}>🔐 Login</Link>
          <Link to="/signup" style={{ padding: '1rem', background: '#333', borderRadius: '4px', color: 'white', textDecoration: 'none' }}>📝 Sign Up</Link>
          <Link to="/browse" style={{ padding: '1rem', background: '#e50914', borderRadius: '4px', color: 'white', textDecoration: 'none' }}>🎥 Browse Movies</Link>
          <Link to="/watch/1" style={{ padding: '1rem', background: '#e50914', borderRadius: '4px', color: 'white', textDecoration: 'none' }}>▶️ Watch Demo</Link>
          <Link to="/admin" style={{ padding: '1rem', background: '#555', borderRadius: '4px', color: 'white', textDecoration: 'none', gridColumn: 'span 2' }}>⚙️ Admin Panel</Link>
        </div>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <h3>Deployment URLs:</h3>
        <div style={{ textAlign: 'left', maxWidth: '800px', margin: '1rem auto', background: '#222', padding: '1rem', borderRadius: '8px' }}>
          <p><strong>Frontend:</strong> <a href="https://netflix-clone-frontend-4yuw.onrender.com" style={{ color: '#e50914' }}>netflix-clone-frontend-4yuw.onrender.com</a></p>
          <p><strong>Backend:</strong> <a href="https://netflix-clone-backend-agyt.ownerender.com" style={{ color: '#e50914' }}>netflix-clone-backend-agyt.ownerender.com</a></p>
        </div>
      </div>
    </div>
  );
};
export default Home;
