import MovieCard from "../MovieCard";

const Page = ({ movies }) => {
    return (
        <div className="flex flex-wrap justify-center">
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


export default Page;