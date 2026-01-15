import mongoose from 'mongoose';

export interface IVideo extends mongoose.Document {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: number;
  genre: string[];
  cast: string[];
  director: string;
  releaseYear: number;
  rating: number;
  isFeatured: boolean;
  isUpcoming: boolean;
  releaseDate?: Date;
  views: number;
  createdAt: Date;
}

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  genre: [{
    type: String,
    required: true
  }],
  cast: [String],
  director: String,
  releaseYear: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 10
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isUpcoming: {
    type: Boolean,
    default: false
  },
  releaseDate: Date,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IVideo>('Video', VideoSchema);