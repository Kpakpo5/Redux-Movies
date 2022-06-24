
const ProgressBar = ({ likes }) => {
    return (
        <div className="h-1 w-4/5 mt-auto bg-gray-300 rounded">
            <div 
            className="h-full bg-yellow-400 rounded"
            style={{width: `${likes}%`}}
            >
            </div>
        </div>
    )
}


export default ProgressBar;
