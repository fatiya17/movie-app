import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button  from "../UI/Button";
import { Heading, Paragraph } from "../UI/Typography";
import { Image } from "../UI/Media/index.jsx"; 
import axios from "axios";

const StyledHero = styled.div`
  margin: 1rem;
  padding: 10px;

  @media (min-width: 992px) {
    max-width: 100%;
    // margin: 3rem auto;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20rem;

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const Left = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 50%;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const Genre = styled.h3`
  color: #b5179e;
  margin-bottom: 1rem;
  font-size: 1.59rem;
`;

const Right = styled.div`
  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

function Hero() {
  const [movie, setMovie] = useState({});
  const API_KEY = import.meta.env.VITE_API_KEY;
  const genres = movie && movie.genres ? movie.genres.map((genre) => genre.name).join(", ") : "";
  const idTrailer = movie && movie.videos && movie.videos.results && movie.videos.results.length > 0 ? movie.videos.results[0].key : "";


  useEffect(() => {
    async function fetchTrendingMovies() {
      const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios(URL);
      const firstMovie = response.data.results[0];
      return firstMovie;
    }

    async function fetchDetailMovie() {
      const trendingMovie = await fetchTrendingMovies();
      const id = trendingMovie.id;

      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios(URL);
   
      setMovie(response.data);
    }
    fetchDetailMovie();
  }, [API_KEY]);

  return (
    <StyledHero>
      <Section>
        <Left>
          <Heading>{movie.title}</Heading>
          <Genre>{genres}</Genre>
          <Paragraph>{movie.overview}</Paragraph>
          <Button size="md" href={idTrailer ? `https://www.youtube.com/watch?v=${idTrailer}` : "#"} target="_blank" disabled={!idTrailer}>Watch Movie</Button>
        </Left>
        <Right>
          <Image src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`} alt={movie.title}/>
        </Right>
      </Section>
    </StyledHero>
  );
}

export default Hero;