import React from 'react';
import { Link } from 'react-router-dom';
const Browse: React.FC = () => {
  const movies = [
    { id: 1, title: 'Movie 1', year: '2024', rating: 'PG-13', image: 'https://via.placeholder.com/300x450/333/fff?text=Movie+1' },
    { id: 2, title: 'Movie 2', year: '2023', rating: 'R', image: 'https://via.placeholder.com/300x450/333/fff?text=Movie+2' },
    { id: 3, title: 'Movie 3', year: '2024', rating: 'PG', image: 'https://via.placeholder.com/300x450/333/fff?text=Movie+3' },
    { id: 4, title: 'Movie 4', year: '2022', rating: 'PG-13', image: 'https://via.placeholder.com/300x450/333/fff?text=Movie+4' },
    { id: 5, title: 'Movie 5', year: '2024', rating: 'R', image: 'https://via.placeholder.com/300x450/333/fff?text=Movie+5' },
    { id: 6, title: 'Movie 6', year: '2023', rating: 'PG', image: 'https://via.placeholder.com/300x450/333/fff?text=Movie+6' },
  ];
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>🎬 Browse Movies</h1>
        <Link to="/" style={{ color: '#e50914', textDecoration: 'none' }}>← Home</Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ background: '#222', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={movie.image} alt={movie.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>{movie.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', color: '#aaa' }}>
                <span>{movie.year}</span><span>{movie.rating}</span>
              </div>
              <Link to={`/watch/${movie.id}`} style={{ display: 'block', padding: '0.5rem', background: '#e50914', color: 'white', textAlign: 'center', borderRadius: '4px', textDecoration: 'none' }}>Watch Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Browse;
