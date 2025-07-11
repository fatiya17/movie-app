import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";
import MoviesContext from "../../components/context/MoviesContext";

function PopularMovie() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await axios(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    }

    fetchPopularMovies();
  }, [setMovies]);

  return (
    <div>
      <Hero />
      <Movies title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
