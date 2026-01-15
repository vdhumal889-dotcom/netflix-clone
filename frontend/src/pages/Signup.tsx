import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt:', { name, email, password });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', background: '#222', borderRadius: '8px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', background: '#333', border: 'none', color: 'white', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', background: '#333', border: 'none', color: 'white', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', background: '#333', border: 'none', color: 'white', borderRadius: '4px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '0.75rem', background: '#e50914', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Already have an account? <a href="/login" style={{ color: '#e50914' }}>Login</a>
      </p>
    </div>
  );
};

export default Signup;
