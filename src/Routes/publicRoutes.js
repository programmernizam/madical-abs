import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import NotFound from "../components/NotFound";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Appointment from "../Pages/Appointment/Appointment";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/appointment", name: "Appointment", Component: Appointment },
  { path: "/login", name: "Login", Component: Login },
  { path: "/signup", name: "SignUp", Component: SignUp },
  { path: "*", name: "NotFound", Component: NotFound },
];
