// src/components/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

const VideoPlayer = ({ match }) => {
  const { movieKey } = useParams();
  //const movieKey = decodeURIComponent(match.params.movieKey);

  return (
    <div>
      <h2>Video Player</h2>
      <ReactPlayer url={`https://movie-bucket-latest.s3.amazonaws.com/${movieKey}`} controls />
    </div>
  );
};

export default VideoPlayer;
