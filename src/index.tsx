import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <App />
  </Router>
);

// function Home() {
//   return (
//     <div>
//       home
//       {/* <Outlet /> */}
//     </div>
//   );
// }
// function Course() {
//   return (
//     <div>
//       Course
//       <Link to={`/course/${21313}`}>goto</Link>
//       {/* <Outlet /> */}
//     </div>
//   );
// }
// function Details() {
//   const { courseid } = useParams();
//   return <div>Details {courseid}</div>;
// }
reportWebVitals();
