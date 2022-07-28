import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import NotFound from "../components/NotFound";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "*", name: "NotFound", Component: NotFound },
];
