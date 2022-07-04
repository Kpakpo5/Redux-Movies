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


    const currentCategory = useSelector((state) => state.categories.currentCategory);

    const getCurrentcategoryMovies = (category, moviesArray) => {
        let categoryMovies = []
        if (category === "") {
            categoryMovies = moviesArray ;
        } else {
            categoryMovies = moviesArray.filter((movie) => movie.category === category);
        }
        
        return categoryMovies;
    }

    const currentCategoryMovies = getCurrentcategoryMovies (currentCategory, movies);

    console.log(currentCategoryMovies);


    const moviesPerPage = useSelector((state) => state.pagination.moviesPerPage);
    const currentPage = useSelector((state) => state.pagination.currentPage);

    const indexOfLastMovie = currentPage * moviesPerPage ;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage ;
    const currentPageMovies  = currentCategoryMovies.slice(indexOfFirstMovie, indexOfLastMovie);

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