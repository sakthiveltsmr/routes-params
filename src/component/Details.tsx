import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { courseid } = useParams();
  return <div>Details {courseid}</div>;
};

export default Details;
