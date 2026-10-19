import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Watched from "./pages/Watched";
import Favourites from "./pages/Favourites";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
