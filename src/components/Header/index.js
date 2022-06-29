import CategorySelect from "../CategorySelect";

const Header = () => {
    return (
    <header className="w-full h-14 sm:h-20 flex justify-between items-center px-4 sm:px-8 xl:px-28">
        <h1 className="text-2xl xl:text-3xl font-bold text-yellow-400">Movies.</h1>
        <CategorySelect />
    </header>
    
    );
};



export default Header;