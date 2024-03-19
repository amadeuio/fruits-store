import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import "./css/reset.css";
import "./css/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
