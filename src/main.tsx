import React from "react";
import ReactDOM from "react-dom/client";
import "./css/reset.css";
import "./css/global.css";
import Router from "./Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
