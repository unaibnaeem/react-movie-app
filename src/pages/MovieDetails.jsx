import { useMovies } from "../contexts/MovieContext";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";

import { useSnackbar } from "notistack";

function MovieDetails() {
  const {
    movie,
    isLoading,
    watched,
    handleAddToWatch,
    selectedId,
    favourite,
    handleAddToFavourite,
  } = useMovies();

  const isWatched = watched.map((watch) => watch.imdbID).includes(selectedId);

  const isFavourite = favourite.map((fav) => fav.imdbID).includes(selectedId);

  const { enqueueSnackbar } = useSnackbar();

  function handleAddWatched() {
    const newWatchedMovie = {
      imdbID,
      title,
      year,
      poster,
      imdbRating,
      runtime,
    };

    handleAddToWatch(newWatchedMovie);

    enqueueSnackbar("Added to Watched List", { variant: "success" });
  }

  function handleAddFavourite() {
    const newFavouriteMovie = {
      imdbID,
      title,
      year,
      poster,
      imdbRating,
      runtime,
    };

    handleAddToFavourite(newFavouriteMovie);

    enqueueSnackbar("Added to Favourites", { variant: "success" });
  }

  const {
    imdbID,
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    imdbRating,
  } = movie;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-4 text-white">
          <BackButton />
          <div className="mt-8 px-4 md:grid md:grid-cols-[1fr_3fr] md:gap-x-2">
            <div className="flex justify-center ">
              <img
                src={poster}
                alt={title}
                className="h-80 w-fit rounded-lg md:h-96"
              />
            </div>
            <div className="px-2 md:gap-5 md:px-6">
              <div className="md:flex md:gap-5">
                <div className="md:w-4/6">
                  <h1 className="mt-3 text-center text-2xl md:text-left">
                    {title} | {year}
                  </h1>
                  <p className="mt-3 hidden md:block">{runtime}</p>
                  <p className="mt-6 md:mt-3">
                    <em>{plot}</em>
                  </p>
                  <p className="mt-3">
                    <span className="font-semibold">Starring</span> {actors}
                  </p>
                  <h1 className="mt-3">
                    <span className="font-semibold">Release Date:</span>{" "}
                    {released}
                  </h1>
                </div>
                <div className="mt-4">
                  <p>
                    <span>⭐</span>
                    {imdbRating}
                  </p>
                  <p className="mt-3 text-lg">{genre}</p>
                  <p className="mt-3">Directed By {director}</p>
                </div>
              </div>

              <div className="mt-10 space-x-8 pb-2 md:py-3">
                <button
                  onClick={handleAddWatched}
                  disabled={isWatched}
                  className="rounded-lg border border-gray-800 bg-gray-600 p-4 font-semibold text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-800"
                >
                  {isWatched ? "Added to Watch List" : "Add to Watched List"}
                </button>
                <button
                  onClick={handleAddFavourite}
                  disabled={isFavourite}
                  className="rounded-lg border border-gray-800 bg-gray-600 p-4 font-semibold text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-800"
                >
                  {isFavourite ? "Added to Favourites" : "Add to Favourites"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
