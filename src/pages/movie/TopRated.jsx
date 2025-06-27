// src/pages/TopRated/TopRated.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

      try {
        const response = await axios.get(URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching top rated movies:", error);
      }
    }

    fetchTopRatedMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies movies={movies} />
    </div>
  );
}

export default TopRated;
