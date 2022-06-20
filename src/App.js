import logo from "./logo.svg";
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
