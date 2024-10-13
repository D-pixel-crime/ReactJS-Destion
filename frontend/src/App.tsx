import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

const allRoutes = [
  {
    path: "/",
    element: <h1>Dashboard</h1>,
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
