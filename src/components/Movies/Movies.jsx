
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { Heading } from "../UI/Typography";
import { useContext } from "react";
import MovieContext from "../context/MoviesContext"; // import context

function Movies(props) {  // tambahkan props
  // const movies = data;
// const { movies, setMovies } = props; 
// ambil props movies dan setMovies
const {title= "Latest Movies"} = props;
const {movies} = useContext(MovieContext); // ambil movies dari context
  function handleClick() {
    const movie = {
      id: "xyz", 
      title: "Jigsaw",
      year: 2021, 
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    console.log(movie);
    // setMovies([...movies, movie]);
  }

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
           {/* Element button diberikan event click: onClick */}
           <button onClick={handleClick}>Add Movie</button>
        </section>
      </div>
    </div>
  );
}

export default Movies;
