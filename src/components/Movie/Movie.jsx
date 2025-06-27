import styled from "styled-components";
import { Heading, Subtitle, Paragraph } from "../UI/Typography";
import { Image } from "../UI/Media";
import { Link } from "react-router-dom";

const StyledMovie = styled.div`
  margin-bottom: 1rem;
  width: 100%; 

  /* Medium Screen */
  @media (min-width: 768px) {
    width: calc(50% - 1rem); 
    margin: 0.5rem; 
  }

  /* Large Screen */
  @media (min-width: 992px) {
    width: calc(25% - 2rem); 
    margin: 1rem; 
  }
`;

function Movie(props) {
  const { movie } = props;

  const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie?.poster_path}`;
  // Gunakan movie.release_date, kalau ada ambil tahun saja (YYYY)
  const year = movie.year || (movie.release_date);

  return (
    <StyledMovie>
      <Image src={movie.poster || tmdbImage} alt={movie.title} />
      <Link to={`/movie/${movie.id}`}>
        <Subtitle color="blue" >{movie.title}</Subtitle>
      </Link>
      <Paragraph>{year}</Paragraph>
    </StyledMovie>
  );
}

export default Movie;
