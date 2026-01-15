import React from 'react';
import { useParams } from 'react-router-dom';

const Watch: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Now Watching: Movie #{id}</h1>
      <div style={{ marginTop: '2rem', background: '#000', padding: '2rem', borderRadius: '8px' }}>
        <video controls style={{ width: '100%', maxWidth: '800px', display: 'block', margin: '0 auto' }}>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <a href="/browse" style={{ color: '#e50914', textDecoration: 'none' }}>← Back to Browse</a>
      </div>
    </div>
  );
};

export default Watch;
