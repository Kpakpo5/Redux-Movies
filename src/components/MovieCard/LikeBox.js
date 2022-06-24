import { ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/solid";

const LikeBox = ({ likes, dislikes }) => {
    return (
        <div className="bg-[#f8f8f8] w-full mt-auto ">
            <div className="flex justify-center">
                <button className="cursor-pointer rounded text-[#efefef] m-2 border py-1 px-3 hover:bg-slate-200">
                    <ThumbUpIcon className="text-slate-500 w-8"/>
                </button>
                <button className="cursor-pointer rounded text-[#efefef] m-2 border py-1 px-3 hover:bg-slate-200">
                    <ThumbDownIcon className="text-slate-500 w-8"/>
                </button>
            </div>
            <div className="flex text-black justify-center font-medium">
                <div className="w-16 text-center mx-2 text-slate-600">{likes}</div>
                <div className="w-16 text-center mx-2 text-slate-600">{dislikes}</div>
            </div>
        </div>
    );
};


export default LikeBox;