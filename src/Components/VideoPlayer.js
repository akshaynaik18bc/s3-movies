// src/components/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import "./MovieList.css";

const VideoPlayer = ({ match }) => {
  const { movieKey } = useParams();
  //const movieKey = decodeURIComponent(match.params.movieKey);

  return (
    <div className='video-div'>
      <h2>{movieKey}</h2>
      <ReactPlayer style={{ width: '100%' }} url={`https://movie-bucket-latest.s3.amazonaws.com/${movieKey}`} controls />
    </div>
  );
};

export default VideoPlayer;
