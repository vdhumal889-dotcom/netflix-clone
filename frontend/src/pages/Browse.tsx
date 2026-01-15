import React from 'react';

const Browse: React.FC = () => {
  const movies = [
    { id: 1, title: 'Movie 1', image: 'https://via.placeholder.com/300x450' },
    { id: 2, title: 'Movie 2', image: 'https://via.placeholder.com/300x450' },
    { id: 3, title: 'Movie 3', image: 'https://via.placeholder.com/300x450' },
    { id: 4, title: 'Movie 4', image: 'https://via.placeholder.com/300x450' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Browse Movies & TV Shows</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ background: '#222', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={movie.image} alt={movie.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3>{movie.title}</h3>
              <a href={`/watch/${movie.id}`} style={{ color: '#e50914', textDecoration: 'none' }}>Watch Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
