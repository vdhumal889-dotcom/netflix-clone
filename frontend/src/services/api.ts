import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://netflix-clone-backend-agyt.ownerender.com';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors for auth token if needed
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

export const videoService = {
  getAll: () => api.get('/videos'),
  getById: (id: string) => api.get(`/videos/${id}`),
  create: (data: any) => api.post('/videos', data),
  update: (id: string, data: any) => api.put(`/videos/${id}`, data),
  delete: (id: string) => api.delete(`/videos/${id}`),
};

export const authService = {
  login: (email: string, password: string) => 
    api.post('/auth/login', { email, password }),
  register: (name: string, email: string, password: string) => 
    api.post('/auth/register', { name, email, password }),
  logout: () => api.post('/auth/logout'),
};
