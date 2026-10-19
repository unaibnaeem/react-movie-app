import { useMovies } from "../../contexts/MovieContext";

function Search() {
  const { query, setQuery } = useMovies();

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-36 rounded-lg border-none bg-indigo-500 px-4 py-2 text-white placeholder-gray-300 focus:outline-none sm:w-full"
      />
    </div>
  );
}

export default Search;
