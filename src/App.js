// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './Components/MovieList';
import VideoPlayer from './Components/VideoPlayer';
import VideoPlayer2 from './Components/VideoPlayer2';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/player/:movieKey" element={<VideoPlayer />} />
        <Route path="/player2/:movieKey" element={<VideoPlayer2 />} />
      </Routes>
    </Router>
  );
}

export default App;
