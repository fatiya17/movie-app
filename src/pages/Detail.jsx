import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Styled component
const StyledDetailMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: #4361ee;
  }

  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: #3f37c9;
  }

  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;

    .poster {
      flex-basis: 30%;
    }

    .info {
      flex-basis: 60%;
    }
  }
`;



function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios.get(URL);
        setMovie(response.data);

        const trailerData = response.data.videos?.results.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );

        if (trailerData) {
          setTrailer(`https://www.youtube.com/watch?v=${trailerData.key}`);
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    }

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const genres = movie.genres?.map((g) => g.name).join(", ");

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        {trailer && (
          <a href={trailer} target="_blank" rel="noopener noreferrer">
            <button>Watch</button>
          </a>
        )}
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;