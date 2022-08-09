import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import NotFound from "../components/NotFound";
import Login from "../Pages/Login/Login";
import Reviews from "../Pages/Reviews/Reviews";
import SignUp from '../Pages/Login/SignUp'

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/reviews", name: "Reviews", Component: Reviews },
  { path: "/login", name: "Login", Component: Login },
  { path: "/signup", name: "SignUp", Component: SignUp },
  { path: "*", name: "NotFound", Component: NotFound },
];
