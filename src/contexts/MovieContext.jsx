/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const MovieContext = createContext();

const KEY = import.meta.env.VITE_API_URL;

function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [movie, setMovie] = useState({});

  const [watched, setWatched] = useLocalStorageState([], "watched");

  const [favourite, setFavourite] = useLocalStorageState([], "favourite");

  function handleSelectedMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleAddToWatch(movie) {
    setWatched((watch) => [...watch, movie]);

    //localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleAddToFavourite(movie) {
    setFavourite((fav) => [...fav, movie]);

    //localStorage.setItem("favourite", JSON.stringify([...favourite, movie]));
  }

  function handleDeleteFromWatch(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  function handleDeleteFromFavourite(id) {
    setFavourite((fav) => fav.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal },
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setIsLoading(false);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query],
  );

  useEffect(
    function () {
      const controller = new AbortController();

      async function getMovieDetails() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`,
            { signal: controller.signal },
          );

          const data = await res.json();

          setMovie(data);

          setIsLoading(false);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      getMovieDetails();

      return function () {
        controller.abort();
      };
    },
    [selectedId],
  );

  return (
    <MovieContext.Provider
      value={{
        movies,
        isLoading,
        error,
        query,
        setQuery,
        selectedId,
        handleSelectedMovie,
        movie,
        watched,
        handleAddToWatch,
        handleDeleteFromWatch,
        favourite,
        handleAddToFavourite,
        handleDeleteFromFavourite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MovieContext);

  if (context === undefined)
    throw new Error("MovieContext was used outside the MovieProvider");

  return context;
}

export { MovieProvider, useMovies };
