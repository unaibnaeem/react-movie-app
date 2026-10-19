import { useMovies } from "../../contexts/MovieContext";
import Movie from "./Movie";
import Loader from "../Loader";

function MovieList() {
  const { movies, isLoading } = useMovies();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mx-7 mt-4 grid grid-cols-2 gap-x-6 gap-y-4 px-6 text-white md:grid-cols-3 lg:grid-cols-5">
          {movies?.map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
        </div>
      )}
    </>
  );
}

export default MovieList;
