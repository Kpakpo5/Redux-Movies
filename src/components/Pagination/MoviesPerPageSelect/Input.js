import { setMoviesPerPage } from "../../../redux/pagination-slice";
import { useSelector, useDispatch } from "react-redux";

const Input = ({ inputId, inputValue}) => {
    const dispatch = useDispatch();

    const moviesPerPage = useSelector((state) => state.pagination.moviesPerPage);
    console.log(moviesPerPage);
    console.log(inputValue);

    return (
        <div className="flex items-center text-yellow-400 mx-6 cursor-pointer">
            <input onChange={() => dispatch(setMoviesPerPage(inputValue))} id={inputId} type="radio" value={inputValue.toString()} name="per-page"          className="cursor-pointer w-4 h-4 text-yellow-400 border-gray-300 accent-yellow-400" />
            <label htmlFor={inputId} className="h-7 w-7 rounded-full p-1 flex items-center justify-center border hover:border-yellow-400 hover:text-yellow-400 border-gray-300 ml-2 text-sm font-medium text-gray-300 cursor-pointer">{inputValue}</label>
        </div>
    )
}


export default Input;