import Header from './components/Header';
import PagesContainer from './components/PagesContainer';
import { movies$ } from './movies';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getMovies} from './redux/movies-slice';

function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    const getData = async () => {
      const data = await movies$;
      return data;
    }

    getData().then((data) => {
      dispatch(getMovies(data));
    })
  });

  return (
    <div className="h-full">
      <Header />
      <PagesContainer />
    </div>
  );
}

export default App;
