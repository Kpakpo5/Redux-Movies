import { XCircleIcon } from '@heroicons/react/solid';
import ProgressBar from "./ProgressBar";
import LikeBox from './LikeBox';

const MovieCard = () => {
    return (
        <div className="rounded overflow-hidden bg-[#151618] relative text-white w-56 h-80 flex flex-col justify-evenly items-center m-4  shadow-inner shadow-slate-700 hover:shadow-gray-400 pt-10 ">
            <button className="absolute top-1 right-1 text-r w-6 cursor-pointer">
                <XCircleIcon className="text-gray-400 hover:text-red-500"/>
            </button>
            <div className="font-bold p-3 text-center text-xl cursor-default">Titre et titre beaucoup plus long</div>
            <div className="text-slate-200 text-center p-3 cursor-default">Catégorie</div>
            <ProgressBar />
            <LikeBox />
        </div>
    )
}


export default MovieCard;