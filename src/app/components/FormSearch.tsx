import SearchIcon from "./icons/SearchIcon";

const FormSearch = () => {
    return (
        <form className="mb-6 flex flex-wrap items-center gap-2 bg-blue-900 p-4 rounded-xl">
            <span className="min-w-[20px]">
                <SearchIcon className="fill-sky-500" />
            </span>
            <input
                className="flex-1 h-14 p-2 rounded-lg bg-transparent text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                type="text"
                placeholder="Search github username..."
            ></input>
            <button className="bg-sky-500 rounded-lg py-4 px-4 text-white font-bold">
                Search
            </button>
        </form>
    );
};
export default FormSearch;
