import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { SmoothieProvider } from "./contexts/SmoothieContext";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <SmoothieProvider>
      <App />
    </SmoothieProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
