import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Details from "./component/Details";
import Course from "./component/Course";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/course/:courseid" element={<Details />} />
    </Routes>
  );
}

export default App;
