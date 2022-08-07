import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { publicRoute } from "./Routes/publicRoutes";
import { privateRoutes } from "./Routes/privateRoutes";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
          <Route element={<RequireAuth />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />}></Route>
            ))}
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
