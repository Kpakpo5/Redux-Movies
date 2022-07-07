import { useSelector, useDispatch } from "react-redux"
import { setCurrentCategory } from "../../redux/categories-slice";
import { setCurrentPage } from "../../redux/pagination-slice";
import Option from './Option';

const CategorySelect = () => {
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.categories.categoriesList);
    const handleChange = (e) => {
        const optionValue = e.target.value;
        dispatch(setCurrentCategory(optionValue));
        dispatch(setCurrentPage(1));
    }

    return (
        <div className="w-44">  
            <select 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-yellow-400 block w-full p-2.5"
                onChange={handleChange}
            >
                <option value="">Filtrer par catégorie</option>
                {categories.map(category => <Option key={category} categoryName={category} />)}
            </select>
        </div>
    )
}


export default CategorySelect;