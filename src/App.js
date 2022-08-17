import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Reviews from "./Pages/Reviews/Reviews";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import NotFound from "./components/NotFound";
import RequireAuth from "./components/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import MyReview from "./Pages/Dashboard/MyReview";
import NewReview from "./Pages/Dashboard/NewReview";

function App() {
  return (
    <div className="App">
      <Navbar>
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route path="my-appointment" element={<MyAppointment />} />
            <Route path="make-admin" element={<MakeAdmin />} />
            <Route path="my-review" element={<MyReview />} />
            <Route path="new-review" element={<NewReview />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
