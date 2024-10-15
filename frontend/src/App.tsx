import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Home } from "./components/Home";

const allRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutes.map((eachRoute, index) => (
          <Route
            key={index}
            path={eachRoute.path}
            element={eachRoute.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
