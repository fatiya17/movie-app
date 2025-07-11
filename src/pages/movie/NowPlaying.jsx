import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import MoviesContext from "../../components/context/MoviesContext";

function NowPlaying() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

      try {
        const response = await axios.get(URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    }

    fetchNowPlayingMovies();
  }, [setMovies]);

  return (
    <div>
      <Hero />
      <Movies title="Now Playing Movies" />
    </div>
  );
}

export default NowPlaying;
