import { XCircleIcon } from '@heroicons/react/solid';
import ProgressBar from "./ProgressBar";
import LikeBox from './LikeBox';
import {useDispatch} from 'react-redux';
import {deleteMovie} from '../../redux/movies-slice';


const MovieCard = ({ title, category, likes, dislikes}) => {
    const dispatch = useDispatch();
    let totalVote = likes + dislikes;
    const likesPercentage = (likes / totalVote) * 100 ;

    return (
        <div className="rounded overflow-hidden bg-[#151618] relative text-white w-56 h-80 flex flex-col justify-evenly items-center m-4  shadow-inner shadow-slate-700 hover:shadow-gray-400 pt-10 ">
            <button 
            className="absolute top-1 right-1 text-r w-6 cursor-pointer"
            onClick={() => dispatch(deleteMovie(title))}
            >
                <XCircleIcon className="text-gray-400 hover:text-red-500"/>
            </button>
            <div className="font-bold p-3 text-center text-xl cursor-default">{title}</div>
            <div className="text-slate-200 text-center p-3 cursor-default">{category}</div>
            <ProgressBar 
                likes={likesPercentage}
            />
            <LikeBox 
                likes={likes}
                dislikes={dislikes}
            />
        </div>
    )
}


export default MovieCard;