// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './Components/MovieList';
import VideoPlayer from './Components/VideoPlayer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/player/:movieKey" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
