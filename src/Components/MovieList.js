// src/components/MovieList.js
import React, { useState, useEffect } from 'react';
import { s3 } from '../awsConfig';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie list from S3 bucket
    async function fetchMovies() {
      try {
        const response = await s3.listObjectsV2({ Bucket: 'movie-bucket-latest' }).promise();
        const movieList = response.Contents.map(item => item.Key);
        setMovies(movieList);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);
// adding a comment
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <a href={`/player/${encodeURIComponent(movie)}`}>{movie}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
