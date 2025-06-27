import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreateMovie from './pages/movie/Create';
import Layout from './layout/index';
import Popular from './pages/movie/Popular';
import TopRated from './pages/movie/TopRated';
import NowPlaying from './pages/movie/NowPlaying';
import Counter from './components/Counter/Counter';
import DetailMovie from './pages/Detail';
import data from './utils/constants/data';
import { useState } from 'react';
import MoviesContext from './components/context/MoviesContext';

function App() {

  const [movies, setMovies] = useState(data);
  const contextValue = {
    movies, setMovies
  }
  return (
    <>
    <MoviesContext.Provider value={contextValue}> 
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie/create' element={<CreateMovie />}></Route>
        <Route path='/movie/now' element={<NowPlaying />}></Route>
        <Route path='/movie/popular' element={<Popular />}></Route>
        <Route path='/movie/top' element={<TopRated />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/movie/:id' element={<DetailMovie />}></Route>
      </Routes>
    </Layout>
    </MoviesContext.Provider>
    </>
  );
}

export default App;