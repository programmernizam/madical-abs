import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { publicRoute } from "./Routes/publicRoutes";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
