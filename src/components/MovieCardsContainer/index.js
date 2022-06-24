import MovieCard from "../MovieCard";
import { useSelector } from "react-redux";

const MovieCardsContainer = () => {
    const movies = useSelector((state) => state.movies.moviesList);

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