import React from 'react';

const Admin: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Panel</h1>
      <div style={{ marginTop: '2rem', background: '#222', padding: '2rem', borderRadius: '8px' }}>
        <h3>Dashboard</h3>
        <p>Welcome to the admin panel. Here you can manage users, videos, and settings.</p>
        <div style={{ marginTop: '2rem' }}>
          <button style={{ padding: '0.5rem 1rem', marginRight: '1rem', background: '#e50914', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Manage Users
          </button>
          <button style={{ padding: '0.5rem 1rem', marginRight: '1rem', background: '#e50914', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Manage Videos
          </button>
          <button style={{ padding: '0.5rem 1rem', background: '#e50914', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
