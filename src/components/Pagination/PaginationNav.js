import { useDispatch } from 'react-redux';
import { setCurrentPage } from "../../redux/pagination-slice";

const PaginationNav = ({ movies, moviesPerPage, currentPage }) => {
    const dispatch = useDispatch();

    const pageNumbers = [];
    
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;

    for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex items-center mt-20">
            <button 
                disabled={currentPage === 1}
                onClick={() => dispatch(setCurrentPage(previousPage))}
                className={`border text-gray-200 cursor-pointer m-2 px-3 py-1 rounded hover:border-yellow-400 ${
                    currentPage === 1
                    ? "opacity-50 hover:border-inherit cursor-not-allowed"
                    : ""
                }`}
            >
                Précédent
            </button>
            <ul className="flex">
                {pageNumbers.map(number => (
                    <li key={number}
                        onClick={() => dispatch(setCurrentPage(number))}
                        className={`font-semibold border text-gray-200 m-2 cursor-pointer px-2 rounded hover:border-yellow-400 ${
                            number === currentPage
                            ? "border-yellow-400"
                            : ""
                        }`}
                    >
                        {number}
                    </li>
                ))}
            </ul>
            <button 
                disabled={currentPage === pageNumbers.length}
                onClick={() => dispatch(setCurrentPage(nextPage))}
                className={`border text-gray-200 cursor-pointer m-2 px-3 py-1 rounded hover:border-yellow-400 ${
                    currentPage === pageNumbers.length
                    ? "opacity-50 hover:border-inherit cursor-not-allowed"
                    : ""
                }`}
            >
                suivant
            </button>
        </nav>
    )
}


export default PaginationNav;