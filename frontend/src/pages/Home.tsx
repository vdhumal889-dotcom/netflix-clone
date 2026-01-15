import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎬 Netflix Clone</h1>
      <p style={{ marginTop: '1rem' }}>Welcome to the Netflix Clone homepage</p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/login" style={{ color: '#e50914', marginRight: '1rem' }}>Login</a>
        <a href="/signup" style={{ color: '#e50914', marginRight: '1rem' }}>Sign Up</a>
        <a href="/browse" style={{ color: '#e50914' }}>Browse</a>
      </div>
    </div>
  );
};

export default Home;
