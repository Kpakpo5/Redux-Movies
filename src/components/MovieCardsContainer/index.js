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

    if(!movies) {
        return <div>Loading...</div>
    }

    return (
    <div className="flex flex-wrap justify-center mt-20 xl:w-4/5 mx-auto">
        {movies.map((movie) => 
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