import Header from './components/Header';
import MovieCardsContainer from './components/MovieCardsContainer';
import { movies$ } from './movies';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {getMovies} from './redux/movies-slice';

function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    const getData = async () => {
      const data = await movies$;
      console.log(data);
      return data;
    }

    getData().then((data) => {
      dispatch(getMovies(data));
    })
  },[dispatch])

  return (
    <div className="h-full">
      <Header />
        <MovieCardsContainer />
    </div>
  );
}

export default App;
