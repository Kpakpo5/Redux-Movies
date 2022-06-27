import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

export const MovieEvaluation = ({ likes, dislikes }) => {

    const [like, setLike] = useState(likes);
    const [dislike, setDislike] = useState(dislikes);
    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);

    const handleLikeClick = () => {
        if(likeActive) {
            setLikeActive(false);
            setLike(like-1);
        } else if (dislikeActive) {
            setDislikeActive(false);
            setDislike(dislike-1)
            setLikeActive(true);
            setLike(like+1)
        } else {
            setLikeActive(true);
            setLike(like+1)
        }
    };

    const handleDislikeClick = () => {
        if(dislikeActive) {
            setDislikeActive(false);
            setDislike(dislike-1)
        } else if (likeActive) {
            setLikeActive(false);
            setLike(like-1);
            setDislikeActive(true);
            setDislike(dislike+1)
        } else {
            setDislikeActive(true);
            setDislike(dislike+1)
        }
    };

    let totalVote = like + dislike;
    const likesPercentage = (like / totalVote) * 100 ;

    return (
        <div className="w-full">
            <div className="h-1 w-4/5 mb-6 mx-auto bg-gray-300 rounded">
                <div 
                className="h-full bg-yellow-400 rounded"
                style={{width: `${likesPercentage}%`}}
                >
                </div>
            </div>
            <div className="bg-[#f8f8f8] w-full mt-auto ">
                <div className="flex justify-center">
                    <button 
                    onClick={handleLikeClick}
                    className="cursor-pointer rounded text-[#efefef] m-2 border py-1 px-3 hover:bg-slate-200">
                        <ThumbUpIcon className={`w-8 ${
                            likeActive ? "text-green-500" : "text-slate-500"
                        }`}/>
                    </button>
                    <button 
                    onClick={handleDislikeClick}
                    className="cursor-pointer rounded text-[#efefef] m-2 border py-1 px-3 hover:bg-slate-200">
                        <ThumbDownIcon className={`w-8 ${
                            dislikeActive ? "text-red-500" : "text-slate-500"
                        }`}/>
                    </button>
                </div>
                <div className="flex text-black justify-center font-medium">
                    <div className="w-16 text-center mx-2 text-slate-600">{like}</div>
                    <div className="w-16 text-center mx-2 text-slate-600">{dislike}</div>
                </div>
            </div>
        </div>
    )
}


export default MovieEvaluation;