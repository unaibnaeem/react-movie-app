import { Link } from "react-router-dom";
import { useMovies } from "../../contexts/MovieContext";

function Movie({ movie }) {
  const { handleSelectedMovie } = useMovies();

  const { imdbID, Title: title, Year: year, Poster: poster } = movie;

  return (
    <Link to={`moviedetails/${imdbID}`}>
      <div
        onClick={() => handleSelectedMovie(imdbID)}
        className="relative flex cursor-pointer flex-col items-center justify-between rounded-lg border border-gray-800 bg-gray-800 p-2"
      >
        <img src={poster} alt={title} className="w-full rounded-lg" />
        <div className="my-3 flex w-full items-center justify-between px-1">
          <h1>{title}</h1>
          <p>
            <em className="font-bold">{year}</em>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
