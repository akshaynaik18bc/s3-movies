// src/components/VideoPlayer.js
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import "./MovieList.css";
import {Media, Video } from '@vidstack/player-react';
import React, { useState, useEffect } from 'react';
import AWS from './../awsConfig';
// const VideoPlayer = ({ match }) => {
//   const { movieKey } = useParams();
//   //const movieKey = decodeURIComponent(match.params.movieKey);

//   return (
//     <div className='video-div'>
//       <h2>{movieKey}</h2>
//       {/* <ReactPlayer style={{ width: '100%' }} url={`https://movie-bucket-latest.s3.amazonaws.com/${movieKey}`} controls /> */}
//       <Media>
//         <Video loading="visible" poster="https://media-files.vidstack.io/poster.png" controls preload="true">
//             <video loading="visible" poster="https://media-files.vidstack.io/poster-seo.png" src={`https://movie-bucket-latest.s3.amazonaws.com/${movieKey}`} preload="none" data-video="0" controls />
//         </Video>
//       </Media>
//     </div>
//   );
// };


const VideoPlayer = ({ match }) => {
    const { movieKey } = useParams();
    const [signedUrl, setSignedUrl] = useState('');
    //const movieKey = decodeURIComponent(match.params.movieKey);
    useEffect(() => {
      const token = localStorage.getItem('token');

      if (!token) {
        // Token is not set, redirect to the login page
        window.location.href = '/';
      }
        const s3 = new AWS.S3();
        const params = {
          Bucket: 'movie-bucket-latest',
          Key: movieKey, // Replace with the actual path to your video object
          Expires: 10800, // The URL will expire in 1 hour (you can adjust this)
        };
    
        s3.getSignedUrl('getObject', params, (err, url) => {
          if (err) {
            console.error('Error generating signed URL:', err);
          } else {
            setSignedUrl(url);
            console.log("Signed Url : ");
            console.log(url);
          }
        });
      }, []);
    


    return (
      <div className='video-div'>
        <h2>{movieKey}</h2>
        <Media>
          <Video loading="visible" poster="https://media-files.vidstack.io/poster.png" controls preload="true">
              <video loading="visible" poster="https://media-files.vidstack.io/poster-seo.png" src={signedUrl} preload="none" data-video="0" controls />
          </Video>
        </Media>
      </div>
    );
  };
export default VideoPlayer;
