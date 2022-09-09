import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import RequireAuth from "./components/RequireAuth";
import ViewProfile from "./components/ViewProfile";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import NewReview from "./Pages/Dashboard/NewReview";
import Subscribers from "./Pages/Dashboard/Subscribers";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Reviews from "./Pages/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/view-profile" element={<ViewProfile />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="my-appointment" element={<MyAppointment />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="make-admin" element={<MakeAdmin />} />
          <Route path="my-review" element={<MyReview />} />
          <Route path="new-review" element={<NewReview />} />
          <Route path="subscriber" element={<Subscribers />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
