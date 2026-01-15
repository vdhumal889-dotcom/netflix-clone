import React, { useState } from 'react';
import axios from 'axios';
import './AddVideoForm.css';

const AddVideoForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoFile: null as File | null,
    thumbnailFile: null as File | null,
    duration: '',
    genre: [] as string[],
    cast: '',
    director: '',
    releaseYear: '',
    rating: '',
    isFeatured: false,
    isUpcoming: false,
    releaseDate: ''
  });

  const genres = ['Action', 'Comedy', 'Drama', 'Thriller', 'Horror', 'Romance', 'Sci-Fi', 'Documentary'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'videoFile' || key === 'thumbnailFile') {
        if (value) data.append(key, value);
      } else if (key === 'genre') {
        data.append(key, JSON.stringify(value));
      } else if (value !== null && value !== undefined) {
        data.append(key, value.toString());
      }
    });

    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/admin/videos', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      alert('Video added successfully!');
      // Reset form
      setFormData({
        title: '',
        description: '',
        videoFile: null,
        thumbnailFile: null,
        duration: '',
        genre: [],
        cast: '',
        director: '',
        releaseYear: '',
        rating: '',
        isFeatured: false,
        isUpcoming: false,
        releaseDate: ''
      });
    } catch (error) {
      console.error('Error adding video:', error);
      alert('Failed to add video');
    }
  };

  return (
    <div className="add-video-form">
      <h2>Add New Video</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Video File</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setFormData({...formData, videoFile: e.target.files?.[0] || null})}
            required
          />
        </div>

        <div className="form-group">
          <label>Thumbnail Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFormData({...formData, thumbnailFile: e.target.files?.[0] || null})}
            required
          />
        </div>

        <div className="form-group">
          <label>Duration (minutes)</label>
          <input
            type="number"
            value={formData.duration}
            onChange={(e) => setFormData({...formData, duration: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Genres</label>
          <div className="genre-checkboxes">
            {genres.map(genre => (
              <label key={genre}>
                <input
                  type="checkbox"
                  checked={formData.genre.includes(genre)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({...formData, genre: [...formData.genre, genre]});
                    } else {
                      setFormData({...formData, genre: formData.genre.filter(g => g !== genre)});
                    }
                  }}
                />
                {genre}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Cast (comma separated)</label>
          <input
            type="text"
            value={formData.cast}
            onChange={(e) => setFormData({...formData, cast: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Director</label>
          <input
            type="text"
            value={formData.director}
            onChange={(e) => setFormData({...formData, director: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Release Year</label>
          <input
            type="number"
            value={formData.releaseYear}
            onChange={(e) => setFormData({...formData, releaseYear: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={formData.isFeatured}
              onChange={(e) => setFormData({...formData, isFeatured: e.target.checked})}
            />
            Featured Video
          </label>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={formData.isUpcoming}
              onChange={(e) => setFormData({...formData, isUpcoming: e.target.checked})}
            />
            Upcoming Video
          </label>
        </div>

        {formData.isUpcoming && (
          <div className="form-group">
            <label>Release Date</label>
            <input
              type="date"
              value={formData.releaseDate}
              onChange={(e) => setFormData({...formData, releaseDate: e.target.value})}
            />
          </div>
        )}

        <button type="submit" className="submit-btn">Add Video</button>
      </form>
    </div>
  );
};

export default AddVideoForm;