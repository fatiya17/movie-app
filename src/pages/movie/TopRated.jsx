import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import MoviesContext from "../../components/context/MoviesContext";

function TopRated() {
  const { setMovies } = useContext(MoviesContext);

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
  }, [setMovies]);

  return (
    <div>
      <Hero />
      <Movies title="Top Rated Movies" />
    </div>
  );
}

export default TopRated;
