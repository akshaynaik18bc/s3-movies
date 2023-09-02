// src/components/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import "./MovieList.css";
import {Media, Video } from '@vidstack/player-react';


const VideoPlayer = ({ match }) => {
  const { movieKey } = useParams();
  //const movieKey = decodeURIComponent(match.params.movieKey);

  return (
    <div className='video-div'>
      <h2>{movieKey}</h2>
      {/* <ReactPlayer style={{ width: '100%' }} url={`https://movie-bucket-latest.s3.amazonaws.com/${movieKey}`} controls /> */}
      <Media>
        <Video loading="visible" poster="https://media-files.vidstack.io/poster.png" controls preload="true">
            <video loading="visible" poster="https://media-files.vidstack.io/poster-seo.png" src={`https://movie-bucket-latest.s3.amazonaws.com/${movieKey}`} preload="none" data-video="0" controls />
        </Video>
      </Media>
    </div>
  );
};

export default VideoPlayer;
