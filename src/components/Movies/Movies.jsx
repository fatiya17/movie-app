
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { Heading } from "../UI/Typography";
import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";

function Movies(props) {
  const { title = "Latest Movies" } = props;
  const { movies } = useContext(MoviesContext); 
  
  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <Heading className={styles.movies__title}>{title}</Heading>
          <div className={styles.movie__container}>
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Movies;
