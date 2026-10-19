import Navbar from "../components/Header/Navbar";
import MovieList from "../components/Movies/MovieList";

function Home() {
  return (
    <div className="mx-auto mb-4 md:w-full">
      <Navbar />
      <MovieList />
    </div>
  );
}

export default Home;
