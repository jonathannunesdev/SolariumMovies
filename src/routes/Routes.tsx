import { useRoutes } from "react-router-dom";

import { SearchList } from "../pages/searchList";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Logged } from "../pages/logged";
import { DetailedSearch } from "../pages/detailedSearch";
import { NoResults } from "../pages/noResults";
import { Favorites } from "../pages/favorites";
import { ResetPassword } from "../pages/forgotPassword";
import { PrivacyPolicy } from "../pages/privacyPolicy";

export const Routes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/favorites", element: <Favorites /> },
    { path: '/login', element: <Login />},
    { path: "/logged", element: <Logged /> },
    { path: "/searchlist", element: <SearchList /> },
    { path: "/noResults", element: <NoResults /> },
    { path: "/reset-password", element: <ResetPassword /> },    
    { path: "/privacy-policy", element: <PrivacyPolicy/>},
    { path: "/detailed/:media_type/:id", element: <DetailedSearch /> },
  ]);
};
