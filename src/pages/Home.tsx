import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Book, Camera, PenTool } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-12">
          Oscar & Yuritzi <Heart className="inline-block text-pink-500" />
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/memories" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Camera className="mx-auto text-pink-500 mb-4 w-12 h-12" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Memories</h2>
              <p className="text-gray-600">Our precious moments together</p>
            </div>
          </Link>

          <Link to="/poems" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <PenTool className="mx-auto text-pink-500 mb-4 w-12 h-12" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Poems</h2>
              <p className="text-gray-600">Words from the heart</p>
            </div>
          </Link>

          <Link to="/diary" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Book className="mx-auto text-pink-500 mb-4 w-12 h-12" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Diary</h2>
              <p className="text-gray-600">Our daily thoughts</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;