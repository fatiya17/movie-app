import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovie from "../components/AddMovie/AddMovie";

// import Button from "../components/UI/Button";

function Home (){
    // const [movies, setMovies] = useState(data);
    // const [movies] = useState(data); 
    return(
        <div>
           <main>
            <Hero />
            {/* <Button variant='primary'>Lihat</Button>
            <Button variant='secondary' full>Lihat</Button> */}
            {/* <Movies movies={movies} setMovies={setMovies}/> */}
            <Movies title="Lates Movie" />
            {/* <AddMovie movies={movies}/> */}
            </main>
           
        </div>
    )
}
export default Home;