import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1 style={{ fontSize: '4rem', color: '#e50914' }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ marginTop: '1rem' }}>The page you are looking for doesn't exist.</p>
      <a href="/" style={{ display: 'inline-block', marginTop: '2rem', padding: '0.75rem 1.5rem', background: '#e50914', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
