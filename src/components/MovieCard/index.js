import { XCircleIcon } from '@heroicons/react/solid';
import MovieEvaluation from './MovieEvaluation';
import { useSelector, useDispatch} from 'react-redux';
import {deleteMovie} from '../../redux/movies-slice';


const MovieCard = ({ title, category, likes, dislikes}) => {
    const dispatch = useDispatch();

    const currentCategory = useSelector((state) => state.categories.currentCategory);

    return (
        <div className={`rounded overflow-hidden bg-[#151618] relative text-white w-56 h-72 flex-col justify-center items-center m-4 shadow-inner shadow-slate-700 hover:shadow-gray-400 pt-10 animate-fade-in-bottom ${
            (currentCategory !== "" && currentCategory !== category)
            ? "hidden"
            : "flex"
        }`}>
            <button 
            className="absolute top-1 right-1 text-r w-6 cursor-pointer"
            onClick={() => dispatch(deleteMovie(title))}
            >
                <XCircleIcon className="text-gray-400 hover:text-red-500"/>
            </button>
            <div className="font-bold p-3 text-center text-xl cursor-default">{title}</div>
            <div className="text-slate-200 text-center mb-auto p-3 cursor-default">{category}</div>
            <MovieEvaluation 
                likes={likes}
                dislikes={dislikes}
            />
        </div>
    )
}


export default MovieCard;