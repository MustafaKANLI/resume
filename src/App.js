import { BrowserRouter as Router, useRoutes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";

const App = () => {
  let routes = useRoutes([
    { path: "*", element: <Navigate to="/" /> },
    { path: "/", element: <Home /> },
    { path: "/skills", element: <Skills /> },
    { path: "/projects", element: <Projects /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Navbar />
      <App />
    </Router>
  );
};

export default AppWrapper;
