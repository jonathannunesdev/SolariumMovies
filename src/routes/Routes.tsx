import { useRoutes } from "react-router-dom";

import { SearchList } from "../pages/searchList";
import { Home } from "../pages/home";
import { Logged } from "../pages/logged";
import { DetailedSearch } from "../pages/detailedSearch";
import { NoResults } from "../pages/noResults";
import { Favorites } from "../pages/favorites";

export const Routes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/favorites", element: <Favorites /> },
    { path: "/logged", element: <Logged /> },
    { path: "/searchlist", element: <SearchList /> },
    { path: "/noResults", element: <NoResults /> },
    { path: "/detailed/:media_type/:id", element: <DetailedSearch /> },
  ]);
};
