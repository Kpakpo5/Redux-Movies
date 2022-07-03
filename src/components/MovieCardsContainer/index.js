import MovieCard from "../MovieCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../redux/categories-slice";

const MovieCardsContainer = () => {
    const dispatch = useDispatch();

    const movies = useSelector((state) => state.movies.moviesList);
    
    useEffect(() => {
        const categories = movies.map(movie => {
           return movie.category;
        });
        const categoriesCollection = [...new Set(categories)];
        dispatch(getCategories(categoriesCollection));
    },[movies]);


    const moviesPerPage = useSelector((state) => state.pagination.moviesPerPage);
    const currentPage = useSelector((state) => state.pagination.currentPage);

    const indexOfLastMovie = currentPage * moviesPerPage ;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage ;
    const currentPageMovies  = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    console.log(currentPageMovies);

    if(!movies) {
        return <div>Loading...</div>
    }

    return (
    <div className="flex flex-wrap justify-center mt-20 xl:w-4/5 mx-auto">
        {currentPageMovies.map((movie) => 
            <MovieCard 
                key={movie.title}
                title={movie.title}
                category={movie.category}
                likes={movie.likes}
                dislikes={movie.dislikes}
            />
        )}
    </div>
    )
}


export default MovieCardsContainer;