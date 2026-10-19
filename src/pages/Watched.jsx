import { useMovies } from "../contexts/MovieContext";
import BackButton from "../components/BackButton";

function Watched() {
  const { watched, handleDeleteFromWatch } = useMovies();

  return (
    <div className="mt-4 text-white md:px-10">
      <BackButton />
      <div className="mt-4 p-4 md:grid md:grid-cols-[1fr_1fr] md:gap-x-7">
        {watched.map((watch) => (
          <div
            key={watch.title}
            className="mb-3 flex rounded-lg border border-gray-800 shadow"
          >
            <img
              src={watch.poster}
              alt={watch.title}
              className="h-32 w-fit rounded-bl-lg rounded-tl-lg"
            />
            <div className="relative w-full px-7 py-2">
              <div className="space-y-4">
                <h1 className="text-xl font-bold">
                  {watch.title} | {watch.year}
                </h1>
                <h1>
                  <span>⭐</span> {watch.imdbRating}
                </h1>
                <h1>{watch.runtime}</h1>
              </div>
              <div className="absolute bottom-12 right-7 items-center text-xl md:text-2xl">
                <button onClick={() => handleDeleteFromWatch(watch.imdbID)}>
                  ❌
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watched;
