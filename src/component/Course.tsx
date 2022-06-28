import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div>
      Course
      <Link to={`/course/${"kdmfmk"}`}>goto</Link>
    </div>
  );
};

export default Course;
